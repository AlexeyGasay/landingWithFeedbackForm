const Router = require("express");
const router = new Router();

const formController = require("./formController");


router.post('/application', formController.createApplication);
router.get('/applications', formController.getApplication);
router.delete('/application', formController.deleteApplication);


module.exports = router;