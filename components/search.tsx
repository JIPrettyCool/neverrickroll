export default function Search() {
    return (

<div className="bg-gradient-to-r from-blue-700 to-green-500 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-blue-300 py-2 font-bold mb-2">
                Rick Roll Checker
              </label>
              <input
                className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                id="rickrollchecker"
                type="text"
                placeholder="https://youve-been.rickrolled"
              />
            </div>
            <div className="flex items-center justify-between pt-4">
              <button
                className="bg-gradient-to-r from-blue-800 to-green-500 hover:from-yellow-500 hover:to-red-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="button"
              >
                Check Now!
              </button>
            </div>
            </div>

            
);
}