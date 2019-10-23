import React from 'react'
import style from './index.module.css';
import logo from '../../assets/images/orbitLogo.png';
import { Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';
const Index = ({ history }) => {
    return (
        <div className={style.body}>
            <div className={style.container}>
                <img src={logo} alt="Orbit Logo" className={style.logo}/>
                <h1 className="display-3">Welcome to Orbit!</h1>
                <Button onClick={() => history.push("admin-login")} color="secondary" size="lg" className={style.login}>
                    <h2>Login</h2>
                </Button>
            </div>    
        </div>
    )
}

export default withRouter(Index)
