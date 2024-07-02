import { Link } from "react-router-dom";
const NotFoundpage = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-96">
      <i className="fas fa-exclamation-triangle text-yellow-400 fa-4x mb-4"></i>
      <h1 className="text-6xl font-bold mb-4 text-red-500">404 Not Found</h1>
      <p className="text-xl mb-5 text-orange-500">This page does not exist</p>
      <Link
        href="/"
        className="text-white bg-emerald-800 hover:bg-indigo-700 rounded-md px-3 py-2 mt-4"
      >
        Go Back
      </Link>
    </section>
  );
}

export default NotFoundpage