// todoitem 보여주는 컴포넌트
import React from "react";
import './TodoItem.css';

// text(todo내용), checked(체크박스 상태), id(todo id), onToggle(체크박스동작), onRemove(삭제)
function TodoItem({todo, checked, id, onToggle, onRemove}) {
    return (
        <div className="todo-item" onClick={() => onToggle(id)}>
            <div className="remove"
                 onClick={(e) => {
                     e.stopPropagation(); // onToggle 실행되지 않도록
                     onRemove(id)
                 }}>&times;</div>

            <div className={`todo-text ${checked ? ' checked ' : ''}`}>
                <div>{todo.text}</div>
            </div>
            {checked && (<div className="check-mark">check</div>)}
        </div>
    )
}

export default TodoItem;