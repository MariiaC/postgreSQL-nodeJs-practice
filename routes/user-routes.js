const Router = require("express");
const router = new Router();

const userController = require("../controllers/user-controller");

// Для кожної з ф-цій встановлюємо шлях/роут, по якому вона буде відпрацьовувати.
// Запит - першим параметром вказуємо url, другим- функція, що буде відпрацьовуватись по запиту на цей url


// POST
router.post("/user", userController.createUser);
// GET
router.get("/user", userController.getUsers);
router.get("/user/:id", userController.getOneUser);
// PUT
router.put("/user/", userController.updUser);
// DELETE
router.delete("/user/:id", userController.deleteUser);




module.exports = router;
