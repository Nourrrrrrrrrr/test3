const express = require('express');

// create express app
const app = express();

// setup the server port
const port = process.env.PORT || 5000;


// define root route
app.get('/', (req, res)=>{
    res.send('Hello World');
});
// import candidat routes
const candidatRoutes = require('./src/routes/candidat.route');

// create employee routes
app.use('/api/v1/candidat', candidatRoutes);

// listen to the port
app.listen(port, ()=>{
    console.log(`Express is running at port ${port}`);
});