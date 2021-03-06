import React from "react";
import { ItemCount } from '../itemCount/itemCount'
import "./itemListContainer.css";
import aj1Black from '../../img/aj1.jpeg';
// import sb from '../../img/sb-dunk.jpeg';
// import airmax from '../../img/airmax.jpeg';

export const ItemListContainer = ({ propGreetings }) => {
    return (
        <section className="listContainer">
            <div className="divListContainer">
                <div className="itemListContainer">
                    <img src={aj1Black} alt="zapatillas nike AJ1" className="imgZapas"/>
                    <div className="contenedorInfoZapas">
                        <h4 className="tituloZapas">{propGreetings}</h4>
                        <ItemCount stock="8" initial="0"/>
                    </div>
                </div>
            </div>


            {/* COMENTADO
             <div className="divListContainer">
                <div className="itemListContainer">
                    <img src={sb} alt="zapatillas nike sb dunk" className="imgZapas"/>
                    <div className="contenedorInfoZapas">
                        <h4 className="tituloZapas">Nike SB DUNK</h4>
                        <div className="contenedorPrecio">
                            <p className="precioZapas">$28.999</p>
                            <p className="btnAg">+</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="divListContainer">
                <div className="itemListContainer">
                    <img src={airmax} alt="zapatillas nike airmax" className="imgZapas"/>
                    <div className="contenedorInfoZapas">
                        <h4 className="tituloZapas">Nike AIRMAX</h4>
                        <div className="contenedorPrecio">
                            <p className="precioZapas">$32.000</p>
                            <p className="btnAg">+</p>
                        </div>
                    </div>
                </div>
            </div>
            */}
        </section>
    );
}

ItemListContainer.defaultProps = {
    propGreetings: "Nike AJ1 Black"
}
