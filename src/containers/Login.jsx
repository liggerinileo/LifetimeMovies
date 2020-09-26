import React, { Fragment, useState } from 'react';
import { connect } from "react-redux";
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import Header from '../components/Header';

const Login = props => {

    const [form, setValues] = useState({
        email: ''
    });

    const handleInput = e => {
        setValues({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.loginRequest(form);
        props.history.push('/');
    }

    return (
        <Fragment>
            <Header isLogin />
            <section className="login">
                <section className="login__container">
                    <h2>Inicia sesión</h2>
                    <form className="login__container--form">
                        <input 
                            name="email"
                            className="input" 
                            type="text" 
                            placeholder="Correo"
                            onChange={handleInput}
                        />
                        <input
                            name="password"
                            className="input" 
                            type="password" 
                            placeholder="Contraseña"
                            onChange={handleInput}
                        />
                        <input 
                            className="btn-sesion" 
                            type="submit" 
                            onClick={handleSubmit} 
                            value="Iniciar Sesión"
                        /> 
                        <div className="login__container--remember-me">
                            <label>
                                <input type="checkbox" id="cbox1" value="first_checkbox" />Recuérdame
                            </label>
                            <Link to="/" className='Link'>Olvidé mi contraseña</Link>
                        </div>
                    </form>
                    <section className="login__container--social-media">
                        <div><img src={googleIcon} /> Inicia sesión con Google</div>
                        <div><img src={twitterIcon} /> Inicia sesión con Twitter</div>
                    </section>
                    <p className="login__container--register">
                        No tienes ninguna cuenta? {' '} <Link to="/register" className='Link'> Regístrate</Link>
                    </p>
                </section>
            </section>
        </Fragment>
    );
}

const mapDispatchToProps = {
    loginRequest
}

export default connect(null, mapDispatchToProps)(Login);