import React, { useState } from "react";
import { Logo, Container, LogoutBtn } from "../index";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <header className="bg-blue-900 text-white shadow-md">
      <Container>
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>
          <ul className="flex space-x-4">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className="px-4 py-2 font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
