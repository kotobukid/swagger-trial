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

const users = [
    {
        id: 1,
        // name: 'John Doe'
        name: 'John Doe Christian'
    }, {
        id: 2,
        name: 'Jane Doe'
    }
];

app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', (req, res) => {  // create
    let nextId = 0;
    users.forEach(u => {
        nextId = Math.max(nextId, u.id)
    });
    const user = {
        name: 'new user',
        ...req.body,
        id: nextId + 1
    };
    users.push(user);

    res.status(201).send('CREATED');
});

app.get('/user/:userId', (req, res) => {
    const user = users.find(u => `${u.id}` === req.params.userId);
    res.json(user)
})

app.get('/', (req, res) => {
    res.send('Hello world')
});


app.listen(port, () => {
    console.log(`Express app listening on port ${port}.`);
});