import React, {Component} from 'react';
import Fecha from "./content-components/Fecha/index";
import Solucion from "./content-components/Solucion/index";
import InputText from "./content-components/InputText/index";
import Select from "./content-components/Select/index";
import axios from 'axios';
import url from '../../data/config';

import styles from './content.css';
import Reporte from "./content-components/Reporte/index";

class Content extends Component{

   constructor(){
      super();

      this.state = {
         valorNmr: null,
         usuario: null,
         tecnico: null,
         isNumber: false,
         problemas: null,
         oficinas: null,
         solucion: null,
         problemaSelected: null,
         oficinaSelected: null,
         fechaRevision: null,
         fechaTermino: null,
         reporte: ""

      };

      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleInsertarButton = this.handleInsertarButton.bind(this);
      this.handleModificarButton = this.handleModificarButton.bind(this);
      this.handleEliminarButton=this.handleEliminarButton.bind(this);
      this.handleReporteButton = this.handleReporteButton.bind(this);
      this.handleOficinaSelected = this.handleOficinaSelected.bind(this);
      this.handleProblemaSelected = this.handleProblemaSelected.bind(this);
      this.handleFRChange = this.handleFRChange.bind(this);
      this.handleFTChange = this.handleFTChange.bind(this);
      this.handleTA = this.handleTA.bind(this);
   }

   componentWillMount(){
      const fecha = new Date();
      const fechaActual = `${fecha.getFullYear()}-${fecha.getMonth()}-${fecha.getDate()}`;
      this.setState({
         fechaRevision: fechaActual,
         fechaTermino: fechaActual
      });
      axios.get(url.problemasURL + 'all', url.headers)
         .then(res =>{
            const problemas = res.data;
            this.setState({problemas});
         })
         .catch(err=>{
            console.log(err);
         });

      axios.get(url.oficinasURL + 'all', url.headers)
         .then(res =>{
            const oficinas = res.data;
            this.setState({oficinas});
         })
         .catch(err=>{
            console.log(err);
         });


   }

   handleInputChange(e){
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

   handleFRChange(e){
      this.setState({
         fechaRevision: e.target.value
      })
   }

   handleFTChange(e){
      this.setState({
         fechaTermino: e.target.value
      })
   }

   handleOficinaSelected(e){
      this.setState({
         oficinaSelected: e.target.value
      });
   }

   handleProblemaSelected(e){
      this.setState({
         problemaSelected: e.target.value
      });
   }

   handleInsertarButton() {
      if(this.state.oficinaSelected===(0||null) || this.state.problemaSelected===(0||null)
         || this.state.usuario===null){
         alert("problema, usuario y oficina no deben estar en blanco");
      }else{
         const incidencia = {
            oficina: this.state.oficinaSelected,
            problema: this.state.problemaSelected,
            fechaRevision: this.state.fechaRevision,
            fechaTermino: this.state.fechaTermino,
            usuario: this.state.usuario,
            tecnico: this.state.tecnico,
            solucion: this.state.solucion
         };
         axios.put(url.incidenciaURL+'new',incidencia, url.headers)
            .then(res=>{
               alert(res.data);
            })
            .catch(err=>{
               console.log(err);
            });
      }
   }

   handleModificarButton(){
      const incidencia = {
         idIncidencia: this.state.valorNmr,
         oficina: this.state.oficinaSelected,
         problema: this.state.problemaSelected,
         fechaRevision: this.state.fechaRevision,
         fechaTermino: this.state.fechaTermino,
         usuario: this.state.usuario,
         tecnico: this.state.tecnico,
         solucion: this.state.solucion
      };
      axios.post(url.incidenciaURL+'set',incidencia,url.headers)
         .then(res=>{
            console.log(res);
         })
         .catch(err=>{
            console.log(err);
         });
      this.handleReporteButton();
   }

   handleEliminarButton(){
      axios.delete(url.incidenciaURL+this.state.valorNmr,url.headers)
         .then(res=>{
            console.log(res);
         })
         .catch(err=>{
            console.log(err);
         });
   }

   handleReporteButton(){
      axios.get(url.incidenciaURL + 'all' ,url.headers)
         .then(res =>{
            this.setState({
               reporte: this.handleTA(res.data)
            });
         })
         .catch(err=>{
            console.log(err);
         });
   }

   handleTA(reporte){
      let cadena = "";

      reporte && reporte.map((report,key)=>{
         console.log(report);
         cadena = cadena +`${key+1}) id:${report.id} usuario:${report.usuario}`
                  + ` oficina:${report.oficina} problema:${report.problema}`
                  + ` tecnico:${report.tecnico} fecha-revision:${report.fechaRevision}`
                  + ` fecha-termino:${report.fechaTermino} solucion:${report.solucion}\n`;
      });

      return cadena;
   }



   render(){
      return(
         <div className={styles.root}>
            <div className={styles.separar}>
               <InputText
                  clase={styles.separar_hijos} spanText="NRO:"
                  contenedor={styles.container} inputClass={styles.input}
                  name="numero" Id="valorNmr" valor={this.state.valorNmr}
                  cambio={this.handleInputChange}
               />
               <Select
                  clase={styles.separar_hijos} spanText="OFICINA:"
                  contenedor={styles.container} selectClass={styles.input}
                  opciones={this.state.oficinas} selected={this.handleOficinaSelected}
               />
            </div>
            <div className={styles.separar}>
               <Select
                  clase={styles.separar_hijos} spanText="PROBLEMA:"
                  contenedor={styles.container} selectClass={styles.input}
                  opciones={this.state.problemas} selected={this.handleProblemaSelected}
               />
               <Fecha
                  clase={styles.separar_hijos} spanText="FECHA REVISION"
                  contenedor={styles.container} inputClass={styles.input}
                  name="fecha-revision" selected={this.handleFRChange}
                  fecha={this.state.fechaRevision}
               />
            </div>
            <div className={styles.separar}>
               <InputText
                  clase={styles.separar_hijos} spanText="USUARIO:"
                  contenedor={styles.container} inputClass={styles.input}
                  name="usuario" Id="usuario" cambio={this.handleInputChange}
               />
               <InputText
                  clase={styles.separar_hijos} spanText="TECNICO:"
                  contenedor={styles.container} inputClass={styles.input}
                  name="tecnico" Id="tecnico" cambio={this.handleInputChange}
               />
            </div>
            <Solucion/>
            <div>
               <Fecha
                  clase={styles.separar_hijos + " " + styles.fecha_t} spanText="FECHA TERMINO"
                  contenedor={styles.container} inputClass={styles.input}
                  name="fecha-termino" selected ={this.handleFTChange}
                  fecha={this.state.fechaTermino}
               />
            </div>
            <div className={styles.content_area}>
               <Reporte clase={styles.txtarea} reporte={this.state.reporte}>
                  {this.state.reporte}
               </Reporte>
            </div>
            <div className={styles.botones}>
               <button onClick={this.handleInsertarButton}>INSERTAR</button>
               <button onClick={this.handleModificarButton}>MODIFICAR</button>
               <button onClick={this.handleEliminarButton}>ELIMINAR</button>
               <button onClick={this.handleReporteButton}>REPORTE</button>
            </div>
            <br/>
            <br/>
         </div>
      );
   }

}

export default Content;