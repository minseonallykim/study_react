// todolist 의 title, form, list 모아서 보여주는 템플릿 역할 컴포넌트
import React from "react";
import './TodoListTemplate.css'

function TodoListTemplate({form, children}){
    return (
        <main className="todo-list-template">
            <div className="title">TO DO LIST</div>
            <section className="form-wrapper">{form}</section>
            <section className="todos-wrapper">{children}</section>
        </main>
    )
}

export default TodoListTemplate;