import React, { useEffect, useState } from 'react';
import '../assets/styles/components/Player.scss';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
import NotFound from './NotFound';
import Spinner from './Spinner';

const Player = props => {

    const { id } = props.match.params;

    const [loading, setLoading] = useState(true);

    /* No podemos utilizar .length en un objeto porque va a dar error 
    entonces utilizamos Object.keys para saber cuantos elementos tiene ese objeto */
    const hasPlaying = Object.keys(props.playing).length > 0;

    useEffect(() => {
        props.getVideoSource(id);
        setLoading(false);
    }, [])

    const handleClickBack = e => {
        e.preventDefault();
        props.history.goBack();
    }

    if (loading) {
        return <Spinner />
    }

    return hasPlaying ? (
        <div className="Player">
            <video controls autoPlay>
                <source src={props.playing.source} type="video/mp4" />
            </video>
            <div className="Player-back">
                <button type="button" onClick={handleClickBack}>
                    Regresar
                </button>
            </div>
        </div>
    ) : <NotFound />
};

const mapStateToProps = state => {
    return {
        playing: state.playing
    }
}

const mapDispatchToProps = {
    getVideoSource
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);