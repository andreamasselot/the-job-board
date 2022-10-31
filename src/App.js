import "./App.css";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="top-header">
        <Header name={"The Job Board"} />
      </div>
      <div className="container">
        <Jobs />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;