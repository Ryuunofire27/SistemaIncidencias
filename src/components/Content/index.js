import React, {Component} from 'react';
import Fecha from "./content-components/Fecha/index";
import Solucion from "./content-components/Solucion/index";
import InputText from "./content-components/InputText/index";
import Select from "./content-components/Select/index";
import axios from 'axios';

import problemas from '../../data/problemas';
import oficinas from '../../data/oficina';
import baseURL from '../../data/config';

import styles from './content.css';

/*axios.get(baseURL.incidenciaURL + 'all', baseURL.headers)
   .then((respuesta)=>{
      console.log(respuesta.data);
   })
   .catch((error)=>{
     console.log(error);
   });

axios.get(baseURL.incidenciaURL + '1', baseURL.headers)
   .then((response)=>{
      console.log(response.data);
   })
   .catch((error)=>{
      console.log(error)
   });

axios.get(baseURL.problemasURL + 'all', baseURL.headers)
   .then((respuesta)=>{
      console.log(respuesta.data);
   })
   .catch((error)=>{
      console.log(error);
   });
*/

class Content extends Component{

   constructor(){
      super();

      this.state = {
         valorNmr: null,
         usuario: null,
         tecnico: null,
         isNumber: false,
         problemas: []

      };

      this.handleChange = this.handleChange.bind(this);
      this.handleButton = this.handleButton.bind(this);
   }

   componentWillMount(){
      this.setState({
         problemas: problemas
      });
   }

   handleChange(e){
      let valor = e.target.value;
      if(e.target.id==="valorNmr"){
         if(!isNaN(valor)) {
            this.setState({
               valorNmr: valor,
               isNumber: true
            });
            return valor;
         }
      }else if(e.target.id==="usuario"){
         this.setState({
            usuario: valor
         });
         return valor;
      }else if(e.target.id==="tecnico"){
         this.setState({
            tecnico: valor
         });
         return valor;
      }
      console.log(window.scrollY);
   }

   handleButton(){
      console.log(this.state.valorNmr + " " + this.state.usuario + " " + this.state.tecnico + " " + this.state.isNumber);

   }

   render(){
      return(
         <div className={styles.root}>
            <div className={styles.separar}>
               <InputText
                  clase={styles.separar_hijos} spanText="NRO:"
                  contenedor={styles.container} inputClass={styles.input}
                  name="numero" Id="valorNmr" valor={this.state.valorNmr}
                  cambio={this.handleChange}
               />
               <Select
                  clase={styles.separar_hijos} spanText="OFICINA:"
                  contenedor={styles.container} selectClass={styles.input}
                  opciones={oficinas}
               />
            </div>
            <div className={styles.separar}>
               <Select
                  clase={styles.separar_hijos} spanText="PROBLEMA:"
                  contenedor={styles.container} selectClass={styles.input}
                  opciones={this.state.problemas}
               />
               <Fecha
                  clase={styles.separar_hijos} spanText="FECHA REVISION"
                  contenedor={styles.container} inputClass={styles.input}
                  name="fecha-revision"
               />
            </div>
            <div className={styles.separar}>
               <InputText
                  clase={styles.separar_hijos} spanText="USUARIO:"
                  contenedor={styles.container} inputClass={styles.input}
                  name="usuario" Id="usuario" cambio={this.handleChange}
               />
               <InputText
                  clase={styles.separar_hijos} spanText="TECNICO:"
                  contenedor={styles.container} inputClass={styles.input}
                  name="tecnico" Id="tecnico" cambio={this.handleChange}
               />
            </div>
            <Solucion/>
            <div>
               <Fecha
                  clase={styles.separar_hijos + " " + styles.fecha_t} spanText="FECHA TERMINO"
                  contenedor={styles.container} inputClass={styles.input}
                  name="fecha-termino"
               />
            </div>
            <div className={styles.content_area}>
               <textarea className={styles.txtarea}>

               </textarea>
            </div>
            <div className={styles.botones}>
               <button onClick={this.handleButton}>INSERTAR</button>
               <button>MODIFICAR</button>
               <button>ELIMINAR</button>
               <button>REPORTE</button>
            </div>
         </div>
      );
   }

}

export default Content;