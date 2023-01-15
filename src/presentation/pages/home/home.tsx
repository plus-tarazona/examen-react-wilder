import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import './home.scss';

export default function Home(){
    return (
        <div className="home" data-testid="home">
            <Header/>
            <Menu/>
            <main data-testid="main">
                aqui el contenido
            </main>
            <Footer/>
        </div>
    )
}