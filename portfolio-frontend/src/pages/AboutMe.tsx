import { Box, Typography, Button } from "@mui/material"
import SectionHeading from "./SectionHeading"
import ImgCard from "../shared/ImgCard"
import SectionMargin from "./SectionMargins"
import { Link } from 'react-router-dom';

const AboutMe = () => {
    return (
        <>
            <section>
                <Link to="/about">
                    <SectionHeading title="About me" />
                </Link>



                <SectionMargin>
                    <div className="card">
                        <Box display={"flex"} flexDirection={"row"} gap={30}>
                            <Box>
                                <div className="subtitle">
                                    <Typography variant="h4">
                                        Data Engineer, Bioinformatician, Web Developer, and Data Analyst Extraordinaire!
                                    </Typography>
                                </div>
                                <div className="text-paragraph">
                                    <Typography>
                                        Hey there! I’m a jack-of-all-trades in the tech world. By day, I’m a data engineer, bioinformatician, web developer, and data analyst. As a bioinformatician, I get a kick out of diving deep into massive genomic and proteomic datasets to uncover some cool biological insights. I geek out over algorithms like sequence alignment and genome assembly, and my statistical skills help me make sense of all that messy biological data. I’m always on top of the latest bioinformatics tools and techniques, so you can bet I’m always learning something new.
                                    </Typography>
                                </div>
                            </Box>
                            <Box>
                                <ImgCard></ImgCard>
                            </Box>
                        </Box>
                        <Box mt={0}>
                            <Button variant="contained" sx={{
                                borderRadius: 3.5,
                                textTransform: 'capitalize'
                            }}>Contact Me</Button>
                        </Box>


                    </div>
                </SectionMargin>

            </section>
        </>


    )
}

export default AboutMe