
import api from './services-api';


const SetResource  = async (key,value,tipo) =>{

  function guid() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}

try {
     const response =  await api.post('/commands', {
        "id": guid(),
        "method": "set",
        "uri":  encodeURI("/resources/"+key.trim()),
           "type": "text/plain",
           "resource": value.trim()

      },{ headers: { 'Content-Type': 'application/json'} } );
      const { data } = response.data
    
     return data

    } catch (err) {
      
     return  err.data.error 
    }

}
export default SetResource;
