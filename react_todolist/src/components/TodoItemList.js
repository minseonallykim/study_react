// todoitem 컴포넌트 여러개를 렌더링 해주는 역할을 하는 컴포넌트
import React, {Component} from "react";
import TodoItem from "./TodoItem";

// 파라미터로 받는 props : todos(todo 객체 들어있는 배열), onToggle(체크박스 작동), onRemove(아이템 삭제)
class TodoItemList extends Component {
    render() {
        const {todos, onToggle, onRemove} = this.props;
        const todoList = todos.map(
            (todo) => (
                <TodoItem
                    {...todo} // 내부값들이 모두 자동으로 props로 설정됨
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={todo.id}
                />
            )
        );

        return (
            <div>
                {todoList}
            </div>
        )
    }
}

export default TodoItemList;