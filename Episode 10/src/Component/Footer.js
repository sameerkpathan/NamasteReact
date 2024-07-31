const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="p-4 m-4 bg-gray-100 text-center">
      Created By Sameer Pathan
      <span>&copy;</span>
      {year}
      <strong className="p-2">
        Tasty <span>Trails</span>
      </strong>
    </div>
  );
};

export default Footer;
