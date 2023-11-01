import React, {useEffect, useState} from 'react';

// 회원 dummy data
const User = {
    email: "test1@gmail.com",
    pw: "test123!!!"
}

function Login() {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

    const handleEmail = (e) => {
        setEmail(e.target.value);
        // 정규표현식 활용하여 email 형식 유효성 체크
        const regex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (regex.test(email)) {
            setEmailValid(true);
        } else {
            setEmailValid(false);
        }
    }

    const handlePw = (e) => {
        setPw(e.target.value);
        // 정규표현식 활용하여 비밀번호 형식 유효성 체크
        const regex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
        if (regex.test(pw)) {
            setPwValid(true);
        } else {
            setPwValid(false);
        }
    }

    const onClickConfirmButton = () => {
        if (email === User.email && pw === User.pw) {
            alert('로그인 성공');
        } else {
            alert('등록되지 않은 회원');
        }
    }

    // useEffect 활용 -> emailValid, pwValid 의 상태에 따라 button 활성화
    useEffect(() => {
        if (emailValid && pwValid) {
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    }, [emailValid, pwValid]);

    return (
        <div className="page">
            <div className="titleWrap">
                이메일과 비밀번호를
                <br/>
                입력해주세요
            </div>
            <div className="contentWrap">
                <div className="inputTitle">이메일 주소</div>
                <div className="inputWrap">
                    <input type="text"
                           className="input"
                           placeholder="test@gmail.com"
                           value={email}
                           onChange={handleEmail}/>
                </div>
                <div className="errorMessageWrap">
                    {!emailValid && email.length > 0 && ( // emailValid 가 true 이고 email.length > 0 일 때만 에러메세지
                        <div>올바른 이메일을 입력해주세요.</div>
                    )}
                </div>

                <div className="inputTitle" style={{marginTop: "26px"}}>비밀번호</div>
                <div className="inputWrap">
                    <input type="password"
                           className="input"
                           placeholder="영문, 숫자, 특수문자 포함 8자 이상"
                           value={pw}
                           onChange={handlePw}/>
                </div>
                <div className="errorMessageWrap">
                    {!pwValid && pw.length > 0 && ( // pwValid 가 true 이고 pw.length > 0 일 때만 에러메세지
                        <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                    )}
                </div>
            </div>
            <div>
                <button className="bottomButton"
                        disabled={notAllow}
                        onClick={onClickConfirmButton}>
                    확인
                </button>
            </div>
        </div>
    )
}

export default Login;
