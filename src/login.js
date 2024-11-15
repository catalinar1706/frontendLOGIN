import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './App.css';

const Login = () => {
  const [Correo, setCorreo] = useState('');
  const [Contraseña, setContraseña] = useState('');
  const [ConfirmarContraseña, setConfirmarContraseña] = useState('');
  const [mensaje, setMensaje] = useState('');


  const enviarLogin = async (e) => {
    e.preventDefault();
    setMensaje(''); 
    try {
   
      const response = await axios.post('http://localhost:3001/api/login', {
        Correo,
        Contraseña,
        ConfirmarContraseña
      });

      localStorage.setItem('token', response.data.token);

 
      setMensaje('Login exitoso');

    } catch (error) {
      console.error(error);
      setMensaje('Error: Credenciales incorrectas o problema en el servidor');
    }
  };


  const registrarUsuario = async (e) => {
    e.preventDefault();
    setMensaje('');

    try {
      const response = await axios.post('http://localhost:3001/api/login', {
        Correo,
        Contraseña,
        ConfirmarContraseña
      });

      setMensaje('Usuario registrado exitosamente');
    } catch (error) {
      console.error(error);
      setMensaje('Error al registrar usuario');
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>

      <form onSubmit={enviarLogin} className="login-form">
        <div className="input-group">
          <label htmlFor="correo">Correo</label>
          <input 
            type="text" 
            id="correo" 
            name="correo" 
            placeholder="Ingresa tu correo" 
            value={Correo} 
            onChange={(e) => setCorreo(e.target.value)} 
            required 
          />
        </div>
        <div className="input-group">
          <label htmlFor="contraseña">Contraseña</label>
          <input 
            type="text" 
            id="contraseña" 
            name="contraseña" 
            placeholder="Ingresa tu contraseña" 
            value={Contraseña} 
            onChange={(e) => setContraseña(e.target.value)} 
            required 
          />
        </div>
        <div className="input-group">
          <label htmlFor="contraseña">Confirmar Contraseña</label>
          <input 
            type="password" 
            id="confirmar contraseña" 
            name="confirmar contraseña" 
            placeholder="Ingresa tu contraseña" 
            value={ConfirmarContraseña} 
            onChange={(e) => setConfirmarContraseña(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="btn-submit">Iniciar sesión</button>
      </form>


      <p>
        ¿No tienes una cuenta? <Link className='registro'  to="/registro">Regístrate aquí</Link>
      </p>


      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default Login;