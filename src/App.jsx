import "./App.css";
import { useState } from "react";
import Balance from "./components/balance";
import BillInput from "./components/billInput";
import ResetButton from "./components/resetButton";
import ServiceInput from "./components/serviceInput";

export default function App() {
  const [bill, setBill] = useState("");
  const [Percentage1, setPercentage1] = useState(0);
  const [Percentage2, setPercentage2] = useState(0);

  const tipPercent = bill * ((Percentage1 + Percentage2) / 200);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const reset = () => {
    setBill(0);
    setPercentage1(0);
    setPercentage2(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Tip Calculator</h1>
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <BillInput bill={bill} setBill={setBill} onSubmitted={handleSubmit} />

        <ServiceInput
          onSubmitted={handleSubmit}
          percentage={Percentage1}
          onSelect={setPercentage1}
        >
          <label className="text-gray-700 mb-2">
            How did you like the service?
          </label>
          
        </ServiceInput>

        <ServiceInput
          onSubmitted={handleSubmit}
          percentage={Percentage2}
          onSelect={setPercentage2}
        >
          <label className="text-gray-700 mb-2">
            How did your friend like the service?
          </label>
         
        </ServiceInput>

        {bill > 0 && 
        <Balance bill={bill} tipPercent={tipPercent} />
        }

        <ResetButton reset={reset} />
      </div>
    </div>
  );
}
