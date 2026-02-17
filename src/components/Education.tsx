export default function Education() {
  return (
    <div>
      <div>
        <form action="">
          <div className="w-full mt-10">
            <h1 className="text-2xl flex items-center justify-center">
              Educational Information
            </h1>

            <form
              action=""
              className="flex flex-col bg-blue-50 items-center justify-center p-4"
            >
              <input
                type="text"
                id="institution"
                placeholder="Instution"
                className="w-full p-4 bg-blue-100 rounded-2xl"
              />

              <input
                type="text"
                id="education"
                placeholder="Education / course"
                className="w-full p-4"
              />

              <input
                type="text"
                id="year"
                placeholder="Year"
                className="w-full p-4"
              />

              <button
                type="submit"
                className="bg-amber-700/10 w-full hover:bg-amber-300/50 cursor-pointer  p-4"
              >
                Insert
              </button>
            </form>
          </div>
        </form>
      </div>
    </div>
  );
}
