import { Logo } from "./Logo";

import "./App.css";

export const Header = () => {

    return (
            <div className='header'>
                <Logo />
            <h1>
                This is the header!!
            </h1>
            <div className='nav-items'>
                <ul>
                    <li>AOT</li>
                    <li>SxF</li>
                    <li>COTE</li>
                    <li>MP100</li>
                    <li>PNS2</li>
                </ul>
            </div>
        </div>

    )
}
