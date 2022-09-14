import express from 'express';

const app = express();
const port = 3000;

app.use((req, res, next) => {
    console.log(req.path)
    next();
})

app.get('/users', (req, res) => {
    res.json([
        {
            id: 1,
            name: 'John Doe'
            // name: 'John Doe Christian'
        }, {
            id: 2,
            name: 'Jane Doe'
        }]
    );
});


app.get('/', (req, res) => {
    res.send('Hello world')
});


app.listen(port, () => {
    console.log(`Express app listening on port ${port}.`);
});