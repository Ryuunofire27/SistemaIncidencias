import axios from 'axios';
import url from './config';


//let oficinas = [];
/*console.log("nuevo deploy");
axios.get(url.oficinasURL + 'all', url.headers)
   .then((respuesta) => {
      /*.data.map((p, key) => {
         problema.push({
            id: p.id,
            opcion: p.tipo
         });
      });*/
      /*console.log(respuesta);
      respuesta.data && respuesta.data.map((r)=>{
         oficinas.push(new object({
            id : r.idOficina,
            opcion : r.descripcion
         }));

      });
   })
   .catch((error) => {
      console.log(error);
   });
/*export default [
   {
      opcion: 'RR.HH'
   },
   {
      opcion: 'Contabilidad'
   },
   {
      opcion: 'Tesoreria'
   },
   {
      opcion: 'Logistica'
   }
];*/

//console.log(oficinas);

