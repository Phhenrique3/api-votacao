const app = require('./src/app.js');
const cors = require('cors');
const express = require('express');

const PORT = process.env.PORT || 3000;




app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});