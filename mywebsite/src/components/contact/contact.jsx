import "./contact.scss";
import {useState} from "react";
import emailjs from "emailjs-com";

export default function Contact() {
    const [message,setMessage] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault();
        setMessage(true)
    }

    const sendEmail = (e) =>{
        e.preventDefault();
        setMessage(true)

        emailjs.sendForm('service_hqghjkj', 'template_43gjbbv', e.target, 'user_eutBSIRuZaE3qMXpsqRMd')
            .then((result) => {
            console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    };

    return(
        <div className="contact" id="contact">
            <div className="left">
                <img src="/assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={sendEmail}>
                    <input type="text" placeholder="Email" name="Email" />
                    <input type="text" placeholder="subject" name ="subject"/>
                    <textarea placeholder="Message" name="message"></textarea>
                    <button type="Submit">Send</button>
                    {message && <span>Thank you for reaching out, I will reply ASAP!</span>}
                </form>
            </div>
        </div>
    );
}

