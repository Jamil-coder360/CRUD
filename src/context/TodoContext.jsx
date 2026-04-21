import { createContext, useState } from "react";
import { toast } from "react-toastify";
const TodoContext = createContext({
    todos : [],
    setTodos : () => {},
    addTodos : () => {},
    deleteTodos : () => {},
    updateTodos : () => {},
});
const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const addTodos = (text, description) => {
        console.log("add");
        // const newTodo = {
        //     id: Date.now(),
        //     text: text,
        //     description: "",
        //     // completed: false
        // };
        setTodos([...todos, {id: Date.now(), text: text, description: description}]);      
        console.log(todos);
    };
    const deleteTodos = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
        toast.success("Todo deleted successfully!");
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