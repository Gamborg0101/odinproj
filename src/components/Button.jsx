export default function Button({ title, submitFunction }) {
  return (
    <div>
      <button
        type={submitFunction}
        className="bg-amber-700/10 w-full hover:bg-amber-300/50 cursor-pointer  p-4"
      >
        {title}
      </button>
    </div>
  );
}
