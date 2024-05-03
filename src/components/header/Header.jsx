import React from 'react';
import { Logo } from '../general/Logo'; 
import './header.css';

export const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <Logo text="Almacenadora" />
        <div className="header-text">
          <h1>Tareas de Almacenadora</h1>
          <p>Este es el área de gestión de tareas de la Almacenadora</p>
          <button>Agregar Tarea</button>
        </div>
      </div>
    </div>
  );
};