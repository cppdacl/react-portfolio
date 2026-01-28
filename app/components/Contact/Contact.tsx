import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastVisible, setToastVisible] = useState(false);

  const validate = () => {
    const newErrors: typeof errors = {};

    if (!name.trim()) newErrors.name = "Name is required.";
    else if (!/^[a-zA-Z0-9_.]{2,30}$/.test(name.trim()))
      newErrors.name =
        "Name can only contain letters, numbers, underscores, and dots (2-30 chars).";

    if (!email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      newErrors.email = "Please enter a valid email address.";

    if (!message.trim()) newErrors.message = "Message cannot be empty.";
    else if (message.trim().length > 1000)
      newErrors.message = "Message is too long (max 1000 characters).";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSend = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setToastMessage("Your message has been sent!");
    setToastVisible(false);

    requestAnimationFrame(() => setToastVisible(true));

    setTimeout(() => setToastVisible(false), 2500);

    setName("");
    setEmail("");
    setMessage("");
    setErrors({});

    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="text-center mb-4 text-light">Contact Me</h2>
        <p className="text-center text-muted mb-5">
          Have a project, idea, or question? Feel free to reach out :3
        </p>

        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <form className="contact-form" noValidate>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>

              <div className="mb-4">
                <label className="form-label">Message</label>
                <textarea
                  className={`form-control ${errors.message ? "is-invalid" : ""}`}
                  rows={5}
                  placeholder="Your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                {errors.message && (
                  <div className="invalid-feedback">{errors.message}</div>
                )}
              </div>

              <div className="text-center">
                <button
                  type="button"
                  className="contact-btn btn btn-primary"
                  onClick={handleSend}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="toast-container">
        {toastMessage && (
          <div className={`toast-notify ${toastVisible ? "show" : "hide"}`}>
            {toastMessage}
          </div>
        )}
      </div>
    </section>
  );
}
