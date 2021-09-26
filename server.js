const express = require('express');
// method override
const methodOverride = require('method-override');

const app = express();
const port = 3000; 

// ============== DATABASES ===============
// original pokemon array
const pokemons = require('./models/pokemon');

// 5 pokemon array
// const pokemons = require('./models/poke');

//middlewares (app.use)
// ========== express static ============
app.use(express.static('public'));

app.use((req, res, next) =>{
    console.log('pikachu i choose you!');
    next();
});

app.use(express.urlencoded({extended:false}));
// ========= METHOD OVERRIDE ===========
app.use(methodOverride('_method'));

// ============== ROUTES ===============
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
    req.body.type = req.body.type.split(' ');
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
app.put('/pokedex/:index', (req, res) =>{
    pokemons[req.params.index] = req.body;
    req.body.type = req.body.type.split(',');
    req.body.stats = {
        hp: req.body.stats[0],
        attack: req.body.stats[1],
        defense: req.body.stats[2],
        spattack: req.body.stats[3],
        spdefense: req.body.stats[4],
        speed: req.body.stats[5]
    }
    console.log(req.body)
    res.redirect('/pokedex');
});


// Delete
app.delete('/pokedex/:index', (req, res) =>{
    pokemons.splice(req.params.index, 1);
    res.redirect('/pokedex');
});

// server listen
app.listen(port, () =>{
    console.log(`listening on ${port}`);
});