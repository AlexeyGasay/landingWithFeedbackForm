// Обработка заявок
let applicationsBlock = document.getElementById("applications_block");
let applicationsInput = document.getElementById("applications_input");


let deleteBtn = document.getElementById("application__delete_btn");




let applications = [];

function renderApplications() {
  
  let applicationDiv = ``;

  applications.map(el => {
      applicationDiv += `<div class="application">
        <div class="email">Email: ${el.email}</div>
        <div>Subject: ${el.subject}</div>
        <div>Name: ${el.name}</div>
        <div>Message: ${el.message}</div>

        <button id="application__delete_btn">DELETE</button>
      </div>`
  });

  applicationsBlock.innerHTML = applicationDiv;

}

async function fetchApplications(e) {
  let value = e.target.value;

  await fetch(`https://secret-taiga-20525.herokuapp.com/api/applications?email=${value}`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then( res => res.json() )
    .then( data => {
      console.log(data);
      applications = data.data
    });
  
  // Отрисовка элементов
  renderApplications()
  
  let applicationsList = document.querySelectorAll(".application");

  applicationsList.forEach(element => {
    // Найти в каждой заявке div.email, взять текст и разделить по пробелу
    let email = element.getElementsByClassName("email")[0].textContent.split(" ")[1];
    
    // Кнопкка удалить
    let btn = element.getElementsByTagName("button")[0];
    
    btn.addEventListener("click", ()=> deleteApplication(email))
    
  });

}

async function deleteApplication(email) {
  const res = await fetch(`https://secret-taiga-20525.herokuapp.com/api/application?email=${email}`, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then( res => res.json() )
  .then( data => {
    alert(data);
  });

}
  
applicationsInput.addEventListener("input", fetchApplications)