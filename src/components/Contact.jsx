import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import "./Contact.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const firstName = form.firstName.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const permission = form.permission.checked;

    if (!firstName || !email || !message) {
      alert("Please complete all required fields.");
      return;
    }

    if (!permission) {
      alert(
        "Please allow me to contact you regarding your message."
      );
      return;
    }

    /*
      Frontend validation is complete.

      This currently does not send an email.
      Connect the form to Formspree, Web3Forms,
      EmailJS, or your own backend when you want
      real message delivery.
    */

    setSubmitted(true);

    form.reset();

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="contact">

      <div className="section-container contact-wrapper">

        {/* =================================================
            CONTACT INFORMATION
        ================================================= */}

        <motion.div
          className="contact-title"
          initial={{
            opacity: 0,
            x: -40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="section-tag">
            GET IN TOUCH
          </span>

          <h2>
            Let's connect
            <br />
            <strong>and build together.</strong>
          </h2>

          <p>
            I'm open to DevOps internships, entry-level
            opportunities, technical projects and
            collaboration. Feel free to reach out.
          </p>


          {/* CONTACT DETAILS */}

          <div className="contact-details">

            <a
              href="mailto:ravalvinayaka832@gmail.com"
              className="contact-detail"
            >
              <span className="contact-detail-icon">
                <Mail size={16} />
              </span>

              <span>
                ravalvinayaka832@gmail.com
              </span>
            </a>


            <div className="contact-detail">
              <span className="contact-detail-icon">
                <MapPin size={16} />
              </span>

              <span>
                Karnataka, India
              </span>
            </div>

          </div>
        </motion.div>


        {/* =================================================
            CONTACT FORM
        ================================================= */}

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{
            opacity: 0,
            x: 40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          {/* SUCCESS MESSAGE */}

          {submitted && (
            <motion.div
              className="contact-success"
              initial={{
                opacity: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              role="status"
            >
              <CheckCircle2 size={18} />

              <span>
                Thanks! Your message has been submitted.
              </span>
            </motion.div>
          )}


          {/* =================================================
              NAME
          ================================================= */}

          <div className="form-row">

            <div className="form-field">
              <label htmlFor="firstName">
                First Name
              </label>

              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First Name"
                autoComplete="given-name"
                required
              />
            </div>


            <div className="form-field">
              <label htmlFor="lastName">
                Last Name
              </label>

              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last Name"
                autoComplete="family-name"
              />
            </div>

          </div>


          {/* =================================================
              EMAIL
          ================================================= */}

          <div className="form-field">
            <label htmlFor="email">
              Email Address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email Address"
              autoComplete="email"
              required
            />
          </div>


          {/* =================================================
              MESSAGE
          ================================================= */}

          <div className="form-field message-field">
            <label htmlFor="message">
              Message
            </label>

            <textarea
              id="message"
              name="message"
              placeholder="Tell me about your project, opportunity or idea..."
              rows={6}
              required
            />
          </div>


          {/* =================================================
              PERMISSION
          ================================================= */}

          <label
            htmlFor="permission"
            className="checkbox"
          >
            <input
              id="permission"
              name="permission"
              type="checkbox"
              required
            />

            <span>
              I agree to be contacted regarding this
              message.
            </span>
          </label>


          {/* =================================================
              SUBMIT
          ================================================= */}

          <button
            type="submit"
            className="contact-submit"
          >
            <span>
              Send Message
            </span>

            <Send
              size={16}
              strokeWidth={1.8}
            />
          </button>

        </motion.form>

      </div>
    </section>
  );
}