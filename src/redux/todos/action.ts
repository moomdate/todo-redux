
export const addTodo = (data: string) => {
    return {
        type: 'ADD_TODO',
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}
export const deleteTodo = (id: string) => {
    return {
        type: 'DELETE_TODO',
        payload: {
            id: id
        }
    }
}
export const edit = (id: string, data: string) => {
    return {
        type: 'EDIT_TODO',
        payload: {
            id: id,
            data: data
        }
    }
}
