import axios from 'axios';

const api = axios.create({
    baseURL: 'https://youlikedigital.com.br/iluguel/api/get-propertys.php',
});

// const response = axios.get('https://youlikedigital.com.br/iluguel/api/get-propertys.php').then(
//     response =>{
//         console.log(response.data);
//     });
   
export default  api;