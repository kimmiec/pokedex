const express = require('express');
// method override

const app = express();
const port = 3000; 

// const pokemons = require('.models/pokemon');

// 5 pokemon array
const pokemons = require('./models/poke');

//middlewares (app.use)
app.use((req, res, next) =>{
    console.log('pikachu i choose you!');
    next();
});

app.use(express.urlencoded({extended:false}));



// Routes:
// Index
app.get('/pokedex', (req, res) =>{
    res.render('index.ejs', {pokeData: pokemons});
});

// New
app.get('/pokedex/new', (req, res) =>{
    res.render('new.ejs');
});

// Show
app.get('/pokedex/:index', (req, res) =>{
    res.render('show.ejs', {
        pokeAll: pokemons[req.params.index]
    });
});

// Create
app.post('/pokedex', (req, res) =>{
    pokemons.push(req.body);
    res.redirect('/pokedex');
})


// Edit
app.get('/pokedex/:index/edit', (req, res) =>{
    res.render('edit.ejs', {
        poke: pokemons[req.params.index],
        index: req.params.index
    })
})

// Update


// Delete

app.listen(port, () =>{
    console.log(`listening on ${port}`);
});