import React from 'react';
import classNames from 'classnames';
import '../assets/styles/components/Search.scss';


const Search = ({ isHome }) => {
    


    const inputStyte = classNames('input', {
        isHome,
    });

    return (
        <section className="main">
            <h2 className="main__title">¿Qué quieres ver hoy?</h2>
            <input type="text" className={inputStyte} placeholder="Buscar..." />
        </section>
    );
}

export default Search;