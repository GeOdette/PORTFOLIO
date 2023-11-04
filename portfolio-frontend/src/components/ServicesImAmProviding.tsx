import { Box, Button, Typography } from "@mui/material"
import ImgCard from "../shared/ImgCard"
import SectionHeading from "./SectionHeading"
import StandardMargin from "./StandardMargin"


const ServicesImAmProviding = () => {
    return (
        <section>
            <SectionHeading title="My Services"></SectionHeading>
            <StandardMargin>
                <ImgCard></ImgCard>
                <div className="text-container">
                    <div className="subtitle">
                        <Typography variant="h1" fontSize={26} mb={1.5} fontWeight={700}>
                            Data Engineering: Building Your Data Powerhouse
                        </Typography>
                    </div>
                    <div className="text-paragraph">
                    <Typography variant="subtitle1">
                        I'm a data engineer and I'll make sure your data is clean, organized, and ready for analysis! Let's power up your insights together.
                        </Typography>
                    </div>
                    <Button variant="text" sx={{
                        textTransform: 'capitalize',
                        marginLeft: '0',

                    }}>
                        <Typography textAlign={'start'}>Read more...</Typography>
                    </Button>

                </div>


            </StandardMargin>

        </section>
    )
}

export default ServicesImAmProviding
