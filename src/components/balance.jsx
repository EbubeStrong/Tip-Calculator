/* eslint-disable react/prop-types */
export default function Balance({ bill, tipPercent}) {
  return (
    <h2 className="text-xl font-bold text-black-600">
      You will pay {" "}
      <span className="text-xl font-semibold text-green-600">
        ${bill + tipPercent} (${bill} + ${tipPercent} tip)
      </span>
    </h2>
  );
}
