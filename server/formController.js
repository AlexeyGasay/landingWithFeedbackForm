const db = require("./db");

class formController {
  async createApplication(req, res) {
    try {
      const {email, name, subject, message} = req.body;
      
      // Проверка на существования заявки
      const existApplication = await db.query(`SELECT * FROM application WHERE email = $1`, [email])
  
      if ( existApplication.rows.length ) 
      {
        // return res.json({ message: "Пользователь уже существует", status: false })
        return res.status(400).json({message: "Заявка с таким email уже существует"});
      }


      // Создаем новую заявку
      const newApplication = await db.query(`INSERT INTO application
        (email, name, subject, message)
        values ($1, $2, $3, $4) RETURNING *`,
        [email, name, subject, message]);

      return res.json( { application: newApplication.rows[0] } )

    } catch (e) {
      console.log(e);
      res.status(400).json("Error " + e)
    }
  }

  async getApplication(req, res) {

    const email = req.query.email;

    try {
      const applications = await db.query(`SELECT * FROM application WHERE email LIKE'${email}%'`);

      return res.json({data: applications.rows})

    } catch (e) {
      return res.status(400).json(e)
    }
  }

  async deleteApplication(req, res) {
    try {
      
    const email = req.query.email;

    const deeltedApplication =  await db.query(`DELETE FROM application WHERE email = '${email}' RETURNING *`);
      console.log(deeltedApplication.rows[0]);
    res.json("Удален " + deeltedApplication.rows[0].email )

  } catch (e) {
    console.log(e);
  }
  }
}


module.exports = new formController();