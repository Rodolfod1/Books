const express = require ('express');

// const cookieParser = require('cookie-parser');
const mongoose = require ('mongoose');
const path = require ('path');
const apiRouter = require ('./routes');
const app = express();

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


  // preparing production environment for heroku deployment 
  if(process.env.NODE_ENV === 'production'){
    // this calls the build folder to our server 
    app.use(express.static('client/build'));
      // this will server the index.html from the front end 
    // app.get('*',(req,res)=>{
    //     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  
    // })
}



// app.use(cookieParser());

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


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});