import { Box } from "@mui/material"
import { LinkedIn, Twitter, YouTube } from "@mui/icons-material"
import { Link } from "react-router-dom"
import Logo from "./Logo"
const Footer = () => {
  return (
    <div className="footer">
      <Box p={3} display={'flex'} gap={1} ml={"13%"}>
        <Box mt={5} p={3} display={'flex'} gap={1}>
        <Link to={"https://www.linkedin.com/in/george-odette-445751a8/"}>
          <LinkedIn color="primary" /></Link>
        <Link to={"https://twitter.com/Ge_Odette"}>
          <Twitter color="secondary" />  </Link>
        <Link to={'https://www.youtube.com/channel/UCP6aaFeZEkpwzfo0PcU8BQQ'}>
          <YouTube color="warning" />
          </Link>
        </Box>
        <div className="copyright">
          <small style={{
            color: 'white',
            fontFamily: 'sans-serif',
          }}>&copy; {new Date().getFullYear()} Steve George Odette</small>
        </div>
        <div className="footer-logo">
        <Logo color="#ffffff"></Logo>
        </div>
      </Box>
      
    </div>
  )
}

export default Footer
