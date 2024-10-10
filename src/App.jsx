import { useState } from "react";
import Balance from "./components/calculatorTip/balance";
import BillInput from "./components/calculatorTip/billInput";
import ResetButton from "./components/calculatorTip/resetButton";
import ServiceInput from "./components/calculatorTip/serviceInput";

export default function App() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  // const [format, setFormat] = useState("")

  const tipPercent = bill * ((percentage1 + percentage2) / 200);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const reset = () => {
    // setFormat("")
    setBill(0);
    setPercentage1(0);
    setPercentage2(0);
    // setFormat(bill, Percentage1, Percentage2)
  };
  return (
    <>
      <div>
        <BillInput bill={bill} setBill={setBill} onSubmitted={handleSubmit} />
        <br />

        <ServiceInput
          onSubmitted={handleSubmit}
          percentage={percentage1}
          onSelect={setPercentage1}
        >
          <label>How did you like the service?</label>
        </ServiceInput>
        <br />

        <ServiceInput
          onSubmitted={handleSubmit}
          percentage={percentage2}
          onSelect={setPercentage2}
        >
          <label>How did your friend like the service?</label>
        </ServiceInput>
        <Balance bill={bill} tipPercent={tipPercent} />
        <ResetButton reset={reset} />
      </div>
    </>
  );
}
