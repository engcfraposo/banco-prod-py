const { Router } = require('express');

const ArticleController = require('../controllers/ArticleController');
const BannerController = require('../controllers/BannerController');
const BookController = require('../controllers/BookController');
const MonograpyController = require('../controllers/MonograpyController');

const UserController = require('../controllers/UserController');



const indexRoutes = Router();


indexRoutes.post('/monograpy', MonograpyController.store);



indexRoutes.post('/article', ArticleController.store);


indexRoutes.post('/banner', BannerController.store);


indexRoutes.post('/book', BookController.store);


indexRoutes.post('/user', UserController.store);


module.exports = indexRoutes;