require('dotenv').config()
const express = require('express');              // Install as a dependency inside nodemon
const mongoose = require('mongoose');
const method = require('method-override')
const Service = require('./models/Service');
const app = express()                            // Call on express application
const PORT = 3000                               // Port 3000


//  ===== Connection to Database =====
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.once("open", () => console.log('Connected to Mongo'))

// Setup Engine View Engine for server to render jsx file (views)
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// ===== Middleware ===== 
app.use(method('_method'))
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'))
// Use Express middleware to parse JSON.
app.use(express.json())


// ===== Routes =====

// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

//Index
app.get('/services', (req, res) => {

    Service.find({}, (err, allServices) => {
        res.render('Index', {services: allServices })
    })
})

// New
app.get('/services/new', (req, res) => {
    res.render('New');
});

app.delete('/services/:id', (req, res) => {
    Service.findByIdAndDelete(req.params.id, (err) => {
    
        if (!err) {
            res.status(200).redirect('/services')
        } else {
        res.status(400).json(err)
        }
    })  
})

// Update
app.put('/services/:id', (req, res) => {
    req.body.workarea = req.body.workarea === 'on' ? true : false;
    // Update funciton has 4 arguments
    /*
        1. the id 
        2. the content of what we want to update 
        3. options object {new:true}
        4. callback
    */
    Service.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedService) => {
        if (!err) {
            res.status(200).redirect('/services')
        } else {
            res.status(400).json(err)
        }
    })
})

// Create
app.post('/services', (req, res) => {
    req.body.workarea = req.body.workarea === 'on' ? true : false;

    // Create 1st arg: the actual object we wand to insert in our database
    // Callback 1st arg: error
    // Callback 2dn arg: the newly created object
    Service.create(req.body, (err, createdService) => {
        //res.send(createdService)
        res.redirect('/services')
    })
})

//Show
app.get('/services/:id', (req, res) => {
    Service.findById(req.params.id, (err, foundService) => {
        res.render('Show', { service: foundService })
    })
})
app.listen(PORT, () => console.log(`Listening to port ${PORT}`))