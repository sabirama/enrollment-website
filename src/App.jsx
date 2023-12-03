import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.css";
import { mainRoutes } from "./components/routes/mainRoutes";

function App() {
  return (
    <>
      <Header />
      <section id={"main-display"}>
        <Routes>
          {mainRoutes.map((route, index) => {
            return <Route key={index} path={route.path} element={route.element} />;
          })}
        </Routes>
      </section>
      <Footer />
    </>
  );
}

export default App;
