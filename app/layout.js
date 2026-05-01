
import "./globals.css";
import "./body.css"
// import "./fonts.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "vimal's portfolio",
  description: "vimal's personal portfolio website built with next.js and tailwind css",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="">

        <div className="min-h-screen w-full relative background-patten-and-color-outer">
          <div className="absolute inset-0 z-[-1] background-patten-and-color"/>
        <Navbar />
        {children}
        <Footer />
        </div>

        {/* <div className="fixed inset-0 z-[-1] overflow-hidden">
          <div className="absolute inset-0 transition-all duration-2000 ease-linear hero-section-background-level-1"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute rounded-full hero-section-background-level-2" >
            </div><div className="absolute rounded-full hero-section-background-level-3"></div>
          </div>
          <div className="absolute inset-0 opacity-3 hero-section-background-level-4">
          </div>
        </div> */}


      </body>
      {/* <body className="min-h-full flex flex-col h-full w-full bg-linear-to-l from-purple-400 via-violet-400 to-indigo-700">{children}</body> */}
    </html>
  );
}
