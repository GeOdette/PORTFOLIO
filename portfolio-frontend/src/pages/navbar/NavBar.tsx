import { Box, Button } from "@mui/material"
import FlexBetween from "../FlexBetween"
import StandardMargin from "../StandardMargin"
import Logo from '../Logo';
import "./style.css"

const NarvBar = () => {
    return (
        <nav className="header-container">
            <span className="logo">George</span>
                    <ul className="menu-list">
                        <li>Home</li>
                        <li>About</li>
                        <li>Portflio</li>
                        <li>Contact</li>
                    </ul>

            <div className="hire-me">Hire me</div>

        </nav>
    )
}

export default NarvBar
