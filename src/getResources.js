
import api from './services-api';


const getResouces  = async () =>{

try {

     const response =  await api.post('/commands', {
     id:"f41b7e75-264f-4af0-bddc-2c9797481e88",
      method:"get",
      uri: "/resources?$take=100000"
      },{ headers: { 'Content-Type': 'application/json'} } );
       
          return response.data.resource.items

    } catch (err) {
      
     return  err.data.error 
    }

}
export default getResouces;
