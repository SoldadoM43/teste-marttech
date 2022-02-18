import axios from "axios";
import React, { useEffect, useState } from "react";

import "./styles.css";
import { Container } from "./styles";

import Logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";

export default function Cadastro() {
    const [estados, setEstados] = useState([]);
    const [campos, setCampos] = useState({
        Nome: '',
        Idade: 0,
        estado: '0',
    });
    function handleInputChange(event: { target: { name: string | number; value: any; }; }){    // eslint-disable-next-line no-const-assign
        const campos = event.target.value;
        setCampos(campos);
    }

    useEffect(() => {
        axios.get('http://localhost:3030/estados').then(response => {
            setEstados(response.data);
        })
    }, []);
    
    function handleFormSubmit(event: { preventDefault: () => void; }){
        event.preventDefault();
        console.log(campos);
    }
    return (
        <>
            <Container>
                <h1 className="titulo">Cadastre-se</h1>
                <div className="img">
                    <img src={Logo} alt="logo" />
                </div>
                <form onSubmit={handleFormSubmit}>
                <div className="inputs">
                    <input type="text" name="nome" id="nome" placeholder="Nome Completo" onChange={handleInputChange} /><br />
                    <input type="text" name="cpf" id="cpf" placeholder="CPF" onChange={handleInputChange} />  <br />
                    <input type="email" name="email" id="email" placeholder="E-mail" onChange={handleInputChange} /><br />
                    <input type="text" name="cidade" id="cidade" placeholder="Cidade" onChange={handleInputChange} /> <br />
                    <input type="text" name="endereco" id="endereco" placeholder="Endereço" onChange={handleInputChange} /> <br />
                    <label>
                        Estado:
                        <select name="estado" id="estado" >
                            <option value="0">Selecione...</option>
                            {estados.map(estado => (<option key={estado} value={estado}>{estado}</option>))}
                        </select>
                    </label>
                </div>
                <div className="btn">
                    <Link to="/">
                        <button type="submit" value="submit">Cadastrar</button>
                    </Link>
                </div>
                </form>
            </Container>
        </>
    );
}