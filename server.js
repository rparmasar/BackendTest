const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

// Bodyparser Middleware (Depreciated, express now has it included)
app.use(express.json());

// Bring in uri
const db = require('./config/keys').mongoURI;

// Connecting to MongoDB
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected!'))
    .catch((err) => console.log(err));

// use our routes
app.use('/api/items', items)

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});