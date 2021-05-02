const {Router} = require('express');
const router = Router();
const path = require('path');
const {RenderBlogForm,
       NewBlog,
       RenderBlogs,
       RenderReadBlog,
       RenderEditBlog,
       UpdateBlog,
       DeleteBlog} = require('../controllers/blog.controller');
const multer = require('multer');

//crear un blog con formulario
router.get('/blog/add',RenderBlogForm);

//manejar la info del formulario/MULTER
router.post('/blog/add',NewBlog);

//consultar los blogs
router.get('/blogs',RenderBlogs);

//consultar leer un solo blog
router.get('/blog/read/:id',RenderReadBlog);

//editar blog
router.get('/blog/edit/:id',RenderEditBlog);
router.post('/blog/edit/:id',UpdateBlog);

//eliminar un blog
router.delete('/blog/delete/:id',DeleteBlog);

module.exports = router;