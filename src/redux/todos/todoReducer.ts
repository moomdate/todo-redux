import {RootState} from "../store";

export interface IActionModel<T> {
    type: string;
    payload: T
}

export interface IItemModel {
    id: string;
    data: string;
}

export interface IItemIdModel {
    id: string;
}

export interface IIemStateModel {
    list: IItemModel[]
}


const initData: IIemStateModel = {
    list: []
}

const todoReducer = (state = initData, action: IActionModel<IItemModel | IItemIdModel>) => {
    switch (action.type) {
        case 'ADD_TODO': {
            const {id, data} = action.payload as IItemModel
            return {
                list: [...state.list, {id, data}]
            }
        }
        case 'DELETE_TODO': {
            const {id} = action.payload as IItemIdModel;
            return {
                list: state.list.filter(i => i.id !== id)
            }
        }
        case 'EDIT_TODO': {
            const {id, data} = action.payload as IItemModel
            state.list = state.list.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        item: data,
                    };
                }
                return todo;
            });
            return state;
        }
        default:
            return state;
    }
}
export const todoListSelect = (state: RootState) => state.todoReducer.list
export default todoReducer;
