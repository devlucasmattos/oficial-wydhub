import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServerDetail from "./pages/ServerDetail";
import Plans from "./pages/Plans";
import NotFound from "./pages/NotFound";
import servers from "./Data";
import Footer from "./components/Footer";
import Formulario from "./pages/Formulario";
import TabbedContent from "./components/TabbedContent";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/server/:id" element={<ServerDetail servers={servers} />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
