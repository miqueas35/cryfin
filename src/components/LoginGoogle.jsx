import React from 'react';
import GoogleLogin from 'react-google-login';
import {useNavigate} from 'react-router-dom';

const LoginGoogle = () => {

  let navigate=useNavigate();

  const responseGoogle = (response) => {
    console.log(response);

    if(response?.error){
      console.warn('Error en el logueo');
    }else{
      console.log('Usuario autenticado');
      localStorage.setItem('auth', JSON.stringify(response.accessToken));
      localStorage.setItem('user', JSON.stringify(response.profileObj));
      navigate('/projects');
    }
  }

  return (
    <GoogleLogin
    clientId="347586402074-0hbun4tct3kh30830ponr0b5inljdr3c.apps.googleusercontent.com"
    buttonText="Iniciar Sesión con Google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
  )
}

export default LoginGoogle