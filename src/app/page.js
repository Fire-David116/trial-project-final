// Home.js
import Header from "@/components/Header/Header";
import Dashboard from "@/components/Pages/Dashboard";
import Nav from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
export default function Home() {
  return (
    <div className="flex flex-col h-full bg-[#110A01]">
      <Nav />
      <div className="flex-1 bg-[#110A01]">
        <Dashboard />
      </div>
      <div className="mt-[50px]">
        <Footer />
      </div>
    </div>
  );
}