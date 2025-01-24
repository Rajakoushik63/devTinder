const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-sky-500 to-gray-800 ">
      <footer className="footer footer-center text-base-content p-4 bg-black bg-opacity-60">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            DevBook company ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};
export default Footer;
