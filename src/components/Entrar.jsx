import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Entrar() {
  const {logar} = UserAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (e)=>{
    e.preventDefault()
    setError('')
    try {
      await logar(email, password)
      navigate('/home')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  }

  return (
    <div className="body">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Entrar</h1>
        <input type="email" placeholder="Email:" className="input" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder="Senha:" className="input" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button>Entrar</button>
        <div className="link">
          <p>Você ainda não é registrado?</p>
          <a href="/registro">Registre-se</a>
        </div>
      </form>
    </div>
  );
}
export default Entrar;
