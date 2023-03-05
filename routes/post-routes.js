const Router = require('express');
const router = new Router();

const postController = require('../controllers/post-controller')

// Для кожної з ф-цій встановлюємо шлях/роут, по якому вона буде відпрацьовувати.
// Запит - першим параметром вказуємо url, другим- функція, що буде відпрацьовуватись по запиту на цей url

router.post('/post', postController.createPost);
router.get('/post', postController.getPostsByUser);
// router.get('/user/:id', userController.getOneUser);

// router.put('/user/', userController.updUser);

// router.delete('/user/:id', userController.deleteUser);



module.exports = router;