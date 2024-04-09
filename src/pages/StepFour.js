import "../App.css";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate, Link} from "react-router-dom";
import { useClientPlan } from "../context/ClientPlan";
function StepFour() {

    
    const navegador = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    clientPlan,
    divisaConversion,
    getListMaterias,
    getListProgramas,
  } = useClientPlan();


  function llamarGoBack(){
    navegador("/stepthree");
  }

  function llamarNextStep(){
    navegador("/stepfive");
  }

  function infoPrograma(){
    return(clientPlan.programa+' ('+(clientPlan.tipo_programa===1?'Pregrado':'Maestría')+')');
  }

   function valorPrograma(nombre, tipo_programa){
    var arrayListProgramas = getListProgramas();

    var objPrograma = arrayListProgramas.filter(programa => programa.nombre === nombre);


    if(tipo_programa === 1){
        return '$'+objPrograma[0].costM+'/mo';
    }
    else{
        return '+$'+objPrograma[0].costY+'/yr';
    }

   }

   function valorMateria(nombre,tipo_programa){

    var arrayListMaterias = getListMaterias();

    var objMateria = arrayListMaterias.filter(materia => materia.nombre === nombre);

    if(tipo_programa === 1){
        return objMateria[0]?'+$'+objMateria[0].costM*150+' USD':'';
    }
    else{
        return objMateria[0]?'+$'+objMateria[0].costY*150+' USD':'';
    }

  }

  function calcularTotal(nombre,tipo_programa,moneda){
    var arrayListProgramas = getListProgramas();
    var arrayListMaterias = getListMaterias();
    var acum = 0;

    if(tipo_programa === 1){
      // acum = objPrograma[0].costM;

      (clientPlan.materias).map(materiaEstudiante=> {
          arrayListMaterias.map(materia=>{
              if(materiaEstudiante===materia.nombre){
                  acum = materia.costM + acum;
              }
          })
      })
      if(moneda){
        return '+$'+((acum*150)/divisaConversion.value).toFixed(2)+' EUR';
      }
      return '+$'+(acum*150).toFixed(2)+' USD';
    }
    else{
        (clientPlan.materias).map(materiaEstudiante=> {
            arrayListMaterias.map(materia=>{
                if(materiaEstudiante===materia.nombre){
                    acum = materia.costY + acum;
                }
            })
        })
      if(moneda){
        return '+$'+((acum*150)/divisaConversion.value).toFixed(2)+' EUR';
      }
      return '+$'+(acum*150).toFixed(2)+' USD';
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
                <div className="div-wrapper">
                  <div className="text-wrapper-4">2</div>
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
                <div className="overlap-group">
                  <div className="text-wrapper-3">4</div>
                </div>
              </div>
            </div>
          </div>
          <div className="group-7 forms-steps">
            <h1>Resumen</h1>
            <span>Confirme que se encuentre el programa y materias seleccionadas.</span>
            </div>
          <div className="group-11-four">
            <div className="group-12-four">
              <div className="overlap-group-2-four" style={{height:clientPlan.materias.length*30 + 115 + 'px'}}>
                <div className="group-13-four">
                  <div className="group-14-four">
                    <div className="text-wrapper-8">{clientPlan.programa +' ('+(clientPlan.tipo_programa===1?'Pregrado':'Maestría')+')'}</div>
                    <Link to="/steptwo">
                    <div className="text-wrapper-8-four">Editar (Se borrarán las materias seleccionadas)</div>
                    </Link>
                  </div>
                </div>
                <div className="group-15-four" style={{display:clientPlan.materias.length<1?'none':''}}>
                  <div className="text-wrapper-9-four">{valorMateria(clientPlan.materias[0], clientPlan.tipo_programa)}</div>
                  <div className="text-wrapper-10-four">{clientPlan.materias[0]?clientPlan.materias[0]:''}</div>
                </div>
                <div className="group-copy-2-four" style={{display:clientPlan.materias.length<2?'none':''}}>
                  <div className="text-wrapper-9-four">{valorMateria(clientPlan.materias[1], clientPlan.tipo_programa)}</div>
                  <div className="text-wrapper-10-four">{clientPlan.materias[1]?clientPlan.materias[1]:''}</div>
                </div>
                <div className="group-copy-3-four" style={{display:clientPlan.materias.length<3?'none':''}}>
                  <div className="text-wrapper-9-four">{valorMateria(clientPlan.materias[2], clientPlan.tipo_programa)}</div>
                  <div className="text-wrapper-10-four">{clientPlan.materias[2]?clientPlan.materias[2]:''}</div>
                </div>
                <div className="rectangle" />
              </div>
            </div>
            <div className="group-16-four">
              <div className="text-wrapper-11-four">{calcularTotal(clientPlan.programa,clientPlan.tipo_programa,true)}</div>
              <div className="text-wrapper-10-four">Total {clientPlan.tipo_programa===1?'(pregrado)':'(maestría)'}</div>
            </div>
          </div>
          <div className="group-16">
            <div className="group-17">
              <button className="overlap-group-4-four" onClick={llamarNextStep}>
                <div className="text-wrapper-13-four">Confirmar</div>
              </button>
            </div>
            <button className="text-wrapper-11 button-go-back"  onClick={llamarGoBack}>Volver</button>
          </div>
      </div>
  </div>
  );
}
export default StepFour;
