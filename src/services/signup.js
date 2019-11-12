import api from '../services/api-login-backend'

const loginService  = async (email,senha) =>{

 
try {
     const response = await api.post('/createuser/login/auth', {
        usuario:email.split("@")[0],
        email,
        perfil:"heavybots",
        area:"heavybots",
        senha
      });
       
     return response.data.message

    } catch (err) {
      
     return  err.data.error 
    }

}
export default loginService;