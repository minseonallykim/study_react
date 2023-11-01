import React, {useState} from "react";
import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";
import './App.css'

function App() {
    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [lastId, updateLastId] = useState(0);

    // input 의 변화
    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    // 새로운 todolist 추가
    const handleCreate = () => {
        setInputValue(''); // 입력 필드를 비웁니다.
        setTodoList([...todoList, {id: lastId, text: inputValue, checked: false}]);
        updateLastId(lastId + 1);
    }
    const handleKeyPress = (e) => {
        // 눌려진 키가 Enter면 handleCreate 호출
        if (e.key === 'Enter') {
            handleCreate();
        }
    }

    // 체크 동작
    const handleToggle = (id) => {
        // 파라미터로 받은 id를 가지고 몇 번째 아이템인지 찾기
        const index = todoList.findIndex(todo => todo.id === id);
        const selected = todoList[index]; // 선택한 객체
        const nextTodos = [...todoList]; // 배열 복사
        // 기존 값들 복사, checked 값 덮어쓰기
        nextTodos[index] = {
            ...selected,
            checked: !selected.checked
        };
        setTodoList([...nextTodos]); // 수정된 배열로 상태 업데이트
    }

    // todolist 제거
    const handleRemove = (removeId) => {
        // 콜백이 true 를 반환할 때만 남겨두기
        const newTodoList = todoList.filter((todo) => {
            return todo.id !== removeId
        })
        setTodoList(newTodoList)
    }

    return (
        <TodoListTemplate form={(
            <Form
                value={inputValue}
                onKeyPress={handleKeyPress}
                onChange={handleChange}
                onCreate={handleCreate}/>)}>
            <TodoItemList
                todos={todoList}
                onToggle={handleToggle}
                onRemove={handleRemove}>
            </TodoItemList>
        </TodoListTemplate>
    )
}

export default App;
