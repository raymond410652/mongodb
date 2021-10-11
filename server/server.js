const express =require('express');
const app = express();
const http = require('http').Server(app);
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
const { ObjectID } = require('mongodb');

app.use(cors());
app.use(express.json());
const url = 'mongodb://localhost:27017';
const PORT=3000;


MongoClient.connect(url,{useNewUrlParser: true, useUnifiedTopology: true},function(err, client){
    if (err) {return console.log(err)}
        const dbName = 'mydb';
        const db = client.db(dbName);
        require('./routes/add.js')(db,app)
        require('./routes/remove.js')(db,app,ObjectId);
        require('./routes/update.js')(db,app,ObjectId);
        require('./routes/read.js')(db,app);
        require('./routes/validid.js')(db,app);
        require('./routes/prodcount.js')(db,app);
        require('./routes/getitem.js')(db,app,ObjectId);


    app.listen(3000, ()=>{
        console.log("Server is listening on port,3000")
        
    })


    
;})
