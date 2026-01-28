import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="text-center mb-4 text-light">Contact Me</h2>
        <p className="text-center text-muted mb-5">
          Have a project, idea, or question? Feel free to reach out :3
        </p>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <form className="contact-form">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="you@example.com"
                />
              </div>
              <div className="mb-4">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  rows={5}
                  placeholder="Your message..."
                ></textarea>
              </div>
              <div className="text-center">
                <button type="button" className="contact-btn">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
