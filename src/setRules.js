
import api from './services-api';


const SetRules  = async (key) =>{

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

  let hash = guid();


     const response =  await api.post('/commands', {
          "id": hash,
           "to": "postmaster@desk.msging.net",
          "method": "set",
          "uri": "/rules",
          "type":"application/vnd.iris.desk.rule+json",
          "resource": {	 
              "id":hash,
              "title": key,
              "team": key,
              "property": "Contact.Extras.team",
              "relation": "Equals",
              "isActive": true,
              "values": [key],
         
            }
      },{ headers: { 'Content-Type': 'application/json'} } );
      const { data } = response.data
    
     return data

    } catch (err) {
      
     return  err.data.error 
    }

}
export default SetRules;
