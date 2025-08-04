import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 px-4 py-6">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
