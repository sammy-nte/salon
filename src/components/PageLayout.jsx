import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import MobileNav from "./MobileNav";

function PageLayout() {
  const [closeMenu, setCloseMenu] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  function handleMenuClose() {
    setOpenMenu(false);
    setCloseMenu(prevState => !prevState);
  }

  function handleMenuOpen() {
    setCloseMenu(false);
    setOpenMenu(prevState => !prevState);
  }
  return (
    <div className="min-h-[100vh] w-full flex flex-col justify-between">
      <Header onSvgClick={handleMenuOpen} />
      <MobileNav openMenu={openMenu} closeMenu={closeMenu} onClick={handleMenuClose} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default PageLayout;
