import { Box, Typography, Button, styled } from "@mui/material"
import SectionHeading from "./SectionHeading"
import ImgCard from "../shared/ImgCard"
import SectionMargin from "./SectionMargins"
import FlexBetween from "./FlexBetween"
import Underline from "../shared/Underline"
import { Route, Routes } from "react-router-dom"
import { Link } from 'react-router-dom';
import { LinkedIn, Twitter, YouTube } from "@mui/icons-material"
import bgImg from "../assets/ge.png"

const AboutBox1 = styled(Box)({
    marginLeft: 60,
    // marginTop: -10,
})

const About = () => {
    return (
        <section>

            <div className="about-me-heading">

                <SectionHeading title="About me"></SectionHeading>
            </div>

            <Box display={"flex"} flexDirection={"row"} textAlign={'start'}>
                <AboutBox1>
                    <ImgCard img={bgImg}></ImgCard>
                </AboutBox1>
                <Box pt={6} height={300} width={700} marginTop={13} marginLeft={60}>
                    <Typography variant="h4" p={1} fontWeight={400} fontFamily={'Poppins'}>
                        Designing With Passion While Exploring The World
                    </Typography>
                    <Typography variant="subtitle2" p={2} fontSize={18} fontFamily={'sans-serif'}>
                        Hey there! I’m a jack-of-all-trades in the tech world. By day, I’m a data engineer, bioinformatician, web developer, and data analyst. As a bioinformatician, I get a kick out of diving deep into massive genomic and proteomic datasets to uncover some cool biological insights. I geek out over algorithms like sequence alignment and genome assembly, and my statistical skills help me make sense of all that messy biological data. I’m always on top of the latest bioinformatics tools and techniques, so you can bet I’m always learning something new.
                    </Typography>
                    <Typography marginLeft={2}>
                        Let’s talk with me.
                    </Typography>
                    <Typography fontWeight={700} pt={3} marginLeft={2}>steveodettegeorge@gmail.com</Typography>
                    <Box p={3} display={'flex'} gap={1}>
                        <Link to={"https://www.linkedin.com/in/george-odette-445751a8/"}>
                            <LinkedIn color="primary" /></Link>
                        <Link to={"https://twitter.com/Ge_Odette"}>
                            <Twitter color="secondary" />  </Link>
                        <Link to={'https://www.youtube.com/channel/UCP6aaFeZEkpwzfo0PcU8BQQ'}>
                            <YouTube color="warning" />
                        </Link>

                    </Box>
                </Box>

            </Box>

        </section>
    )
}

export default About