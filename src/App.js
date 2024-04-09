import logo from "./logo.svg";
import "./App.css";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import StepThree from "./pages/StepThree";
import StepThreeTwo from "./pages/StepThreeTwo";
import StepFour from "./pages/StepFour";
import StepFive from "./pages/StepFive";
import { ClientPlanProvider } from "./context/ClientPlan";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="contenedor">
        <div className="escritorio">
          <ClientPlanProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<StepOne />} />
                <Route path="/stepone" element={<StepOne />} />
                <Route path="/steptwo" element={<StepTwo />} />
                <Route path="/stepthree" element={<StepThree />} />
                <Route path="/stepthreetwo" element={<StepThreeTwo />} />
                <Route path="/stepfour" element={<StepFour />} />
                <Route path="/stepfive" element={<StepFive />} />
              </Routes>
            </BrowserRouter>
          </ClientPlanProvider>
        </div>
      </div>
      
    </div>
  );
}

export default App;

{
  /* <div className="box">
          <div className="group">
            <div className="overlap">
              <div className="group-wrapper">
                <div className="div-wrapper">
                  <div className="div">
                    <div className="group-2">
                      <div className="group-3">
                        <div className="text-wrapper">YOUR INFO</div>
                        <div className="text-wrapper-2">STEP 1</div>
                      </div>
                      <div className="overlap-group">
                        <div className="text-wrapper-3">1</div>
                      </div>
                    </div>
                    <div className="group-copy">
                      <div className="group-4">
                        <div className="text-wrapper">SELECT PLAN</div>
                        <div className="text-wrapper-2">STEP 2</div>
                      </div>
                      <div className="overlap-2">
                        <div className="text-wrapper-4">2</div>
                      </div>
                    </div>
                    <div className="group-copy-2">
                      <div className="group-5">
                        <div className="text-wrapper">ADD-ONS</div>
                        <div className="text-wrapper-2">STEP 3</div>
                      </div>
                      <div className="overlap-2">
                        <div className="text-wrapper-4">3</div>
                      </div>
                    </div>
                    <div className="group-copy-3">
                      <div className="group-6">
                        <div className="text-wrapper">SUMMARY</div>
                        <div className="text-wrapper-2">STEP 4</div>
                      </div>
                      <div className="overlap-2">
                        <div className="text-wrapper-4">4</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group-7">
                <div className="group-8">
                  <div className="text-wrapper-5">Personal info</div>
                  <p className="please-provide-your">Please provide your name, email address, and phone number.</p>
                </div>
                <div className="group-9">
                  <div className="group-10">
                    <div className="group-11">
                      <div className="text-wrapper-6">e.g. Stephen King</div>
                    </div>
                    <div className="text-wrapper-7">Name</div>
                  </div>
                  <div className="group-copy-4">
                    <div className="group-11">
                      <div className="text-wrapper-6">e.g. stephenking@lorem.com</div>
                    </div>
                    <div className="text-wrapper-7">Email Address</div>
                  </div>
                  <div className="group-copy-5">
                    <div className="group-11">
                      <p className="text-wrapper-6">e.g. +1 234 567 890</p>
                    </div>
                    <div className="text-wrapper-7">Phone Number</div>
                  </div>
                </div>
              </div>
              <div className="group-copy-6">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-2">
                    <div className="text-wrapper-8">Next Step</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div> */
}
