import React, {Component} from "react";
import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";

class App extends Component {
    id = 3; // 아래 이미 0, 1, 2 존재하므로 3으로 설정

    state = {
        input: '',
        todos: [
            {id: 0, text: '오전 11시', checked: false},
            {id: 0, text: 'to do list', checked: true},
            {id: 0, text: 'make something', checked: false}
        ]
    }
    handleChange = (e) => {
        this.setState({
            input: e.target.value // input 의 다음 바뀔 값
        });
    }
    // 새로운 todolist 추가
    handleCreate = () => {
        const {input, todos} = this.state;
        this.setState({
            input: '', // input 비우고
            // concat 사용하여 배열에 추가
            todos: todos.concat({
                id: this.id++,
                text: input,
                checked: false
            })
        })
    }
    handleKeyPress = (e) => {
        // 눌려진 키가 Enter면 handleCreate 호출
        if (e.key === 'Enter') {
            this.handleCreate();
        }
    }
    // 체크 동작
    handleToggle = (id) => {
        const {todos} = this.state;
        // 파라미터로 받은 id를 가지고 몇번째 아이템인지 찾기
        const index = todos.findIndex(todo => todo.id === id);
        const selected = todos[index]; // 선택한 객체
        const nextTodos = [...todos]; // 배열 복사

        // 기존 값들 복사, checked 값 덮어쓰기
        nextTodos[index] = {
            ...selected,
            checked: !selected.checked
        };
        this.setState({
            todos: nextTodos
        });
    }
    // todolist 제거
    handleRemove = (id) => {
        const {todos} = this.state;
        this.setState({
            todos: todos.filter(todo => todo.id !== id)
        });
    }

    render() {
        const {input, todos} = this.state;
        const {
            handleChange,
            handleCreate,
            handleKeyPress,
            handleToggle,
            handleRemove
        } = this;

        return (
            <TodoListTemplate form={(
                <Form
                    value={input}
                    onKeyPress={handleKeyPress}
                    onChange={handleChange}
                    onCreate={handleCreate}/>)}>
                <TodoItemList
                    todos={todos}
                    onToggle={handleToggle}
                    onRemove={handleRemove}/>
            </TodoListTemplate>
        )
    }
}

export default App;
