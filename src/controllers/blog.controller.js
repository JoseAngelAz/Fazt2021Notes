const blogCtrl = {};
const Blog = require('../models/Blog.model');

//formulario de creacion de blog render Form
blogCtrl.RenderBlogForm = (req,res)=>{
    res.render('blogs/new-blog-form');
}
//guardar blog en la db
blogCtrl.NewBlog = async (req,res)=>{
    console.log(req.file)
    const {title_blog, content_blog, img_blog} = req.body;
    const newBlog = new Blog({title_blog, content_blog,img_blog});
    await newBlog.save();
    res.redirect('/blogs');
}
//consultar los blogs
blogCtrl.RenderBlogs = async (req,res)=>{
    const blogs = await Blog.find().lean();
    res.render('blogs/all-blogs',{blogs});
}
//consultar un solo blog
blogCtrl.RenderReadBlog = (req,res)=>{
    res.send(`<h2 class='text-warning'>Este es un solo Blog para ser leido</h2>`)
}
//consultar un solo blog en formulario
blogCtrl.RenderEditBlog = (req,res)=>{
    res.send(`<h2 class='text-warning'>Este es un solo Blog para ser modificado en formulario</h2>`)
}
//consultar un solo blog en formulario
blogCtrl.UpdateBlog = (req,res)=>{
    res.send(`<h2 class='text-warning'>Este es un solo Blog para ser Actualizado despues del form</h2>`)
}
//Eliminar blog
blogCtrl.DeleteBlog = (req,res)=>{
    res.send(`<h2 class='text-warning'>BLog eliminado</h2>`)
}
module.exports = blogCtrl;