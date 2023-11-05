import ContactForm from "../../components/ContactForm"
import Card from "../../components/card/Card"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "./style.css"
import { Box } from "@mui/material";


const ContactMe = () => {
    return (
        <div className="contact-me">
            <Card>
                <ContactForm></ContactForm>
            </Card>
            <Card>
                <h1>Contact Me</h1>
                <p>Feel free to reach out for collaboration or any inquiries</p>
                <div className="address-sect">
                    <small>email: stevepdettegeorge@gmail.com</small>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: 36,
                        marginTop: 2
                    }}>
                        <Box>
                            <WhatsAppIcon color="primary" sx={{
                                marginTop: 1,
                                paddingRight: 1,
                            }}>
                            </WhatsAppIcon>
                        </Box>

                        <Box sx={{
                            color: "primary",
                            fontSize: 16,
                            paddingLeft: 1,
                            paddingTop: 0.5
                        }}>0726998792</Box>
                    </Box>
                </div>

            </Card>
        </div>
    )
}

export default ContactMe