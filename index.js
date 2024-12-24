const express = require('express');
const bodyParser =require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

let todos = [];

app.get('/',(req,res)=> {
    res.render('index',{todos});
});

app.post('/add',(req, res) => {
    const newTodo = req.body.todo;
    if (newTodo) todos.push(newTodo);
    res.redirect('/');
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
