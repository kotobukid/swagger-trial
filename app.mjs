import express from 'express';
import {allowCrossDomain} from "./middlewares/custom-header.mjs";
import {log_path} from "./middlewares/log-path.mjs";
import bodyParser from 'body-parser'

const app = express();
const port = 3000;

app.use(allowCrossDomain)
app.use(log_path)
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.get('/users', (req, res) => {
    res.json([
        {
            id: 1,
            // name: 'John Doe'
            name: 'John Doe Christian'
        }, {
            id: 2,
            name: 'Jane Doe'
        }]
    );
});

app.post('/users', (req, res) => {
    console.log(req.body)
    res.status(201).send('CREATED');
});

app.get('/', (req, res) => {
    res.send('Hello world')
});


app.listen(port, () => {
    console.log(`Express app listening on port ${port}.`);
});