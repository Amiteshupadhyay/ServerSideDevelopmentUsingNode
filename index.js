const express = require('express');
const http = require('http');
const morgan = require('morgan');
const port = 3000;
const hostname = 'localhost';
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());
const dishRouter = require('./routes/dishesRoutes');
const leaderRouter = require('./routes/leaderRoute');
const promnoRouter = require('./routes/PromoRouter');


app.use('/dishes', dishRouter);
app.use('/dishes/:dishId', dishRouter);
app.use('/leader', leaderRouter);
app.use('/leader/:leaderId', leaderRouter);
app.use('/promo', promnoRouter);
app.use('/promo/:promoId', promnoRouter);

app.listen(port, hostname, () => {
  console.log(`Server listening to port number  ${port}`);
});
