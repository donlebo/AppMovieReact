import React from "react";
import { Link } from 'react-router-dom'
import "../App.css";

interface IState{}
interface IProps{}

const Navbar:React.FC<IProps> = () => {
    return (
        <>
            <nav>
                <div className="container pippo" style={{'backgroundColor':'black', 'height':'100px'}}>
                    <ul>
                        <li>
                            <Link to={"/home"} style={{'color' : 'white'}}>Movie watchlist</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
};

export default Navbar;