import React, {Component} from "react";
import c from './Auth.module.css';
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

export default class Auth extends Component {
    loginHandler = () => {
        
    }
    registerHandler = () => {

    }
    submitHandler = (event) => {
        event.preventDefault()
    }
    
    render() {
        return (
            <div className={c.auth}>
                <div>
                    <h1>Авторизация</h1>
                    <form className={c.authForm} onSubmit={this.submitHandler}>
                        <Input label="Email" />
                        <Input label="Пароль" type="password" />

                        <Button
                            type="success"
                            onClick={this.loginHandler}
                        >Войти</Button>
                        <Button
                            type="primary"
                            onClick={this.registerHandler}
                        >Регистрация</Button>

                    </form>
                </div>
            </div>
        )
    }
}