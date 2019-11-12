
const getToken =  () =>{

const token =  !!localStorage.getItem('@bigbets:iduser');

return token

}

export default getToken;