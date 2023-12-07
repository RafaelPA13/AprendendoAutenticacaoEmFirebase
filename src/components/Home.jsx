import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function Home() {
  const { user, sair } = UserAuth();

  const navigate = useNavigate();

  const deslogar = async () => {
    try {
      await sair();
      navigate("/");
      console.log('Você saiu')
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="body">
      <div className="form">
        <h1>Email do usuário: {user && user.email}</h1>
        <button onClick={deslogar}>Sair</button>
      </div>
    </div>
  );
}
export default Home;
