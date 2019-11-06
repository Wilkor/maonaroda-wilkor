import { create } from 'apisauce';

const api = create({
  baseURL: 'https://msging.net',
});

api.addAsyncRequestTransform(request => async () => {

 const token = null;

  if(!!localStorage.getItem('@heavybots:token')){

    const token = localStorage.getItem('@heavybots:token')

  if (token)
    request.headers['Authorization'] = token;
  }
    
});

api.addResponseTransform(response => {
  if (!response.ok) throw response;
});


export default api;
