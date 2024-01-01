const { Router } = require('express');
const router = Router();

const { createUser,authUser } = require('../controllers/auth.controller');
const { createPost,getPostsList } = require('../controllers/posts.controller');
const verifyToken = require('./validation-token');

router.post('/user/add', createUser);
router.post('/auth', authUser);
router.post('/posts/create',verifyToken, createPost);
router.get('/posts/list',verifyToken, getPostsList);

module.exports = router;