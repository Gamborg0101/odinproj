export default function Page({ placeholder, type }) {
  return (
    <div className="w-full">
      <input
        type={type}
        id={placeholder}
        placeholder={placeholder}
        className="w-full p-4 bg-blue-100 rounded-2xl"
      />
      <label htmlFor={placeholder} />
    </div>
  );
}
