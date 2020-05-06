const express = require('express');
const app = express();
const helmet = require('helmet');
const homeRouter = require('./routers/homeRouter');
const aboutRouter = require('./routers/userRouter');

app.use(helmet);

app.use('/', homeRouter);
app.use('/user', userRouter);


app.listen(3000, () => {
    try {
        console.log('corriendo server en port 3000')
    } catch (error) {
        console.log('Error: ' + error)
    }
})
