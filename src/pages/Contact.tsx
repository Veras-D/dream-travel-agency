const Contact = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Contact Us</h1>
      <p className="text-center mb-5 fs-5">
        Have questions or ready to plan your next adventure? Get in touch with us!
      </p>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows={5} required></textarea>
            </div>
            <button type="submit" className="btn btn-custom">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
