import "./App.css";
import { Header } from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";


//config driven UI
const Logo = () => {
    return (
        <div className='logo'>
        <img src='https://static.vecteezy.com/system/resources/previews/013/993/061/non_2x/mugiwara-the-illustration-vector.jpg' alt='logo' />
        </div>
    )
}

export default function App() {
    return (
        
        <div>
            <Header />
            <Body />
            <Footer />
        </div>
    );
}
