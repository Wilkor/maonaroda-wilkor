import { create } from 'apisauce';

const api = create({
  baseURL: 'https://heavybots-wilkor.herokuapp.com/api/v1',
});

api.addAsyncRequestTransform(request => async () => {
  const token = await localStorage.getItem('@bigbets:iduser');
  const id = await localStorage.getItem('@bigbets:id')
  if (token && id)
    request.headers['x-access-token'] = token;
    request.headers['x-aceess-id'] = id;
});

api.addResponseTransform(response => {

  console.log(response.status)
  if (!response.ok || response.status===400 ) throw response;
});

export default api;