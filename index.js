const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const cors = require('cors');
const PORT = 3000;

app.use (cookieParser());
app.use(cors());

const user = require('./routes/user');
const auth = require('./routes/auth');
const project = require('./routes/project');
const search = require('./routes/search')
const userData = require('./routes/userData');

app.use('/user', user);
app.use ('/auth', auth);
app.use('/project', project);
app.use('/search', search);
app.use('/userData', userData);

app.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`)
);