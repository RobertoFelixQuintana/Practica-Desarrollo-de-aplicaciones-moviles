import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Banner extends Component {
    render() {
        return (
            <div className="Banner">
                <h1>{this.props.texto}</h1>
            </div>
        )
    }
}

export default Banner;

Banner.propTypes={
    texto: PropTypes.string,
}
Banner.defaultProps={
    texto: "Desarrollo de aplicaciones para dispositivos moviles",
}