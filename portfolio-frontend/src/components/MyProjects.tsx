import { Button, Typography, Box } from "@mui/material"
import ImgCard from "../shared/ImgCard"
import SectionMargin from "./SectionMargins"
import SectionHeading from "./SectionHeading"


const MyProjects = () => {
    return (
        <section>
            <SectionHeading title="My Projects"></SectionHeading>
            <SectionMargin>
                <ImgCard></ImgCard>
                <div className="text-container">
                    <Typography variant="h1" fontSize={26} mb={1.5} fontWeight={700}>
                        Data Engineering: Building Your Data Powerhouse
                    </Typography>
                    <Typography variant="subtitle1">
                        I'm a data engineer and I'll make sure your data is clean, organized, and ready for analysis! Let's power up your insights together.
                    </Typography>
                    <Button variant="text" sx={{
                        textTransform: 'capitalize',
                        marginLeft: '0',

                    }}>
                        <Typography textAlign={'start'}>Read more...</Typography>
                    </Button>

                </div>


            </SectionMargin>

        </section>
    )
}

export default MyProjects
