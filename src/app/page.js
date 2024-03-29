// Home.js
import Header from "./Header";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import Nav from "./Navbar/Navbar";
import Head from 'next/head';
export default function Home() {
  return (
    <div className="flex flex-col h-full bg-[#110A01]">
                  <Head>
                <title>New Page Title</title>
            </Head>
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