require('dotenv').config();

const express = require('express');
const hbs = require('hbs');
const app = express();
const PORT = process.env.PORT;


//TODO: requerimos handleblars
app.set('view engine','hbs');
hbs.registerPartials(__dirname+'/views/partials');

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('home',{ nombre:'David Betanzos', titulo:'Curso de Node' });
});

app.get('/generic',(req,res)=>{
    res.render('generic',{ nombre:'David Betanzos', titulo:'Curso de Node' });
});

app.get('/elements',(req,res)=>{
    res.render('elements',{ nombre:'David Betanzos', titulo:'Curso de Node' });
});

app.get('*',(req,res)=>{
    res.render('404');
});
app.listen(PORT,()=>{
    console.log(`El servidor se encuentra corriendo en el puerto ${ PORT }`);
});