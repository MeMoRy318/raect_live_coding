import React from 'react';
import {Todos} from "../../component/Todos/Todos";
import {useFetching} from "../../myCustomHook/useFeching";
import {todosService} from "../../services/todosService";

const TodosPage = () => {

    const {response,isLoading,error} = useFetching(todosService.getAllTodos())

    return (
        <div>
            {!!response?.length && [...response].map(value => <Todos todos={value} key={value.id}/>)}
        </div>
    );
};

export {TodosPage};
