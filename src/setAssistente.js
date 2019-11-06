
import api from './services-api';


const SetAssistente  = async (key,value) =>{

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
          "to": "postmaster@desk.msging.net",
          "method": "set",
          "uri": "/attendants",
          "type": "application/vnd.iris.desk.attendant+json",
            "resource": {  	
              "identity":value.trim()+"@blip.ai",
              "teams": [key.trim()]  }
              },
         {
            headers: {'Content-Type': 'application/json'}}
             
        );


      const { data } = response.data
    
     return data

    } catch (err) {
      
     return  err.data.error 
    }

}
export default SetAssistente;
