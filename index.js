import express from 'express';

const app = express();
const PORT = 3000;

//Middleware
app.use(express.json());

const toDo = [
    {
        id: 1,
        task: 'Learn Node.js',
        completed: false
    },
    {
        id: 2,
        task: 'Learn Javascript',
        completed: false
    },
    {
        id: 3,
        task: 'Learn CSS',
        completed: true
    },
    {
        id: 4,
        task: 'Learn React',
        completed: true
    },
    {
        id: 5,
        task: 'Learn HTML',
        completed: true
    },
    {
        id: 6,
        task: 'Learn Github',
        completed: true
    },
    {
        id: 7,
        task: 'Learn Agile',
        completed: true
    },
    {
        id: 8,
        task: 'Learn VsCode',
        completed: true
    },
    {
        id: 9,
        task: 'Learn PsudoCode',
        completed: true
    },
    {
        id: 10,
        task: 'Learn API',
        completed: false
    }
];

app.get('/', (req, res) => {
    res.send('Welcome to the To-Do API');
});

//GET request
app.get('/toDos/', (req, res) => {
    res.send(toDo);
});

//GET request to Random / TODOS
app.get('/toDos/random', (req, res) => {
    const randomToDoIndex = Math.floor(Math.random() * toDo.length);
    const randomToDo = toDo[randomToDoIndex];

    if (randomToDo) {
        res.send(randomToDo);
    } else {
        res.status(404).send('ToDo not found');
    }
});

//POST request to new / TODOS
app.post('/toDos/', (req, res) => {
    const newToDo = req.body;

    if (newToDo) {
        toDo.push(newToDo);
        res.status(201).json(newToDo);
    } else {
        res.status(400).send('ToDo could not be created');
    }
});

// PUT request to update toDos
app.put('/toDos/:id', (req, res) => {
    const id = req.params.id;
    const updatedToDo = req.body;

    if (toDo[id]) {
        toDo[id] = updatedToDo;
        res.json(updatedToDo);
    } else {
        res.status(400).send('ToDo not found');
    }
});

// DELETE request to delete toDos
app.delete('/toDos/:id', (req, res) => {
    const id = req.params.id;
    if (toDo[id]) {
        const deletedToDo = toDo.splice(id, 1);
        res.status(200).json(deletedToDo);
    } else {
        res.status(400).send('ToDo not found');
    }
});

// GET request to Specific /toDos/:id
app.get('/toDos/:id', (req, res) => {
    const id = req.params.id;
    const specificToDo = toDo[id];

    if (specificToDo) {
        res.send(specificToDo);
    } else {
        res.status(404).send('ToDo not found');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});

