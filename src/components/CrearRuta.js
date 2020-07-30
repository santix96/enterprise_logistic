import React, { Component } from 'react';
//import Select from 'react-select'
//import { Combobox } from 'react-widgets';
//import Combobox from 'react-widgets/lib/Combobox';
//import { ComboBox } from '@progress/kendo-react-dropdowns';
import './CrearRuta.css';
import './Transportador'
import './Zona'

class CrearRuta extends Component{

  constructor(props){
    super(props);
    this.state = {
      title: 'CREAR RUTA',
      act: 0,
      index: '',
      datas: [],
      options:[],
      value:'Zona',
      transportador:'Transportador',
      proveedor: '',
      fecha: '',
      hora: ''
    }

       this.handleChange = this.handleChange.bind(this);
       this.handleChange1 = this.handleChange1.bind(this);
  }

  onChangeProveedor = (e) =>{
    this.setState({proveedor:e.target.value});
  }

  onChangeZona = (e) =>{
    this.setState({zona:e.target.value});
  }

  onChangeTransportador = (e) =>{
    this.setState({Transportador:e.target.transportador});
  }


  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleChange1(event){
    this.setState({transportador: event.target.transportador});
  }


  componentDidMount(){
    //this.refs.destino.focus();
  }

  fCrear = (e) => {
    e.preventDefault();
    console.log('try');

    let datas = this.state.datas;
    //let zona = this.refs.zona.value;
    //let destino = this.refs.destino.value;
    let proveedor = this.refs.proveedor.value;
    let fecha = this.refs.fecha.value;
    let hora = this.refs.hora.value;

    let data = {
      proveedor, fecha, hora
    }

    datas.push(data);

    this.setState({
      datas: datas
    });
    this.refs.myForm.reset();
    //this.refs.destino.focus();

  }
//type="text" ref="zona" placeholder="zona"

  render(){
    let datas = this.state.datas;
    return(

      <div className= "CrearRuta" >
          <h2>{this.state.title}</h2>
             <form ref="myForm" className="myForm">
                <select onChange={this.onChangeZona} value={this.state.value} onChange={this.handleChange} placeholder="Zona" className="formField">
                     <option hidden selected>Zona</option>
                     <option value="Zona1" >Zona1</option>
                     <option value="Zona2">Zona2</option>
                     <option value="Zona3">Zona3</option>
                     <option value="Zona4">Zona4</option>
                </select>
                <select onChange={this.onChangeTransportador} value={this.state.transportador} onChange={this.handleChange1} placeholder="Transportador" className="formField">
                     <option hidden selected>Transportador</option>
                     <option value="t1" >T1</option>
                     <option value="t2">T2</option>
                     <option value="t3">T3</option>
                     <option value="t4">T4</option>
                </select>
                <input onChange={this.onChangeProveedor} type="text" ref= "proveedor" placeholder="Proveedor" className="formField" />
                <input type="date" ref= "fecha" placeholder="Fecha" className="formField" />
                <input type="time" ref= "hora" placeholder="Hora" className="formField" />
                <button onClick={(e)=>this.fCrear(e)} className= "myButton">CREAR </button>
            </form>
        <pre>
          {datas.map((data, i)=>
             <li key={i} className="myList">
             {i+1}.{this.state.value},{this.state.transportador},{data.proveedor},{data.fecha},{data.hora}
             </li>
          )}
        </pre>
      </div>
    );
  }
}

export default CrearRuta;
