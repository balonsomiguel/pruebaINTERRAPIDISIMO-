import "../App.css";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate, Link} from "react-router-dom";
import { useClientPlan } from "../context/ClientPlan";
function StepThree() {

    
    const navegador = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    clientPlan,
    getListMaterias,
    updateArrayMaterias,
    getMateriasEstudiante,
  } = useClientPlan();

  function materiasEstudiante(){
    var bandera = false;
      getMateriasEstudiante().forEach((materiaEstudiante) => {
          getListMaterias().forEach((materia) => {
            if((document.getElementById('check'+materia.codMateria)) != null){
              if(materia.nombre !== materiaEstudiante){
                if(!((document.getElementById('check'+materia.codMateria)).disabled)){
                  (document.getElementById('check'+materia.codMateria)).checked=false;
                }
              }
              else{
                (document.getElementById('check'+materia.codMateria)).checked=true;
              }
            }
          });
      });
    return getMateriasEstudiante().length;
  }


  useEffect(() => {
    var materiasEstudiante = getMateriasEstudiante();
    var arrayListMaterias = getListMaterias();
    arrayListMaterias.map((materia) => {
      if(getMateriasEstudiante().length<3){
          materiasEstudiante.map((materiaEstudiante)=> {
              if(materia.nombre == materiaEstudiante && materia.codMateria<5){
                (document.getElementById('check'+materia.codMateria)).disabled=true;
              }
          })
      }
      else{
        if(materia.codMateria<5){// esta primera página de materias solo tiene 5 para seleccionar
          (document.getElementById('check'+materia.codMateria)).disabled=true;
        }
      }
  })
}, [clientPlan]);

  function toggleMateria(codMateria){
    updateArrayMaterias(codMateria);
  }
  
  function llamarNextStep(){
    navegador("/stepthreetwo");
  }

  function llamarGoBack(){
    navegador("/steptwo");
  }

  function nombreProfesor(codMateria){
    var arrayListMaterias = getListMaterias();

    var objMateria = arrayListMaterias.filter(materia => materia.codMateria === codMateria);

    return objMateria[0].profesor;
  }

  function nombreMateria(codMateria){
    var arrayListMaterias = getListMaterias();

    var objMateria = arrayListMaterias.filter(materia => materia.codMateria === codMateria);

    return objMateria[0].nombre;
  }

  function valorMateria(nombre,tipo_programa){
    var arrayListMaterias = getListMaterias();

    var objMateria = arrayListMaterias.filter(materia => materia.nombre === nombre);

    if(tipo_programa === 1){
        return '*'+objMateria[0].costM+' Créditos';
    }
    else{
        return '*'+objMateria[0].costY+' Créditos';
    }

  }


  return (
    <div className="box">
      {/* <div className="group"> */}
        <div className="overlap">
        <div className="group-wrapper">
            <div className="div">
              <div className="group-copy">
                <div className="group-4">
                  <div className="text-wrapper">REGISTRO</div>
                  <div className="text-wrapper-2">PASO 1</div>
                </div>
                <div className="div-wrapper">
                  <div className="text-wrapper-4">1</div>
                </div>
              </div>
              <div className="group-2">
                <div className="group-3">
                  <div className="text-wrapper">PROGRAMAS</div>
                  <div className="text-wrapper-2">PASO 2</div>
                </div>
                <div className="div-wrapper">
                  <div className="text-wrapper-4">2</div>
                </div>
              </div>
              <div className="group-copy-2">
                <div className="group-5">
                  <div className="text-wrapper">MATERIAS</div>
                  <div className="text-wrapper-2">PASO 3</div>
                </div>
                <div className="overlap-group">
                  <div className="text-wrapper-3">3</div>
                </div>
              </div>
              <div className="group-copy-3">
                <div className="group-6">
                  <div className="text-wrapper">RESUMEN</div>
                  <div className="text-wrapper-2">PASO 4</div>
                </div>
                <div className="div-wrapper">
                  <div className="text-wrapper-4">4</div>
                </div>
              </div>
            </div>
          </div>
        <div className="group-7 forms-steps">
          <h1 style={{margin: "auto"}}>Selección de materias</h1>
          <span>Seleccione las materias a cursar.  {materiasEstudiante()+'/3'} Materias seleccionadas</span>
        </div>
        <div className="group-8-three" id="checkGroup">
          <div className="group-9-three">
            <div className="text-wrapper-6-three">{valorMateria(nombreMateria(0), clientPlan.tipo_programa)}</div>
            <div className="group-10-three">
              {/* <div className="path-wrapper">
                <img className="path" alt="Path" src="path.svg" />
              </div> */}
              <label className="path-wrapper" >
                    <input
                      type="checkbox"
                      id="check0"
                      onChange={()=>toggleMateria(0)}
                    />
                    <div className="path" />
                  </label>
            </div>
            <div className="group-11-three">
              <div className="text-wrapper-7-three">{nombreMateria(0)}</div>
              <div className="text-wrapper-8-three">{nombreProfesor(0)}</div>
            </div>
          </div>
          <div className="group-copy-3-three">
            <div className="text-wrapper-6-three">{valorMateria(nombreMateria(1), clientPlan.tipo_programa)}</div>
            <div className="group-10-three">
              <label className="path-wrapper">
                    <input
                      type="checkbox"
                      id="check1"
                      onChange={()=>toggleMateria(1)}
                    />
                    <div className="path" />
                  </label>
            </div>
            <div className="group-11-three">
              <div className="text-wrapper-7-three">{nombreMateria(1)}</div>
              <div className="text-wrapper-8-three">{nombreProfesor(1)}</div>
            </div>
          </div>
          <div className="group-copy-4-three">
            <div className="text-wrapper-6-three">{valorMateria(nombreMateria(2), clientPlan.tipo_programa)}</div>
            <div className="group-10-three">
              <label className="path-wrapper">
                    <input
                      type="checkbox"
                      id="check2"
                      onChange={()=>toggleMateria(2)}
                    />
                    <div className="path" />
                  </label>
            </div>
            <div className="group-11-three">
              <div className="text-wrapper-7-three">{nombreMateria(2)}</div>
              <div className="text-wrapper-8-three">{nombreProfesor(2)}</div>
            </div>
          </div>
          <div className="group-copy-5-three">
            <div className="text-wrapper-6-three">{valorMateria(nombreMateria(3), clientPlan.tipo_programa, 'Jhon Jairo')}</div>
            <div className="group-10-three">
              <label className="path-wrapper">
                    <input
                      type="checkbox"
                      id="check3"
                      onChange={()=>toggleMateria(3)}
                    />
                    <div className="path" />
                  </label>
            </div>
            <div className="group-11-three">
              <div className="text-wrapper-7-three">{nombreMateria(3)}</div>
              <div className="text-wrapper-8-three">{nombreProfesor(3)}</div>
            </div>
          </div>
          <div className="group-copy-6-three">
            <div className="text-wrapper-6-three">{valorMateria(nombreMateria(4), clientPlan.tipo_programa, 'Jhon Jairo')}</div>
            <div className="group-10-three">
              <label className="path-wrapper">
                    <input
                      type="checkbox"
                      id="check4"
                      onChange={()=>toggleMateria(4)}
                    />
                    <div className="path" />
                  </label>
            </div>
            <div className="group-11-three">
              <div className="text-wrapper-7-three">{nombreMateria(4)}</div>
              <div className="text-wrapper-8-three">{nombreProfesor(4)}</div>
            </div>
          </div>
        </div>
        <div className="group-16">
            <div className="group-17">
            <button className="overlap-group-4" onClick={llamarNextStep}>
                <div className="text-wrapper-10">Siguiente</div>
              </button>
            </div>
            
          {/* <button  onClick={llamarGoBack}> */}
            <button className="text-wrapper-11 button-go-back"  onClick={llamarGoBack}>
                {/* <button onClick={llamarGoBack}> */}
                    
                Volver</button>
            {/* </button> */}
          </div>
      </div>
    {/* </div> */}
  </div>
  );
}
export default StepThree;
