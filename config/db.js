if(process.env.NODE_ENV  == "production"){
    module.exports = {mongoURI: "mongodb+srv://blog_base:pot3nci4@cluster0.dn5mk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"}
}else{
    module.exports = {mongoURI: "mongodb://localhost/blogapp"}
}