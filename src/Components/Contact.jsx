import "./ContactStyle.css"

const Contact = () => {
    return(
        <div className="contact-us" id="contact">
            <h1>Contact Us</h1>
            <div className="contact-form"
                data-aos="zoom-in-up"
                data-aos-duration="3000">
                <h2>Leave us a Message</h2>
                <form action="" className="form-fields">
                    <input type="text" placeholder="Name" className="input-field" />
                    <input type="email" placeholder="Email" className="input-field" />
                    <input type="text" placeholder="Subject" className="input-field" /> 
                    <textarea name="" id="" cols="30" rows="10" placeholder="Message" className="input-field"></textarea>
                    <button type="submit" className="btn">Send</button>
                </form>
            </div>
        </div>
    )
}
export default Contact