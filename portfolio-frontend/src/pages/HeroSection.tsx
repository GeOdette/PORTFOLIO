
import { Box, Typography, Button } from '@mui/material';
import StandardMargin from './StandardMargin';
import Img1 from "../assets/ge.png"
import FlexBetween from './FlexBetween';
import ImgCard from '../shared/ImgCard';
import { Routes, Route, Link } from 'react-router-dom';
import ServicesImAmProviding from './ServicesImAmProviding';

const HeroSection = () => {
    return (
        <>

            <div className="home">
                <StandardMargin >
                    <FlexBetween>
                        <Box>
                            <Typography variant='h1' whiteSpace={'nowrap'}>Hi, I'm George</Typography>
                            <Typography variant='h1'>Odette</Typography>

                            <Box sx={{ width: '45%' }}>
                                <Typography variant='subtitle1'>
                                    I am a data engineer, bioinformatician, web developer, and data analyst, with experience in analyzing large genomic and proteomic datasets to gain biological insights and a passion for algorithms and statistical analysis in bioinformatics.
                                </Typography>
                                <Box mt={2}>
                                    <Button variant="contained" sx={{
                                        borderRadius: 4,
                                        textTransform: 'capitalize',
                                    }}>Learn more</Button>
                                </Box>
                            </Box>

                        </Box>
                        <Box mt={"-10%"} sx={{
                            position: "absolute",
                            marginX: "36%",

                        }}>
                            < ImgCard img={Img1} height="800px" width="900px" />


                        </Box>



                    </FlexBetween>

                </StandardMargin>
            </div>
        </>
    );
}

export default HeroSection;
