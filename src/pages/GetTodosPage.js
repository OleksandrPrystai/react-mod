import {useEffect, useState} from "react";
import TodosComponent from "../components/TodosComponent";
import {getTodos} from "../services/Posts.api.services";

export default function GetTodosPage() {

    let [todos, setTodos] = useState([]);

    useEffect(() => {
       getTodos().then(({data}) => setTodos([...data]))
    }, [])


    return (
        <div>
            {
                todos.map(value => <TodosComponent
                key={value.id}
                item={value}
                />)
            }

        </div>
    )
}