

const GradientLine = ({ value }) => {
  return (
    <div className="container relative">
      {/* Arrow */}
      <div className="arrow absolute top-0 left-1/2 w-0 h-0" style={{ marginLeft: "-5px", border: "5px solid transparent" }}></div>

      {/* Gradient line */}
      <div className="line bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 animate-gradient rounded-lg h-2"></div>

      {/* Value */}
      <div className="value absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 py-1 rounded shadow">
        <span className="text-gray-900">{value}</span>
      </div>
    </div>
  );
};
export default GradientLine;
