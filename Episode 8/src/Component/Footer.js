const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By Sameer Pathan
      <span>&copy;</span>
      {year}
      <strong>
        Tasty <span>Trails</span>
      </strong>
    </div>
  );
};

export default Footer;
