// Home.js
import Header from "./Header";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import Nav from "./Navbar/Navbar";
export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-[#110A01]">
      <Nav />
      <div className="flex-1 bg-[#110A01]">
        <Dashboard />
      </div>
      <Footer />
    </div>
  );
}