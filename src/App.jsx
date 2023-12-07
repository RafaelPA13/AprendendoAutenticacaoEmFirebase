import { Routes, Route } from "react-router-dom";
import Entrar from "./components/Entrar";
import Registrar from "./components/Registrar";
import Home from "./components/Home";
import { AuthContextProvider } from "./context/AuthContext";
import ProtegerRotas from "./components/ProtegerRotas";

function App() {
  return (
    <>
      <AuthContextProvider
        filho={
          <Routes>
            <Route path="/" element={<Entrar />} />
            <Route path="/registro" element={<Registrar />} />
            <Route
              path="/home"
              element={<ProtegerRotas filho={<Home/>}></ProtegerRotas>}
            />
          </Routes>
        }
      ></AuthContextProvider>
    </>
  );
}
export default App;
