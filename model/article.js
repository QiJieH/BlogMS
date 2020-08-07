const mongooes = require('mongoose');


const articleSchema = new mongooes.Schema({
    title : {
        type : String,
        minlength : 4,
        maxlength : 42,
        required  : [
            true,
            '文章标题不能为空'
        ]
    },
    author : {
        type : mongooes.Schema.Types.ObjectId,
        ref  : 'User',
        required : [
            true,
            '作者不能为空'
        ]
    },
    publishDate : {
        type : Date,
        default : Date.now
    },
    cover : {
        type : String,
        default : null
    },
    content : {
        type : String
    }
});

const Article = mongooes.model('Article', articleSchema);

module.exports = {
    Article : Article,
}