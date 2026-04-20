import React, { use, useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
const TodoApp = () => {
  // const todo = useState((state) => state.todos);
  const [inputValue, setInputValue] = useState("");
  const [edit, isEdit] = useState(false);
  const [text, setText] = useState("");
  //   const [editId, setEditId] = useState(null);
  const [description, setDescription] = useState("");
  const [updateText, setUpdateText] = useState("");
  const [updateDescription, setUpdateDescription] = useState("");
  const { todos, addTodos, deleteTodos, updateTodos } = useContext(TodoContext);
  const handleAdd = () => {
      if (todos.length >= 10) {
          alert("Maximum 10 todos allowed!");
          return;
        }
        addTodos(text, description);
        setText("");
        setDescription("");
  };
  const handleEdit = (id) => {
    isEdit(id);
    // setEditId(id);
    setUpdateDescription(todos.find((todo) => todo.id === id).description);
    setUpdateText(todos.find((todo) => todo.id === id).text);
    // setUpdateText(id.text)
    // setUpdateDescription(id.description)
  };
  const handleSave = (id) => {
    {
      //null always return false so it will exit from the edit mode
    }
    // setEditId(null);
    isEdit(false);
    setUpdateText(text);
    setUpdateDescription(description);
    updateTodos(id, { id, text: updateText, description: updateDescription });
  };
  //   const todo = [
  //     {
  //       id: 1,
  //       text: "Learn React",
  //       description: "Learn React by building a Todo App",
  //       completed: false,
  //     },
  //     {
  //       id: 2,
  //       text: "Learn JavaScript",
  //       description: "Learn JavaScript by building a Todo App",
  //       completed: false,
  //     },
  //     {
  //       id: 3,
  //       text: "Learn CSS",
  //       description: "Learn CSS by building a Todo App",
  //       completed: false,
  //     },
  //   ];

  return (
    <section className=" bg-black/20 backdrop-blur-2xl py-20">
      <div className="container mx-auto p-10">
        <div className=" flex flex-col items-center justify-center ">
          <div className="w-150 border border-border rounded-2xl p-5 py-10 shadow-xl shadow-fuchsia-200 bg-white ">
            <h1 className="text-5xl text-black font-bold text-center">
              Todo App
            </h1>
            <p className="text-lg text-gray-600 text-center py-4">
              Welcome to your Todo App!
            </p>
            <span className="text-lg text-gray-600">
              todo count :  <span className="font-bold text-blue-400">{todos.length}</span>
            </span>

            <h1 className="text-2xl font-bold py-5 uppercase border-b">
              add todos :
            </h1>
            <div className="flex items-center justify-center gap-4 pb-10 border-b border-border mt-10   ">
              <div className="w-full flex flex-col gap-4">
                <input
                  onChange={(e) => setText(e.target.value)}
                  type="text"
                  value={text}
                  placeholder="Add a new title..."
                  className="w-100 p-3 bg-gray-200 text-black rounded-xl outline-0"
                />
                <input
                  onChange={(e) => setDescription(e.target.value)}
                  type="text"
                  value={description}
                  placeholder="Add a description..."
                  className="w-100 p-3 bg-gray-200 text-black rounded-xl outline-0"
                />
              </div>
              <button
                onClick={handleAdd}
                className="w-full text-center bg-black text-white py-3 px-5 rounded-2xl"
              >
                Add Todo
              </button>
            </div>

            <div className="mt-10">
              <h1 className="pb-4 text-3xl text-black font-bold uppercase">
                to list :
              </h1>
              <ul className="flex flex-col gap-4">
                {todos.map((item) => (
                  <li
                    key={item.id}
                    className="border border-border rounded-xl p-4 mb-4"
                  >
                    {/* if i use only (edit ?) it can select all items that's why I use here (edit === item.id) it find the selected item from the list/array */}

                    {edit === item.id ? (
                      <input
                        onChange={(e) => setUpdateText(e.target.value)}
                        type="text"
                        value={updateText}
                        placeholder="Edit title..."
                        className="w-100 p-3 bg-gray-200 text-black rounded-xl outline-0"
                      />
                    ) : (
                      <h2 className="text-2xl font-bold">{item.text}</h2>
                    )}
                    {edit === item.id ? (
                      <input
                        onChange={(e) => setUpdateDescription(e.target.value)}
                        type="text"
                        value={updateDescription}
                        placeholder="Edit description..."
                        className="mt-4 w-100 p-3 bg-gray-200 text-black rounded-xl outline-0"
                      />
                    ) : (
                      <p className="text-gray-600">{item.description}</p>
                    )}
                    <div className="flex items-center justify-between gap-4 mt-4">
                      {edit === item.id ? (
                        <button
                          onClick={() => handleSave(item.id)}
                          className="bg-green-500 text-white py-2 px-4 rounded-xl"
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          onClick={() => handleEdit(item.id)}
                          className="bg-blue-500 text-white py-2 px-4 rounded-xl"
                        >
                          Edit
                        </button>
                      )}

                      <button
                        onClick={() => deleteTodos(item.id)}
                        className="bg-red-500 text-white py-2 px-4 rounded-xl"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodoApp;
