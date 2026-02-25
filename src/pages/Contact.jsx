import { useState } from "react";

export default function Contact () {

const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "72ac623d-bf78-4931-a012-674cbaf288e9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Message Sent Successfully!" : "Error");
  };

    return (
    <div className='contact-page'>
          <form  className='contact-form' onSubmit={onSubmit}>


               <label>
                    Full Name *
                    <input name="name"type="text" placeholder="Enter Your Name" required/>
               </label>

               <label >
                    Phone Number *
                    <input type="tel" id="phone" name="phone" placeholder="123-456-7890" required pattern="[0-9]{3}[0-9]{3}[0-9]{4}" title="Format: 123-456-7890" />
               </label>

               <label>
                    Email Address *
                    <input name="email"type="email" placeholder="Enter Your Email *" required/>
               </label>


               <label>Business Inquiries *
                    <select name="inquiries" id="inquiries" required defaultValue="">
                           <option value="" disabled>--Please choose an option--</option>
                           <option value="Full-Time">I want to hire you Full - Time</option>
                           <option value="Part-Time">I want to hire you Part - Time</option>
                           <option value="Freelance">I want to hire you to Freelance</option>
                    </select>
               </label>

               <div className="message-box">
                    <label >  Message</label>
                    <textarea name="message" id="" placeholder="Please Explain How I can Help You"></textarea>
               </div>


               <button type="submit">Submit</button>
               <p>{result}</p>
           </form>
  </div>
)}
