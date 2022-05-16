
// ВАЛИДАЦИЯ

let form = document.querySelector("form"); 
let sendBtn = document.getElementById("feedback__send_btn");

let formInputs = [];

for (let i = 0; i < form.length; i++) {
  const element = form[i];
  
  if ( element.classList.contains("feedback__form_input") )
  {
    formInputs.push(element);
  }
 
}


let validEmail = false;


function validate(e) {

  let value = e.target.value;

  // EMPTY CHECK
  if ( value <= 0 ) 
  {
    e.target.classList.add('invalid_data');
  }
  else e.target.classList.remove('invalid_data');

  // EMAIL CHECK
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if ( e.target.name == "email" ) 
  {
    if ( value.match(emailPattern) ) 
    {
      e.target.classList.remove('invalid_data');
      validEmail = true;
    }
    else {
      e.target.classList.add('invalid_data');
      validEmail = false
    }
  }

}


// ОТПРАВКА ДАННЫХ
function sendData() {
  // FULL CHECK

  let numberOfInputs = formInputs.length;
  let correctInputs = 0;
  

  for (let i = 0; i < formInputs.length; i++) {
    const element = formInputs[i];

    if ( element.value.length > 0 )
    {
      correctInputs += 1
    }

  }
  if ( validEmail && correctInputs == numberOfInputs )
  {
    alert( 'Все в порядке' )
  }
  else return alert( 'Что-то не так' )


  // SEND DATA 
  let body = {
    name: "",
    email: "",
    subject: "",
    message: ""
  };

  for (let i = 0; i < formInputs.length; i++) {
    const element = formInputs[i];

    switch (element.name) {
      case "name":
        body.name = element.value;

      case "email":
        body.email = element.value;

      case "subject":
        body.subject = element.value;

      case "message":
        body.message = element.value;
      
    }
    
  }

  fetch("https://secret-taiga-20525.herokuapp.com/api/application", {
    body: JSON.stringify(body),
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    res.json();

    if ( res.status == 400 ) 
    {
      alert("Заявка с таким email уже существует")
    }

  })

}



form.addEventListener("input", validate);
form.addEventListener("click", validate);

sendBtn.addEventListener("click", sendData);