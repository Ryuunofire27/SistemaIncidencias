import React from 'react';

class InputText extends React.Component{

   constructor(){
      super();

      this.state={
         texto: ""
      };

      this.handleChange=this.handleChange.bind(this);

   }

   handleChange(e){
      let valor = this.props.cambio(e);
      if(valor){
         this.setState({
            texto: valor
         });
      }
      if(valor===""){
         this.setState({
            texto: ""
         });
      }


   }

   render(){
      return(
         <div
            className={this.props.contenedor + " " + this.props.clase}>
            <span>{this.props.spanText}</span>
            <input
               name={this.props.nombre}
               id={this.props.Id}
               className={this.props.inputClass}
               type="text"
               value={this.state.texto}
               onChange={this.handleChange}
            />
         </div>
      );
   }
}

export default InputText;