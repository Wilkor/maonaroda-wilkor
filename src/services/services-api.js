import { create } from 'apisauce';

const api = create({
  baseURL: 'https://http.msging.net',
});

api.addAsyncRequestTransform(request => async () => {

 let  token = null;

  if(localStorage.getItem('@heavybots:token')){

     token = localStorage.getItem('@heavybots:token')

  if (token)
    request.headers['Authorization'] = token;
  }

});

api.addResponseTransform(response => {
  if (!response.ok) throw response;
});


export default api;
