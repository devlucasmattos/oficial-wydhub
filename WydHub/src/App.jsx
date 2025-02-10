import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ServerCard from "./components/ServerCard";
import ServerDetail from "./components/ServerDetail";
import servers from "./Data";
import "./App.css";
import Footer from "./components/Footer";

const Home = () => (
  <div className="container">
    <h1>WydHub</h1>
    <h2>Encontre o servidor ideal para você!</h2>
    <div className="server-list">
      {servers.map(server => (
        <ServerCard key={server.id} server={server} />
      ))}
    </div>
    <Footer />
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/server/:id" element={<ServerDetail servers={servers} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
