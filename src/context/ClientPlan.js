import { createContext, useState, useContext, useEffect } from "react";
import Cookies from "universal-cookie";
import materias from "../models/materias";
import programas from "../models/programas";

export const ClientPlanContext = createContext();

export const useClientPlan = () => {
  const contexto = useContext(ClientPlanContext);
  if (!contexto) {
    throw new Error("No hay contexto de usuario");
  }
  return contexto;
};

export const ClientPlanProvider = ({ children }) => {
  const [clientPlan, setClientPlan] = useState(null); //por defaul es tipo_programa es pregrado/1
  const [user, setUser] = useState(null);
  const [divisaConversion, setDivisaConversion] = useState(null);


  const crearUsuario = async (usuario) => {
    try {
      const { nombre, correo, idEstudiante } = usuario;
      const currentUser = {
        nombre: nombre,
        correo: correo,
        idEstudiante: idEstudiante,
      };

      setUser(currentUser);
      inicializarClientPlan();
      inicializarDivisa();
    } catch (error) {
      console.log(error);
    }
  };

  const inicializarClientPlan = async () => {
    try {
      const currentClientPlan = {
        programa: "",
        tipo_programa: 1,
        materias: [],
      };
      setClientPlan(currentClientPlan);
    } catch (error) {
      console.log(error);
    }
  };

  const inicializarDivisa = async () => {
    try {
      fetch('https://api.frankfurter.app/latest?to=USD,EUR')
      .then(response => response.json())
      .then(data => {
        const currentValue = {
          value: data.rates.USD,
        };
        setDivisaConversion(currentValue);
      });

    } catch (error) {
      console.log(error);
    }
  };

  const establecerPrograma = async (value) => {
    try {

        setClientPlan({ programa: value, tipo_programa: clientPlan.tipo_programa, materias:clientPlan.materias }); 

    } catch (error) {
      console.log(error);
    }
  };

  const estableceTipoPrograma = async () => {
    try {
      if (clientPlan.tipo_programa === 1) {
        setClientPlan({
          programa: clientPlan.programa,
          tipo_programa: 2,
          materias: [],
        }); 
      } else {
        setClientPlan({
          programa: clientPlan.programa,
          tipo_programa: 1,
          materias: [],
        }); 
      }

    } catch (error) {
      console.log(error);
    }
  };

  const agregarMateria = async (materiaNueva) => {
    try {
      var arrayTemp = clientPlan.materias;
      arrayTemp.push(materiaNueva);
      const currentClientPlan = {
        programa: clientPlan.programa,
        tipo_programa: clientPlan.tipo_programa,
        materias: arrayTemp,
      };
      setClientPlan(currentClientPlan);
    } catch (error) {
      console.log(error);
    }
  };

  const eliminarMateria = async (materiaEliminar) => {
    try {
      var arrayTemp = clientPlan.materias;
      arrayTemp.pop(materiaEliminar);
      const currentClientPlan = {
        programa: clientPlan.programa,
        tipo_programa: clientPlan.tipo_programa,
        materias: arrayTemp,
      };
      setClientPlan(currentClientPlan);
    } catch (error) {
      console.log(error);
    }
  };

  const eliminarMateriasEstudiante = async () => {
    try {
      const currentClientPlan = {
        programa: clientPlan.programa,
        tipo_programa: clientPlan.tipo_programa,
        materias: [],
      };
      setClientPlan(currentClientPlan);
    } catch (error) {
      console.log(error);
    }
  };


  const updateArrayMaterias = async (codMateria) => {
    try {
        var arrayTemp = clientPlan.materias;
        var objMateria = materias.filter(materia => materia.codMateria === codMateria);
        var objMateriaEstudiante = [];

        arrayTemp.forEach((materiaEstudiante) => {
          materias.forEach((materia) => {
            if(materia.nombre === materiaEstudiante){
              objMateriaEstudiante.push(materia.profesor);
            }
          });
        });

        if(!arrayTemp.includes(objMateria[0].nombre) && !objMateriaEstudiante.includes(objMateria[0].profesor)){
            agregarMateria(objMateria[0].nombre);
        }
    } catch (error) {
      console.log(error);
    }
  };

  const getListProgramas=()=>{
    return programas;
  }

  const getListMaterias=()=>{
    return materias;
  }

  const getMateriasEstudiante=()=>{
    return clientPlan.materias;
  }


  return (
    <ClientPlanContext.Provider
      value={{
        crearUsuario,
        user,
        setUser,
        clientPlan,
        divisaConversion,
        setDivisaConversion,
        setClientPlan,
        inicializarClientPlan,
        agregarMateria,
        eliminarMateria,
        eliminarMateriasEstudiante,
        estableceTipoPrograma,
        establecerPrograma,
        getListProgramas,
        getListMaterias,
        updateArrayMaterias,
        getMateriasEstudiante,
      }}
    >
      {children}
    </ClientPlanContext.Provider>
  );
};
