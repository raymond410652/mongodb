

module.exports = function(db,app) {
    console.log("hello")
    app.get('/api/getlist',function(req,res){
        const collection =db.collection('products');
        collection.find({}).toArray((err,data)=>{
            res.send(data);
        })
    })
}

