import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="w-full flex  bg-black text-white">
      {/* <div className="w-[20%] min-h-screen relative"> */}
          <Sidebar />
          
      {/* </div> */}


      <div className="w-full flex flex-col">
        <Header />
        <main className="w-full flex-1 px-4 py-6 ">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
