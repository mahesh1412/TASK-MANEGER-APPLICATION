const express= require('express');

const router= express.Router();

const {
getallTasks,
createTask,
getTask,
updateTask,
deleteTask

}= require('../controllers/tasks')

router.route('/').get(getallTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports= router
