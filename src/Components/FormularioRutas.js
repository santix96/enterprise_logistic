import React,{Component} from 'react'
import './styles/FormularioRutas.css';
//import {rutas} from '../rutas.json';
class ConsultarRutas extends Component{
    
    constructor(){
        super();
        this.state={
            nombre:'',
            
        };
    }
    render(){
        
        return(
            <div className="card" >
                <form className="card-body" >
                    <div className="form-group">
                        <input
                            type="text"
                            name="nombre"
                            className="form-control"
                            placeholder="nombre"
                        />
                        
                    </div>
                    <button className="btn btn-primary">consultar</button>
                </form>
                
            </div>
            
            
          
        );

    }

}
export default ConsultarRutas;