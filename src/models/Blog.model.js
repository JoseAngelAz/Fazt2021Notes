const {Schema,model} = require('mongoose');
const BlogSchema = new Schema({
    title_blog:{
        type:String,
        required:true
    },
    img_blog:{
        type:String,
        required:false
    },
    imgUrl:{
        
    },
    content_blog:{
        type:String,
        required: true
    }
},{
    timestamps: true
})

module.exports = model('Blog',BlogSchema);
