import React,{Component} from 'react'

import {rutas} from '../rutas.json';

class MostrarRutas extends Component{
    constructor(){
        super();
        this.state={
            rutas
        };
    }
    render(){
        const rutas=this.state.rutas.map((ruta,i)=>{
            console.log(ruta.barrios[i].nombre)
            return(
                <div className="col-md-4" key={i}>
                    <div className="card mt-4">
                        <div className="card-header">
                        
                            <h1>{ruta.nombre}</h1>
                            <p>{ruta.ciudad}</p>
                        </div>
                        <div className="card=body">
                            <h6>Transportador:</h6>
                             <p>{ruta.transportador}</p>
                            <h6>Vehiculo:</h6>
                            <p>{ruta.vehiculo}</p>
                            <h6>Barrios:</h6>
                            {ruta.barrios.map((barrio)=>{
                                return(<li>{barrio.nombre}</li>);
                            })}

                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary">
                                Editar                                 
                            </button>
                            <button className="btn btn-danger">
                                Eliminar                                 
                            </button>
                            

           </div>
                    </div>
                </div>
            )
        });
        return(
            <div className="container">
        <div className="row mt-4">
          {rutas}
        </div>
      </div>
        );
    }


}
export default MostrarRutas;