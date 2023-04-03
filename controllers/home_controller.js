const Task = require('../models/task');


module.exports.home = async function(req, res){
    const tasks = await Task.find();
    return res.render('home',{
        title: 'Todo-List',
        task_list : tasks
    })
}

module.exports.create = function(req, res){
    console.log(req.body);
    Task.create({
        desc: req.body.taskDesc,
        label: req.body.category,
        dueDate: req.body.date
    })
    return res.redirect('back');
}

module.exports.delete = async function(req, res){
    let checkedItemId = req.body.checkbox;
    console.log(checkedItemId.length);
    if (checkedItemId.length>0 && checkedItemId.length !=24 ){
        for(let i of checkedItemId){
            await Task.findByIdAndDelete(i);
        }
    }
    else{
        await Task.findByIdAndDelete(checkedItemId);
    }
    return res.redirect('back');
    
}