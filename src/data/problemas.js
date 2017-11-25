import axios from 'axios';
import baseURL from './config';

let problema = Array();

axios.get(baseURL.problemasURL + 'all', baseURL.headers)
   .then((respuesta) => {
      problema = respuesta.data.map((p,key) => {
         problema.push({
            id: p.id,
            opcion: p.tipo
         });
      });
      /*console.log(respuesta.data);
      response = respuesta.data;
      console.log(response);*/
      //response= respuesta.data;
      /*for(let i=0; i < respuesta.data.length; i++){
         problema[i] = {
            id: respuesta.data[i].id,
            opcion: respuesta.data[i].tipo
         }
         console.log(problema[i]);
      }*/
      //console.log(problema);
   })
   .catch((error) => {
      console.log(error);
   });
//console.log(problema);
console.log("problema");
console.log(problema);

/*export default [
   {
      opcion: 'virus'
   },
   {
      opcion: 'Equipo malogrado'
   },
   {
      opcion: 'falla electrica'
   }
];*/
/*let problema = [
   {
      opcion: 'virus'
   },
   {
      opcion: 'Equipo malogrado'
   },
   {
      opcion: 'falla electrica'
   }
]*/
/*for(let i=0; i < response.length; i++){
   console.log("gola");
   console.log("problema" +i + problema[0].id + " "+problema.opcion)
}*/
export default problema;