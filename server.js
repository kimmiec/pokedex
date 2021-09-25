const express = require('express');
// method override

const app = express();
const port = 3000; 

// const pokemons = require('.models/pokemon');

// 5 pokemon array
const pokemons = require('./models/poke');

//middlewares (app.use)


// Routes:
// Index
app.get('/pokedex', (req, res) =>{
    res.render('index.ejs', {pokeData: pokemons});
});

// New


// Show
app.get('/pokedex/:index', (req, res) =>{
    res.render('show.ejs', {
        pokeAll: pokemons[req.params.index]
    });
});

// Create


// Edit


// Update


// Delete

app.listen(port, () =>{
    console.log(`listening on ${port}`);
});