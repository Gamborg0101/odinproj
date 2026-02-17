export default function Information() {
  return (
    <div>
      <div>
        <form action="">
          <div className="w-full">
            <h1 className="text-2xl flex items-center justify-center">
              General information
            </h1>

            <form
              action=""
              className="flex flex-col bg-blue-50 items-center justify-center p-4"
            >
              <input
                type="text"
                id="firstname"
                placeholder="First name"
                className="w-full p-4 bg-blue-100 rounded-2xl"
              />

              <input
                type="text"
                id="lastname"
                placeholder="Last Name"
                className="w-full p-4"
              />

              <input
                type="text"
                id="email"
                placeholder="Email"
                className="w-full p-4"
              />

              <input
                type="text"
                id="phone"
                placeholder="Phone"
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
