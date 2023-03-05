const db = require('../db');

class PostController{

   async createPost(req, res) {
        const { title, content, userId } = req.body;
        const newPost = await db.query('INSERT INTO post (title, content,user_id) values ($1, $2, $3) RETURNING *',[title, content,userId])
   res.json(newPost.rows[0])
    };

    async getPostsByUser(req, res) {
        // тут ми отримаємо id не з params, а з query. Тобото, це не частина строки запиту, а окремий квері параметр який вказується після ?.
        const id = req.query.id;
        const posts = await db.query('SELECT * from post where user_id=$1', [id])
res.json(posts.rows)
}

};

module.exports = new PostController();
