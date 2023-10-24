import {Input} from "antd";
import styled from "styled-components";
import {useState} from "react";
import {useDispatch} from 'react-redux';
import {addTodo} from "../redux/todos/action";
import {TodoListComponent} from "./TodoListComponent";

const {Search} = Input;

const Container = styled.div`
  margin-top: 15px;
  width: 50vw;
  margin-left: auto;
  margin-right: auto;
`

export const Todo = () => {
    const [inputData, setInputData] = useState<string>('');
    const dispatch = useDispatch();

    const onAddTodo = () => {
        if (!inputData) {
            return
        }
        dispatch(addTodo(inputData))
        setInputData('')
    };

    return <>
        <div className="App">
            <Container>
                <div>
                    <h1>Hello antd Framework</h1>
                </div>
                <TodoListComponent/>
                <Search placeholder="type your todo ..."
                        enterButton="Add TODO"
                        onSearch={onAddTodo}
                        value={inputData}
                        onChange={(e) => {
                            setInputData(e.target.value)
                        }}
                        size="large"/>
            </Container>

        </div>
    </>
}
