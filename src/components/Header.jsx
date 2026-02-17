export default function Header() {
  const headerBtn = ["button 1", "button 2", "button 3"];

  return (
    <div>
      <div className="w-full flex flex-row justify-end gap-6 px-10 bg-amber-200/20 h-16 items-center">
        {" "}
        {headerBtn.map((item, index) => (
          <div
            key={index}
            className="bg-amber-600/20 h-full flex justify-center items-center w-32 hover:bg-amber-600/30"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
