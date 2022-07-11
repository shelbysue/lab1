//import
import express, { request, response } from 'express';

import cors from 'cors';

// import { items } from './routes/cart.items';


//express server
const app = express();

//cross origion
app.use(cors());

//post and patch
app.use(express.json());

app.get('/', (req, res) => {
    response.json('hi');
});

const port = 3000;
app.listen(port, () => console.log(`listening on: http://localhost: ${port}.`));