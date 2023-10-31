// todoitem 보여주는 컴포넌트
import React, {Component} from "react";
import './TodoItem.css';

// 파라미터로 받는 props : text(todo내용), checked(체크박스 상태), id(todo고유 id), onToggle(체크박스동작), onRemove(아이템 삭제)
class TodoItem extends Component {
    render() {
        const {text, checked, id, onToggle, onRemove} = this.props;

        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation(); // onToggle 실행되지 않도록
                    onRemove(id)
                }
                }>&times;</div>

                <div className={`todo-text ${checked ? ' checked ' : ''}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">check</div>)
                }
            </div>
        )
    }
}

export default TodoItem;