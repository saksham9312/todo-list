const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    desc: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    }
});

const Task = mongoose.model('Task',taskSchema);
module.exports = Task;