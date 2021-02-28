const express = require ('express');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require ('mongoose');
const path = require ('path');
const apiRouter = require ('./routes');

const PORT = process.env.PORT || 3001;

app.use(cookieParser());
app.use(express.json());
app.use(apiRouter);

// configuring AtlasDB connection for Heroku Deployment 
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/books",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false   
    },
    () =>{ console.log("Successfully connected to DataBase")}
);

  // preparing production environment for heroku deployment 
  if(process.env.NODE_ENV === 'production'){
    // this calls the build folder to our server 
    app.use(express.static('client/build'));
      // this will server the index.html from the front end 
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});