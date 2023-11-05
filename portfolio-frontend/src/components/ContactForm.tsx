import { Button } from "@mui/material"

const ContactForm = () => {
    return (
        <form>
            <label htmlFor="">Name*</label>
            <input type="text" placeholder="Enter name" />
            <label htmlFor="email">Your email</label>
            <input type="text" placeholder="Your email address" />
            <label htmlFor="message">Message*</label>
            <textarea name="" id="" cols={10} rows={5} placeholder="Enter your message"></textarea>
            <Button variant="contained" sx={{
                marginTop: 2,
                width: 100,
                backgroundColor: '#000000',
                color: '#FFFFFF',
                '&:hover': {
                    backgroundColor: '#FFFFFF',
                    color: '#000000'
                }
            }}>Submit</Button>

        </form>
    )
}

export default ContactForm