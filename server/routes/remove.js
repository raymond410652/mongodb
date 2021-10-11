module.exports = function(db,app,ObjectId){
    app.post('/api/deleteitem',function(req,res){
        if(!req.body){
            return res.sendStatus(400);
        }

        productID = req.body.productid;
        console.log(req.body)

        var objectid = new ObjectId(productID)
        const collection = db.collection('products');

        collection.deleteOne({id:productID}, (err,docs)=>{
            collection.find({}).toArray((err,data)=>{
            
                res.send(data);

            });
            
        });
    })
}