import "./contact.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import ContactSvg from "./ContactSvg";

const listVariant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const ref = useRef();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("sendEmail");
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_ID,
        }
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
        },
        (error) => {
          console.log(error);
          setError(true);
          setSuccess(false);
        }
      );
  };

  const isInView = useInView(ref, { margin: "-200px" });

  return (
      <div className="contact" ref={ref} onSubmit={sendEmail}>
        <div className="cSection"><ContactSvg/></div>
        <div className="cSection">
          <motion.form
              ref={form}
              variants={listVariant}
              animate={isInView ? "animate" : "initial"}
          >
            <motion.h1 variants={listVariant} className="cTitle">
              Байланыста болайық
            </motion.h1>
            <motion.div variants={listVariant} className="formItem">
              <label>Атыңыз</label>
              <input type="text" name="name" placeholder="Айбасов Мирас"/>
            </motion.div>
            <motion.div variants={listVariant} className="formItem">
              <label>Email</label>
              <input
                  type="email"
                  name="email"
                  placeholder="miras@gmail.com"
              />
            </motion.div>
            <motion.div variants={listVariant} className="formItem">
              <label>Хабарлама</label>
              <textarea
                  rows={10}
                  name="message"
                  placeholder="Хабарламаңызды жазыңыз..."
              ></textarea>
            </motion.div>
            <motion.button variants={listVariant} className="formButton">
              Жіберу
            </motion.button>
            {success && <span>Хабарламаңыз жіберілді!</span>}
            {error && <span>Бір жақтан қате кетті!</span>}
          </motion.form>
        </div>
      </div>
  );
};

export default Contact;
