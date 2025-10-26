import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const public_key = "747elBlmsZvJVxLfn";
    const template_id = "template_ah5s4e9";
    const service_id = "service_b0uyk2n";
    const content: {
      from_name: string;
      from_email: string;
      to_name: string;
      message: string;
    } = {
      from_name: name,
      from_email: email,
      to_name: "mohammad mohammadi",
      message: message,
    };
    emailjs
      .send(service_id, template_id, content, {
        publicKey: public_key,
      })
      .then(
        () => {
          alert("SUCCESS!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          alert("FAILED..." + error.text);
          setName("");
          setEmail("");
          setMessage("");
        }
      );
  };

  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      id="contact"
      className="bg-white p-8 rounded-lg shadow-lg"
    >
      <h2 className="text-4xl font-bold mb-6 flex items-center text-gray-800">
        <Mail className="mr-3 h-8 w-8" /> Contact
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg mb-4 flex items-center">
            <Mail className="mr-2 h-5 w-5 text-blue-500" /> Email:
            mohammadmohammadi2025@gmail.com
          </p>
          <p className="text-lg mb-4 flex items-center">
            <Linkedin className="mr-2 h-5 w-5 text-blue-500" />
            <a
              href="https://www.linkedin.com/in/mohammad-mohammadi-372a45394/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              https://www.linkedin.com/in/mohammad-mohammadi-372a45394/
            </a>
          </p>
          <p className="text-lg mb-4 flex items-center">
            <Github className="mr-2 h-5 w-5 text-blue-500" />
            <a
              href="https://github.com/mohammad-1mohammadi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              github.com/mohammad-1mohammadi
            </a>
          </p>
        </div>
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          onSubmit={handleSubmit}
          className="space-y-4 border p-4 rounded-md"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              rows={4}
              required
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-full flex items-center hover:bg-blue-700 transition-colors duration-300"
          >
            <Send className="mr-2 h-5 w-5" /> Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
}
