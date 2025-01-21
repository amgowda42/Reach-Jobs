import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";
import { Provider } from "react-redux";
import store

const MainLayout = () => {
  return (
    <>
      <Provider store={}>
        <Navbar />
        <Outlet />
        <Footer />
      </Provider>
      <ToastContainer />
    </>
  );
};

export default MainLayout;
