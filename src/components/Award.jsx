// components/Award.jsx
function Award({ title, description }) {
    return (
      <div className="hidden md:block md:absolute w-1/4 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p>{description}</p>
      </div>
    );
  }
  
  export default Award;
  