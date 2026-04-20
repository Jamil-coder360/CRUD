import React, { use, useState } from "react";
const TodoApp = () => {
  // const todo = useState((state) => state.todos);
  const todo = [
    {
      id: 1,
      title: "Learn React",
      description: "Learn React by building a Todo App",
      completed: false,
    },
    {
      id: 2,
      title: "Learn JavaScript",
      description: "Learn JavaScript by building a Todo App",
      completed: false,
    },
    {
      id: 3,
      title: "Learn CSS",
      description: "Learn CSS by building a Todo App",
      completed: false,
    },
  ];

  return (
    <section>
      <div className="container mx-auto p-10">
        <div className=" flex flex-col items-center justify-center ">
          <div className="w-[600px] border border-border rounded-2xl p-5">
            <h1 className="text-5xl text-black font-bold text-center">
              Todo App
            </h1>
            <p className="text-lg text-gray-600 text-center mt-4">
              Welcome to your Todo App!
            </p>
            <span className="text-lg text-gray-600">
              todo count : {todo.length}
            </span>

            <div className="flex gap-4 pb-10">
              <input
                type="text"
                placeholder="Add a new todo..."
                className="w-100 p-3 bg-gray-400 text-black rounded-xl outline-0"
              />
              <button className="text-center bg-black text-white py-3 px-5 rounded-2xl">
                Add Todo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodoApp;
