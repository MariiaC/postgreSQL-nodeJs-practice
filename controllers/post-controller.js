const db = require("../db");

class PostController {
     
  // POST
  async createPost(req, res) {
    const { title, content, userId } = req.body;
    const newPost = await db.query(
         "INSERT INTO post (title, content,user_id) values ($1, $2, $3) RETURNING *", [title, content, userId]);
       
    res.json(newPost.rows[0]);
     };

      // // GET all
     // async getPosts(req, res) {
     //      const posts = await db.query("SELECT * FROM post");
     //      res.json(posts.rows)
     // };

  // GET one
  async getPostsByUser(req, res) {
    // тут ми отримаємо id не з params, а з query. Тобото, це не частина строки запиту, а окремий квері параметр який вказується після ?.
       const id = req.query.id;  // вибірку робимо по user_id http://localhost:8080/api/post?id=1
    const post = await db.query("SELECT * from post where user_id=$1", [id]); 
    res.json(post.rows);
     };

  // PUT Функція UPDATE нічого не повертає
     async updPost(req, res) {  
          const { title, content, userId } = req.body;
    const post = await db.query(
      "UPDATE post set title = $1, content =$2 where user_id = $3 RETURNING *",
      [title, content, userId]
    );
    res.json(post.rows);
     };

    // DELETE one
     async deletePost(req, res) {
      const id = req.query.id; 
      const post = await db.query("DELETE FROM post where user_id = $1", [id]);
      console.log('post deleted');
      res.json(post.rows[0]);
     };
};

module.exports = new PostController();
