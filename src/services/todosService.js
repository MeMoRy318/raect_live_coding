import {instanceAxios} from "./axiosService";

const todosEndpoint = {
    todos: "/todos",
    todosId : (id) => `/todos/${id}`
}
export const todosService = {
    getAllTodos : () => instanceAxios.get(todosEndpoint.todos),
    getTodosId : (id) => instanceAxios.get(todosEndpoint.todosId(id))
}
