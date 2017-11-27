import React from 'react';

class Reporte extends React.Component{

   render(){

      return(
         <textarea className={this.props.clase}
                   value={this.props.children}
                   readOnly/>

      );
   }
}

export default Reporte;