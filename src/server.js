import express from 'express';
import configViewEngine from './config/viewEngine';
import initWebRoutes from './routes/web';
require('dotenv').config();
import bodyParser from 'body-parser';
// import connection from './config/conectDB';

const app = express();
const PORT = process.env.PORT || 8080;

configViewEngine(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// connection();

initWebRoutes(app);

app.listen(PORT, () => {
    console.log('is running on the port ' + PORT);
});
