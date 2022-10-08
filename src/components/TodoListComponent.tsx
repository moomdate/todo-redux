import {Button, Divider, List} from "antd";
import {IItemModel, todoListSelect} from "../redux/todos/todoReducer";
import {deleteTodo} from "../redux/todos/action";
import {DeleteOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";

export const TodoListComponent = () => {
    const list = useSelector(todoListSelect);
    const dispatch = useDispatch();
    return <>
        <Divider orientation="left">Simple Redux</Divider>
        <List
            header={<div>TODO List</div>}
            bordered
            dataSource={list}
            renderItem={(item: IItemModel) => {
                return (
                    <List.Item actions={[<Button onClick={() => dispatch(deleteTodo(item.id))}>
                        <DeleteOutlined/>
                    </Button>]}>
                        <span>{item.data}</span>
                    </List.Item>
                )
            }}
        />
    </>
}
