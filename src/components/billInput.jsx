/* eslint-disable react/prop-types */
export default function BillInput({ bill, setBill, onSubmitted }) {

  const handleChange = (e) => {
    const value = Math.abs(Number(e.target.value))
    setBill( value || "")
  }
  return (
    <div>
      <form onSubmit={onSubmitted} className="space-y-2">
        <label className="text-gray-700">How much was the bill?</label>
        &nbsp; &nbsp;
        <input
          type="number"
          placeholder="Bill value"
          // onChange={(e) =>
          //   setBill(Math.abs(Number(e.target.value)))}
          value={bill}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </form>
    </div>
  );
}
