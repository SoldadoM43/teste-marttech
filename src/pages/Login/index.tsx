import "./styles.css";
import { Container } from "./styles";

import Logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <>
            <Container>
                <h1 className="titulo">Login</h1>
                <div className="img">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="inputs">
                    <input type="text" placeholder="Nome Completo"/><br />
                    <input type="text" placeholder="CPF"/> 
                </div>
                <div className="btn">
                    <Link to="/home">
                        <button type="submit">Acessar</button>
                    </Link>
                    <p className="link">Não tem uma conta? <Link to="/cadastro" className="Link">Cadastre-se</Link></p>
                </div>
            </Container>
        </>
    );
}