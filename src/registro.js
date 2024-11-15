import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./registrarse.css";

const Registro = () => {
  const [Nombre, setNombre] = useState("");
  const [Correo, setCorreo] = useState("");
  const [Contraseña, setContraseña] = useState("");
  const [mensaje, setMensaje] = useState("");

  const registrarUsuario = async (e) => {
    e.preventDefault();
    setMensaje("");

    try {
      const response = await axios.post("http://localhost:3001/api/registrar", {
        // Endpoint de registro
        Nombre,
        Correo,
        Contraseña,
      });

      setMensaje("Usuario registrado exitosamente");
    } catch (error) {
      console.error(error);
      setMensaje("Error al registrar usuario");
    }
  };

  return (
    <div className="registro-container">
      <h2>Registrate</h2>

      {/* Formulario de Registro */}
      <form onSubmit={registrarUsuario} className="login-form">
        <div className="input-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="Nombre"
            name="Nombre"
            placeholder="Ingresa tu nombre"
            value={Nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="correo">Correo</label>
          <input
            type="text"
            id="Correo"
            name="Correo"
            placeholder="Ingresa tu correo"
            value={Correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </div>
        <div className="input-group-resgistro">
          <label htmlFor="contraseña">Contraseña</label>
          <input
            type="password"
            id="Contraseña"
            name="Contraseña"
            placeholder="Ingresa tu contraseña"
            value={Contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-submit">
          Registrar usuario
        </button>
      </form>
      <p>
        ¿Ya tienes una cuenta? <Link to="/">Inicia sesión aquí</Link>
      </p>

      {/* Mensaje */}
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default Registro;
