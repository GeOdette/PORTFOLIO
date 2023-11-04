import { Box } from "@mui/material"
import badge from "../assets/logo.jpg"
import FlexBetween from './FlexBetween';
interface LogoProps {
    color?: string;
}
const Logo = ({ color = "#2222" }: LogoProps) => {
    return (
        <div>
            <FlexBetween gap={1}>
                <img src={badge} alt="" style={{ height: '70px', width: '70px', fontWeight: 700 }} className="logo" />
                <Box sx={{
                    marginTop: '20px',
                }}><small
                    style={{
                        color: color,
                    }}>George</small></Box>
            </FlexBetween>
        </div>
    )
}

export default Logo
