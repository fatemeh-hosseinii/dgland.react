import axios from "axios";
import { useEffect, useState } from "react";
import NavbarIteme from "./NavbarItem";

const Navbar = () => {
  const [navbar, setNavbar] = useState([]);

  const fetchPost = async () => {
    try {
      const res = await axios.get("http://localhost:3004/Navbar_header");
      setNavbar(res.data); // Assuming res.data is an array
    } catch (error) {
      console.error("Error fetching Navbar data:", error.message);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div>
      <NavbarIteme navbar={navbar} />
    </div>
  );
};

export default Navbar;
