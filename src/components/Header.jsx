import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions'

const Header = props => {

    const { user, isLogin, isRegister } = props;
    const hasUser = Object.keys(user).length > 0;
    
    const handleLogout = e => {
        e.preventDefault();
        props.logoutRequest({});
    }

    const headerClass = classNames('header', {
        isLogin,
        isRegister
    });

    return (
        <header className={headerClass}>
            <Link to='/'>
                <img className='header__img' src={logo} alt='Platzi Video' />
            </Link>
            <div className='header__menu'>
                <div className="header__menu--profile">

                    {hasUser ?
                            <div>
                                <img src={gravatar(user.email)} alt={user.email} />
                            </div>
                        :
                            <ul>
                                <li><Link to="/register" className="link">Registrarse</Link></li>
                                <li><Link to='/login' className="link">Iniciar Sesión</Link></li> 
                            </ul>                     
                    }
                </div> 
                <ul className="ulCerrarSesion">
                    {hasUser ? 
                        <li>
                            <Link 
                                to="/#logout" 
                                onClick={handleLogout}
                                className="linkCerrarSesion"
                            >
                                Cerrar Sesión
                            </Link>
                        </li>
                    :
                        null
                    } 
                </ul>
                
            </div>
        </header>
      );
    };

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    logoutRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);