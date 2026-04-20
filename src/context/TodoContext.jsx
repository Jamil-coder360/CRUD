import { createContext, useState } from "react";
const TodoContext = createContext({
    todos : [],
    setTodos : () => {},
    addTodos : () => {},
    deleteTodos : () => {},
    updateTodos : () => {},
});
const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const addTodos = (todo) => {
        setTodos([...todos, todo]);
    };
    const deleteTodos = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    const updateTodos = (id, updatedTodo) => {
        setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
        };
    return (    
        <TodoContext.Provider value={{ todos, setTodos, addTodos, deleteTodos, updateTodos }}>
            {children}
        </TodoContext.Provider>
    );
};

export  { TodoContext,  };
export default TodoProvider;