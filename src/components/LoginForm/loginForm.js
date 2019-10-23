import React from 'react'
import style from './loginForm.module.css'
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';

const LoginForm = () => {
    return (
        <div>
            <Card>
                <CardHeader>Login</CardHeader>
                <CardBody className={style.form_card}>
                    
                </CardBody>
            </Card>
        </div>
    )
}

export default LoginForm
