import React from 'react';

class Select extends React.Component{

   render(){
      let opciones = this.props.opciones;
      //console.log(opciones);
      return(
         <div
            className={this.props.contenedor + " " + this.props.clase}>
            <span>{this.props.spanText}</span>
            <select className={this.props.selectClass}>
               {opciones && opciones.map((opcion, key) =>{
                  //console.log(opcion);
                  return(
                     <option value={/*opcion.id*/key} key={key}>{opcion.opcion}</option>
                  );
               })}

            </select>
         </div>
      );
   }
}

export default Select;