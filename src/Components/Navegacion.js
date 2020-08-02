import React,{Component} from 'react'
import {rutas} from '../rutas.json';
class Navegacion extends Component{
    render(){

        return(

            <nav className="navbar navbar-dark bg-dark">
                <a className="text-white"> Consultar Rutas
                <span className="badge badge-pill badge-light ml-2">
                    {rutas.length}
                 </span>
                 </a>
            

            </nav>
        );

    }


}
export default Navegacion;