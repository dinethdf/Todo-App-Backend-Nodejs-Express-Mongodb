const ToDoModel = require("../models/TodoModel");

module.exports.getToDo = async (req, res) => {
  const todo = await ToDoModel.find();
  res.send(todo);
};

module.exports.saveToDo = (req, res) => {
  const { Todo } = req.body;

  ToDoModel.create({ text })
    .then((data) => {
      res.send(data);
      console.log("Added Successfully...");
      console.log(data);
    })
    .catch((err) => console.log(err));
};

module.exports.updateToDo = (req, res) => {
  const { _id, Todo } = req.body;

  ToDoModel.findByIdAndUpdate(_id, { text })
    .then(() => res.set(201).send("Updated Successfully..."))
    .catch((err) => console.log(err));
};

module.exports.deleteToDo = (req, res) => {
  const { _id } = req.body;

  console.log("id ---> ", _id);

  ToDoModel.findByIdAndDelete(_id)
    .then(() => res.set(201).send("Deleted Successfully..."))
    .catch((err) => console.log(err));
};
