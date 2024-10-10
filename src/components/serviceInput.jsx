// import { useState } from "react";
/* eslint-disable react/prop-types */
export default function ServiceInput({onSubmitted, percentage, onSelect, children}) {
  // const [servicePercent, setServicePercent] = useState(0);
  function handlingSubmit(e) {
    e.preventDefault();
    if (onSubmitted) {
      onSubmitted()
    }
  }
  return (
    <div className="mb-4">
      <form onSubmit={handlingSubmit} className="space-y-2">
        {children}
        &nbsp; &nbsp;
        <select
          className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
          value={percentage}
          onChange={(e) => onSelect(Number(e.target.value))}
        >
          <option value={0}>Dissatisfied (0%)</option>
          <option value={5}>It was okay (5%)</option>
          <option value={10}>It was good (10%)</option>
          <option value={20}>Absolutely amazing! (20%)</option>
        </select>
      </form>
    </div>
  );
}
