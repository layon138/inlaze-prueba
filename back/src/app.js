const express = require('express');
const cors=require('cors');
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use(require('./routes/index'));

app.listen(3000);
console.log('Server on port', 3000);