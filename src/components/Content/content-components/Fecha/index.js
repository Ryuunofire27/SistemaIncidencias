import React from 'react';

class Fecha extends React.Component{

   render(){
      return(
         <div
            className={this.props.contenedor + " " + this.props.clase}>
            <span>{this.props.spanText}</span>
            <input className={this.props.inputClass} name={this.props.nombre} type="date"/>
         </div>
      );
   }
}

export default Fecha;