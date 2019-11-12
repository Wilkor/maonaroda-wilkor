import api from '../..services/api-login-backend'

const loginService  = async (nome,email,perfil,area,senha) =>{

 
try {
     const response = await api.post('/createuser/login/auth', {
        usuario: nome,
        email,
        perfil,
        area,
        senha
      });
       
     return response.data.message
    } catch (err) {
      
     return  err.data.error 
    }

}
export default loginService;