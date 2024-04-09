import "../App.css";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate, Link} from "react-router-dom";
import { useClientPlan } from "../context/ClientPlan"
function StepOne() {

    const navegador = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const { crearUsuario } = useClientPlan();

    const eventoSubmit = async (values) => {
        await crearUsuario(values);
        navegador("/steptwo");
      };
    
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
                <div className="overlap-group">
                  <div className="text-wrapper-3">1</div>
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
                <div className="div-wrapper">
                  <div className="text-wrapper-4">4</div>
                </div>
              </div>
            </div>
          </div>
        <div className="group-7">
        <div className="forms-steps validate-form">
      <div className="form-body">
        <div className="row">
          <div className="form-holder">
            <div className="form-content">
              <div className="form-items">
                {/* <div> */}
                  <h1
                      style={{margin: "auto"}}>Registro</h1>
                  <span>Por favor ingrese sus datos personales, correo y asigne una contraseña para realizar el registro.</span>
                <form
                  className="requires-validation"
                  onSubmit={handleSubmit(eventoSubmit)}
                >
                    <br />
                  <div>
                    <h4
                      style={{margin: "auto"}}>Nombre Completo</h4>
                    <input
                      className="form-control text-wrapper-6-one"
                      type="text"
                      placeholder="ejemplo: Nombre1 Nombre2 Apellido1 Apellido2"
                      id="nombre"
                      {...register("nombre", { required: true })}
                    />
                  </div>
                    <br />
                  <div>
                    <h4
                      style={{margin: "auto"}}>Identificación</h4>
                    <input
                      className="form-control text-wrapper-6-one"
                      type="text"
                      placeholder="e.g. 1024578425"
                      id="idEstudiante"
                      {...register("idEstudiante", { required: true })}
                    />
                  </div>
                  <br />
                  <div className="col-md-12">
                    <h4
                      style={{margin: "auto"}}>Número de Contacto</h4>
                    <input
                      className="form-control text-wrapper-6-one"
                      type="text"
                      id="numeroContacto"
                      {...register("numeroContacto", { required: true })}
                      placeholder="e.g. +57 3xx xxx xxx"
                    />
                  </div>
                  <br />
                  <div className="col-md-12">
                    <h4
                      style={{margin: "auto"}}>Correo Electrónico</h4>
                    <input
                      className="form-control text-wrapper-6-one"
                      type="correo"
                      id="coreo"
                      {...register("correo", { required: true })}
                      placeholder="e.g. nombre1apellido1@correo.com"
                    />
                  </div>
                  <br />
                  <div className="col-md-12">
                    <h4
                      style={{margin: "auto"}}>Contraseña</h4>
                    <input
                      className="form-control text-wrapper-6-one"
                      type="password"
                      id="clave"
                      {...register("clave", { required: true })}
                      placeholder="e.g. +57 3xx xxx xxx"
                    />
                  </div>
                  <div className="form-button mt-3">
                      <button className="overlap-group-2-one" type="submit" style={{cursor: "pointer"}}>
                <div className="text-wrapper-10">Next Step</div>
              </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
      </div>
      );
    }
    export default StepOne;
    