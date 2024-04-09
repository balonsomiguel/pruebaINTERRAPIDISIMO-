import "../App.css";
import thankyou from "../assets/thankyou.PNG";
import { useForm } from "react-hook-form";
import { useNavigate, Link} from "react-router-dom";
import { useClientPlan } from "../context/ClientPlan";
function StepFive() {


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
          <div className="group-7 forms-steps" style={{textAlign:"center"}}>
            <img src={thankyou} alt="gracias"/>
            <h1>Registro de programa y materias realizado!</h1>
            <p>Diríjase a la pantalla de ingreso.</p>
            </div>
      </div>
  </div>
  );
}
export default StepFive;
