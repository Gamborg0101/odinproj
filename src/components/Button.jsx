export default function Button({ title }) {
  return (
    <div>
      <button
        type="submit"
        className="bg-amber-700/10 w-full hover:bg-amber-300/50 cursor-pointer  p-4"
      >
        {title}
      </button>
    </div>
  );
}
