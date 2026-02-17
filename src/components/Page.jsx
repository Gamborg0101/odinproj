export default function Page({ name, placeholder, type, value, onChange }) {
  return (
    <div className="w-full">
      <input
        name={name}
        type={type}
        id={placeholder}
        placeholder={placeholder}
        value={value}
        className="w-full p-4 bg-blue-100 rounded-2xl"
        onChange={onChange}
      />
      <label htmlFor={placeholder} />
    </div>
  );
}
