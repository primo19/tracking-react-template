import React from 'react'
import style from './login.module.css'
import mapLogo from '../../assets/images/mapLogo.png'

const Login = () => {
    return (
        <div>
            <div className={style.left}>
                hello
            </div>

            <div className={style.right}>
                <img src={mapLogo} alt="Map Logo" className={style.map}/>
            </div>
        </div>
    )
}

export default Login
