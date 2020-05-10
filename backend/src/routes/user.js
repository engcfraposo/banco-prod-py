const { Router } = require('express');

// Controllers de conteudo

const ArticleController = require('../controllers/ArticleController');
const BannerController = require('../controllers/BannerController');
const BookController = require('../controllers/BookController');
const MonograpyController = require('../controllers/MonograpyController');

//Controllers de usuários
const UserController = require('../controllers/UserController');
const SessionController = require('../controllers/SessionController');

//Controllers de Busca

const AuthorController = require('../controllers/search/AuthorController')
const UniversityController = require('../controllers/search/UniversityController')
const KeywordsController = require('../controllers/search/KeywordsController')
const JournalController = require('../controllers/search/JournalController')
const IssnController = require('../controllers/search/IssnController')
const IsbnController = require('../controllers/search/IsbnController')


const userRoutes = Router();

//Rotas de conteudo

userRoutes.get('/monograpy', MonograpyController.index);

userRoutes.get('/article', ArticleController.index);

userRoutes.get('/banner', BannerController.index);

userRoutes.get('/book', BookController.index);

userRoutes.get('/user', UserController.index);

//Controles de usuários

userRoutes.get('/user', UserController.index);
userRoutes.post('/user', UserController.store);

userRoutes.post('/sessions', SessionController.create);


//Controles de Buscas

userRoutes.get('/author/search', AuthorController.index);
userRoutes.get('/university/search', UniversityController.index);
userRoutes.get('/keywords/search', KeywordsController.index);
userRoutes.get('/journal/search', JournalController.index);
userRoutes.get('/issn/search', IssnController.index);
userRoutes.get('/isbn/search', IsbnController.index);


module.exports = userRoutes;