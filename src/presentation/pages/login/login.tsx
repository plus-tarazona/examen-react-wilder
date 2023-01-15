import { Link } from "react-router-dom";
import './login.scss';

export default function Login(){
    return (<div className="login">LOGIN<Link to='home'>Entrar</Link></div>)
}