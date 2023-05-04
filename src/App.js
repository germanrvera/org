import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './componentes/Header/Header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from './componentes/MiOrg/index';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(true)
  const [colaboradores, actualizarColaboradores] = useState([])


  const [equipos, actualizarEquipos] = useState([
        
    {   id: uuid(),
        titulo: "Programacion",
        colorPrimario: "#57C278",
        colorSecundario: "#D9F7E9"

    }
    ,

    {   id: uuid(),
        titulo: "Front End",
        colorPrimario: "#82CFFA",
        colorSecundario: "#E8F8FF"

    },

    {   id: uuid(),
        titulo: "Data Science",
        colorPrimario: "#ASD157",
        colorSecundario: "#F0F8E2"

    },

    {   id: uuid(),
        titulo: "Devops",
        colorPrimario: "#E06B69",
        colorSecundario: "#FDE7E8"

    },

    {   id: uuid(),
        titulo: "UX y Diseño",
        colorPrimario: "#DB6EFB",
        colorSecundario: "#FAE9F5"

    },

    {   id: uuid(),
        titulo: "Movil",
        colorPrimario: "#FFBA05",
        colorSecundario: "#FFF5D9"

    },

    {   id: uuid(),
        titulo: "Innovacion y Gestion",
        colorPrimario: "#FF8A29",
        colorSecundario: "#FFEDDF"

    }])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  const registrarColaborador = (colaborador) =>{
    actualizarColaboradores([...colaboradores,colaborador])

  }

  const eliminarColaborador = (id)=>{
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  const actualizarColor = (color, id)=>{
    const equiposActualizados = equipos.map((equipo) =>{
      if (equipo.id === id) {
        equipo.colorPrimario = color
        
      }
      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  const crearEquipo =(nuevoEquipo)=>{
    actualizarEquipos([...equipos,{...nuevoEquipo, id:uuid()}])

  }

  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador)=>{
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
        
      }
      return colaborador
    })

  }
  
  return (
    <div >
      <Header />
      {mostrarFormulario  && <Formulario equipos={equipos.map((equipo)=>equipo.titulo)}
      registrarColaborador = {registrarColaborador}
      crearEquipo={crearEquipo}/>}
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {
        equipos.map((equipo)=> <Equipo 
        datos={equipo} 
        key={equipo.titulo} 
        colaboradores={colaboradores.filter(colaborador =>colaborador.equipo === equipo.titulo)} 
        eliminarColaborador= {eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}/>)
        
      }

      <Footer/>

    </div>
  );
}

export default App;

