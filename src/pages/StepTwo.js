import "../App.css";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate, Link} from "react-router-dom";
import { useClientPlan } from "../context/ClientPlan";
function StepTwo() {

    
    const navegador = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    clientPlan,
    setClientPlan,
    estableceTipoPrograma,
    establecerPrograma,
    getListProgramas,
    eliminarMateriasEstudiante,
  } = useClientPlan();

useEffect(() => {
  eliminarMateriasEstudiante();
}, []);

  function toggleTipoPrograma(event) {
    estableceTipoPrograma();
  }

  function programaSelected(value) {
    establecerPrograma(value);
  }


  function llamarNextStep(){
    navegador("/stepthree");
  }
  
  function llamarGoBack(){
    navegador("/stepone");
  }

  function valorPrograma(nombre,tipo_programa){
    var arrayListPrograma = getListProgramas();

    var objPrograma = arrayListPrograma.filter(programa => programa.nombre === nombre);

    if(tipo_programa === 1){
        return '$'+objPrograma[0].costM+'/mo';
    }
    else{
        return '$'+objPrograma[0].costY+'/yr';
    }

  }

  return (
    <div className="box">
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
              <div className="overlap-group">
                <div className="text-wrapper-3">2</div>
              </div>
            </div>
            <div className="group-copy-2">
              <div className="group-5">
                <div className="text-wrapper">MATERIAS</div>
                <div className="text-wrapper-2">PASO 3</div>
              </div>
              <div className="div-wrapper">
                <div className="text-wrapper-4">3</div>
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
        <div className="group-7">
          <div className="group-8 forms-steps">
            <h1>Selección de programa</h1>
            <span>Seleccione programa de pregrado/maestría.</span>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-2">
              <div className="group-9">
                <div
                  className="text-wrapper-6"
                  style={{
                    color:
                      clientPlan.tipo_programa === 2
                        ? "#808080"
                        : "var(--denim)",
                  }}
                >
                  Pregrado
                </div>
                <div
                  className="text-wrapper-7"
                  style={{
                    color:
                      clientPlan.tipo_programa === 1
                        ? "#808080"
                        : "var(--denim)",
                  }}
                >
                  Maestría
                </div>
                <div className="overlap-group-wrapper">
                  <label className="oval-wrapper">
                    <input
                      type="checkbox"
                      onChange={toggleTipoPrograma}
                    />
                    <div className="oval" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="group-10">
            <button onClick={()=>programaSelected('Ingeniería')}>
              <div
                className="group-copy-1"
                style={{
                  borderColor: clientPlan.programa === 'Ingeniería' ? "#483eff" : "",
                }}
              >
                <div className="group-12">
                  <div className="text-wrapper-8">Ingeniería</div>
                </div>
                <div className="group-13">
                  <div className="shape-wrapper">
                    <div className="shape" />
                  </div>
                </div>
              </div>
            </button>
            <button onClick={()=>programaSelected('Medicina')}>
              <div
                className="group-copy-4"
                style={{
                  borderColor: clientPlan.programa === 'Medicina' ? "#483eff" : "",
                }}
              >
                <div className="group-14">
                  <div className="text-wrapper-8">Medicina</div>
                </div>
                <div className="group-13">
                  <div className="overlap-group-2">
                    <div className="shape-2" />
                  </div>
                </div>
              </div>
            </button>
            <button onClick={()=>programaSelected('Artes')}>
              <div
                className="group-copy-5"
                style={{
                  borderColor: clientPlan.programa === 'Artes' ? "#483eff" : "",
                }}
              >
                <div className="group-15">
                  <div className="text-wrapper-8">Artes</div>
                </div>
                <div className="group-13">
                  <div className="overlap-group-3">
                    <div className="shape-3" />
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="group-16">
          <div className="group-17">
            <button className="overlap-group-4" onClick={llamarNextStep}>
              <div className="text-wrapper-10">Siguiente</div>
            </button>
          </div>
          <button className="text-wrapper-11 button-go-back"  onClick={llamarGoBack}>Volver</button>
        </div>
      </div>
    </div>
  );
}
export default StepTwo;
