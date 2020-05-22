const express = require('express');
const app = express();
const helmet = require('helmet');
const homeRouter = require('./routes/homeRouter');
const userRouter = require('./routes/userRouter');
const aboutRouter = require ('./routes/aboutRouter');

app.use(helmet())

app.use('/', homeRouter);
app.use('/user', userRouter);
app.use('/about', aboutRouter);

app.listen(3000, () => {
    try {
        console.log('Levantando por 3000')
    } catch (error) {
        console.log('Error: ' + error)
    }
})