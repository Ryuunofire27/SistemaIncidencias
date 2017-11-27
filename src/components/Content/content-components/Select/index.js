import React from 'react';

class Select extends React.Component{

   constructor(props){
      super(props);

      this.handleChangeSelected = this.handleChangeSelected.bind(this);
   }

   handleChangeSelected(e){
      this.props.selected(e)
   }

   render(){
      const opciones = this.props.opciones;
      return(
         <div
            className={this.props.contenedor + " " + this.props.clase}>
            <span>{this.props.spanText}</span>
            <select className={this.props.selectClass} onChange={this.handleChangeSelected} required>
               <option value='0'>----</option>
               {
                  opciones && opciones.map((opcion, key)=>{
                     return(
                        <option value={opcion.id} key={key}>{opcion.opcion}</option>
                     );
                  })
               }
            </select>
         </div>
      );
   }
}

export default Select;