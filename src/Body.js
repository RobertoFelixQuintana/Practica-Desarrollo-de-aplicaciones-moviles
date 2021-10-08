import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Body extends Component {
    render() {
        return (
            <div className="Body"> 
                <h3>{this.props.practica}</h3>
                <div className="Lista">
                    <ol start="1">
                        {
                        this.props.temas.map((e,index)=>
                        <li key={index}>{e}</li>
                        )
                        }
                    </ol>
                </div>
                    
                <button onClick={()=>(alert("Hola"))}>Dale click</button>
            </div>
        )
    }
}
export default Body;

Body.propTypes={
    practica: PropTypes.string,
    temas: PropTypes.array
}