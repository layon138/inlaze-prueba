const { Router } = require('express');
const router = Router();

const { createUser,authUser } = require('../controllers/auth.controller');
const { createPost,getPostsList,updatePost ,deletePost} = require('../controllers/posts.controller');
const verifyToken = require('./validation-token');

router.post('/user/add', createUser);
router.post('/auth', authUser);
router.post('/posts/create',verifyToken, createPost);
router.post('/posts/update',verifyToken, updatePost);
router.get('/posts/list',verifyToken, getPostsList);
router.post('/posts/delete',verifyToken, deletePost);


module.exports = router;