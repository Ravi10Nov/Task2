const express = require('express');

const cors = require('cors');

const bodyParser = require('body-parser');

const app = express();

const corsOptions = {
    origin:'http://localhost:3000',
    credential:true,
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));

const notes = require('./router/notes');
const messages = require('./router/getMessage');
const deleteNotes = require('./router/deleteNotes');

app.use('/',notes);
app.use('/',messages);
app.use(('/',deleteNotes));

app.listen(4500,()=>{
    console.log('Server is running at port 4500')
})