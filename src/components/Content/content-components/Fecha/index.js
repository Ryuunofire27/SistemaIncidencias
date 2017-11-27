import React from 'react';

class Fecha extends React.Component{

   constructor(){
      super();

      this.handleFecha=this.handleFecha.bind(this);
   }

   handleFecha(e){
      this.props.selected(e);
   }



   render(){
      return(
         <div
            className={this.props.contenedor + " " + this.props.clase}>
            <span>{this.props.spanText}</span>
            <input className={this.props.inputClass} name={this.props.nombre}
                   type="date"
                   value={this.props.fecha}
                   onChange={this.handleFecha}
            />
         </div>
      );
   }
}

export default Fecha;