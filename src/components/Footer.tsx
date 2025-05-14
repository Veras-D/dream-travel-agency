const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-3 text-center">
      <div className="container">
        <p>&copy; {currentYear} Dream Travel Agency. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
