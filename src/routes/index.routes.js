const {Router} = require('express');
const router = Router();
const {renderAbout,renderIndex} = require('../controllers/index.controller');

router.get('/',renderIndex);

router.get('/about',renderAbout);

router.get('/blog',);

module.exports = router;