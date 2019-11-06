
import api from './services-api';


const SetContact  = async () =>{

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
          "uri": '/contacts',
          "type": 'application/vnd.lime.contact+json',
           
            "resource": {  
              "identity":"11933352091",
               "name": 'Chibani',
               "gender":'male',
                "extras": {
                  "telefone": '11933352091'      
                  }
                }
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
export default SetContact;
