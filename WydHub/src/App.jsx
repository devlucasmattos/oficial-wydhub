import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServerDetail from "./components/ServerDetail";
import Plans from "./pages/Plans"; // Certifique-se de que Plans está importado
import servers from "./Data";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/server/:id" element={<ServerDetail servers={servers} />} />
        <Route path="/plans" element={<Plans />} /> {/* Rota corrigida */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
