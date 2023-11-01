// 입력되는 input 과 버튼이 담긴 컴포넌트
import React from "react";
import './Form.css'

// value(input내용), onCreate(버튼 클릭시), onChange(input내용 변경시), onKeyPress(input에서 key입력)
function Form({value, onChange, onCreate, onKeyPress}){
    return (
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
            <div className="create-button" onClick={onCreate}>ADD</div>
        </div>
    )
}

export default Form;