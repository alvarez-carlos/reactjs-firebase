import axios from "axios";

export const fetchAllTodosReq = async () =>
  await axios.get("https://todos-c7234-default-rtdb.firebaseio.com/todos.json");

export const createTodoReq = async (todo) =>
  await axios.post("https://todos-c7234-default-rtdb.firebaseio.com/todos.json", todo);
  
export const fetchTodoByIdReq = async (id) =>
    await axios.get(`https://todos-c7234-default-rtdb.firebaseio.com/todos/${id}.json/`);

export const updateTodoReq = async (_id, newTodo) =>
  await axios.put(`https://todos-c7234-default-rtdb.firebaseio.com/todos/${_id}.json`, newTodo);

export const deleteTodoReq = async (id) =>
  await axios.delete(`https://todos-c7234-default-rtdb.firebaseio.com/todos/${id}.json`);

// export const toggleTaskDoneReq = async (id, done) =>
//   await axios.put(`https://todos-c7234-default-rtdb.firebaseio.com/todos/${id}.json`, {
//     done,
//   });