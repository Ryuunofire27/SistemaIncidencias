import React from 'react';
import styles from './solucion.css';

class Solucion extends React.Component{

   render(){
      return(
         <div className={styles.root}>
            <span>SOLUCION:</span>
            <textarea className={styles.txtarea} wrap="true">

            </textarea>
         </div>
      );
   }
}

export default Solucion;