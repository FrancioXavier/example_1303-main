const express = require('express');
const app = express();
const path = require('path')
const resolve = path.resolve;
const validatePet = require('./middleware/validatePet')
const {pets} = require('./pets')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('assets'));  
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/assets/index.html');
})
app.get('/pets', (req, res) => {
    res.send(pets).status(200)
}) 
app.post('/pets', validatePet,(req, res) => {
    pets.push({
        id: pets.length + 1,
        name: req.body.name,
        species: req.body.species,
        age: req.body.age,
        breed: req.body.breed,
        color: req.body.color,
        ownerName: req.body.ownerName,
        contact: req.body.contact,
        photo: req.body.photo
    })
    // console.log(pets)
    // res.redirect('/')
}) 

app.listen(3000, () => {
    console.log(`Listening on port: 3000`);
})