const express = require('express');
const path = require('path');

const app = express();

app.set('views', path.join(_dirname, 'views'));
app.set('views engine', 'pug');

app.get('/', function(req, res){
    let form = [
        {
            id:1,
            title:'form 1',
            author:'Tarbie',
            body:'This is form one'
        }
    ]
    res.render('index', {
        title: 'Form',
        form: form
    });
});

app.get('/Form/add', function(req, res){
    res.render('add_article', {
        title: 'Add Form'
    });
})

app.listen(3000, function(){
    console.log('server started on port 3000...');
});
 