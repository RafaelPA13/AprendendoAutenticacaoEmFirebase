import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Registrar() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const {criarUsuario} = UserAuth()

  const navigate = useNavigate()

  const handleSubmit = async (e)=>{
    e.preventDefault()
    setError('')
    try {
      await criarUsuario(email, password)
      navigate('/')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  }
  
  return (
    <div className="body">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Registrar</h1>
        <input type="email" placeholder="Email:" className="input" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder="Senha:" className="input" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleSubmit}>Registrar</button>
        <div className="link">
          <p>Você ainda já é registrado?</p>
          <a href="/">Entre</a>
        </div>
      </form>
    </div>
  );
}
export default Registrar;
