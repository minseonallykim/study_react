// todoitem 컴포넌트 여러개를 렌더링 해주는 역할을 하는 컴포넌트
import React from "react";
import TodoItem from "./TodoItem";

// todos(todo 객체 들어있는 배열), onToggle(체크박스 작동), onRemove(아이템 삭제)
function TodoItemList({todos, onToggle, onRemove}) {
    const todoList = todos.map(
        (todo, idx) => (
            <TodoItem
                todo={todo}
                checked={todo.checked}
                id={todo.id}
                onToggle={onToggle}
                onRemove={onRemove}
                key={idx}
            />
        )
    );

    return (
        <div>{todoList}</div>
    )
}

export default TodoItemList;