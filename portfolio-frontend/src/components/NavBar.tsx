import { Box, Button } from "@mui/material"
import FlexBetween from "./FlexBetween"
import StandardMargin from "./StandardMargin"
import Logo from './Logo';

const NarvBar = () => {
    return (
        <div className="header-container">
            <StandardMargin>
                <FlexBetween>
                    <FlexBetween>
                        <Logo/>




                    </FlexBetween>
                    <FlexBetween gap={10}
                        sx={{
                            marginTop: '20px',
                        }}>
                        <Box>Home</Box>
                        <Box>About</Box>
                        <Box>Portflio</Box>
                        <Box>Contact</Box>
                    </FlexBetween>
                    <Box sx={{
                        marginTop: '20px',
                    }}>
                        <Button variant="contained" sx={{
                            borderRadius: 4,
                            textTransform: "capitalize"
                        }}>Hire Me</Button>
                    </Box>
                </FlexBetween>
            </StandardMargin>
        </div>
    )
}

export default NarvBar
