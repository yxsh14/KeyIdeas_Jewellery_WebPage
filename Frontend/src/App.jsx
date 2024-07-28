import Header from "./Layout/Header/Header.jsx"
import Footer from "./Layout/Footer/Footer.jsx";
import Hero from "./Layout/Hero/Hero";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <Hero className="flex-grow" />
      <Footer />
    </div>
  );
};

export default App;
