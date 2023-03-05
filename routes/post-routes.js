const Router = require('express');
const router = new Router();

const postController = require('../controllers/post-controller')

// Для кожної з ф-цій встановлюємо шлях/роут, по якому вона буде відпрацьовувати.
// Запит - першим параметром вказуємо url, другим- функція, що буде відпрацьовуватись по запиту на цей url

// POST
router.post('/post', postController.createPost);
//GET
// router.get('/post', postController.getPosts);
router.get('/post', postController.getPostsByUser);
// PUT
router.put('/post/', postController.updPost);
// DELETE
router.delete('/post/', postController.deletePost);


module.exports = router;