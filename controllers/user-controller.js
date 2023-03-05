// working with quiries

const db = require("../db"); // завдяки цьому будемо писати запити до БД. Всі запити до БД асинхронні

class UserController {
  // POST Функція INSERT нічого не повертає
  async createUser(req, res) {
    const { name, surname } = req.body;
    // $1 =name, $2=surname. 1й пареметр- SQL запит, 2й- масив, куди прокидуються значення values ($1, $2)
    const newPerson = await db.query(
      "INSERT INTO person (name, surname) values ($1, $2) RETURNING *",
      [name, surname]
    );

    console.log(name, surname);
    res.json(newPerson.rows[0]);
  }

  // GET all
  async getUsers(req, res) {
    const users = await db.query("SELECT * FROM person");
    res.json(users.rows);
  }

  // GET one
  async getOneUser(req, res) {
    const id = req.params.id;
    const user = await db.query("SELECT * FROM person where id = $1", [id]);
    res.json(user.rows[0]);
  }

  // PUT Функція UPDATE нічого не повертає
  async updUser(req, res) {
    const { id, name, surname } = req.body;
    const user = await db.query(
      "UPDATE person set name = $1, surname =$2 where id = $3 RETURNING *",
      [name, surname, id]
    );
    res.json(user.rows);
  }

  // DELETE one
  async deleteUser(req, res) {
    const id = req.params.id;
    const user = await db.query("DELETE FROM person where id = $1", [id]);
    console.log("user deleted");
    res.json(user.rows[0]);
  }
}

module.exports = new UserController();
