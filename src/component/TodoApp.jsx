import React, { use, useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
const TodoApp = () => {
  // const todo = useState((state) => state.todos);
  const [inputValue, setInputValue] = useState("");
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const { todos, addTodos } = useContext(TodoContext);
  const handleAdd = () => {
    addTodos(text, description);
    setText("");
    setDescription("");
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
    <section>
      <div className="container mx-auto p-10">
        <div className=" flex flex-col items-center justify-center  ">
          <div className="w-[600px] border border-border rounded-2xl p-5 py-10">
            <h1 className="text-5xl text-black font-bold text-center">
              Todo App
            </h1>
            <p className="text-lg text-gray-600 text-center mt-4">
              Welcome to your Todo App!
            </p>
            <span className="text-lg text-gray-600">
              todo count : {todos.length}
            </span>

            <h1 className="text-2xl font-bold mt-10 pb-5 uppercase border-b">
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
                <h1 className="pb-4 text-3xl text-black font-bold uppercase">to list :</h1>
              <ul className="flex flex-col gap-4">
                {todos.map((item) => (
                  <li
                    key={item.id}
                    className="border border-border rounded-xl p-4 mb-4"
                  >
                    <h2 className="text-2xl font-bold">{item.text}</h2>
                    <p className="text-gray-600">{item.description}</p>
                    <div className="flex items-center justify-between gap-4 mt-4">
                      <button className="bg-blue-500 text-white py-2 px-4 rounded-xl">
                        Edit
                      </button>
                      <button className="bg-red-500 text-white py-2 px-4 rounded-xl">
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
