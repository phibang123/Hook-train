import React,{useRef, useState} from 'react'

export default function DemoUseRef(props)
{
    let inputUserName = useRef(null)
    let inputPassword = useRef(null)

    let userName = useRef('')
    console.log('userName', userName)

    let [userLogin, setUserLogin] = useState({userName: ''})
    
    const handleLogin = () =>
    {
        // console.log('comInputUserName',inputUserName.current)
        // console.log('comInputPassword',inputPassword.current)
        // let {name,value} = inputUserName.current


        
        
        
        userName = 'abc';
        setUserLogin({
            userName : userName
        })
    }
    return (
        <div className='container'>
            <h3>Login</h3>
            <div className='form-group'>
                <h3>User Name</h3>
                <input ref={inputUserName} className='form-control' name='userName'></input>
            </div>
            <div className='form-group'>
                <h3>Passwrod</h3>
                <input ref={inputPassword} className='form-control' name='passwrod' type='Passwrod'></input>
            </div>
            <div className='form-group'>
                <button className='btn btn-success' onClick={() =>
                {
                    handleLogin()
                }}>Login</button>
            </div>
        </div>
    )
}
