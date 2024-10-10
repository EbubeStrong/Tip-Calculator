/* eslint-disable react/prop-types */

export default function ResetButton({ reset }) {
  return <button onClick={reset}
      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none"
  >Reset</button>;
}
