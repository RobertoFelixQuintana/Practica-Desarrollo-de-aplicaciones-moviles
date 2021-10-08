import React, { Component } from 'react';
import Banner from './Banner';
import Header from './Header';
import Body from "./Body";
import Footer from "./Footer";

class App extends Component {
    render() {
        const temas= [
        "Tipos de componentes",
        "Contenedores",
        "Usar mas de un componente",
        "Funciones",
        "Props",
        "Prop-Types",
        "DefaultProps"
        ]
        return (
            <div>
                
            <Banner 
            />

            <Header/>

            <Banner 
            texto="08/octubre/2021"
            />

            <Body
            practica="Practica 1 - Unidad 1"
            temas={temas}
            />

            <Footer
            pie={<p>Copyright © Todos los derechos reservados</p>}
            />
            </div>
        )
    }
}

export default App;
