module.exports = function(db,app,ObjectId){
    var result;
    app.post('/api/update',function(req,res){
        if(!req.body){
            return res.sendStatus(400)

        }
        product =req.body;
        
        //var objectid = new ObjectId(product.objid);
        const collection = db.collection('products');
        collection.updateOne({'id':product.id},{$set:{name:product.name,description:product.description,price:product.price,units:product.units}},()=>{
            res.send({'ok':product.id})
        })
    })
}