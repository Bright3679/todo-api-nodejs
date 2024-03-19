const express = require('express')
const router = express.Router()
const Todo = require('../model/todo')

router.post('/tasks', async(req,res)=>{
    const todo =new Todo({
        task : req.body.task,
        description : req.body.description

    })
    try { 
        const newTodo = await todo.save();
        res.status(201).json(newTodo)
    }catch(error) {
        res.status (400).json( {message : error.message})
    }
})
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
module.exports = router