import { useRef, useEffect, forwardRef } from "react";

const Navbar = forwardRef((props, navRef) => {

  return (
    <nav>
      <ul
        ref={navRef}
        className="flex justify-between items-center text-sm font-semibold text-gray-500 px-13 pb-10"
      >
        <li>WORK</li>
        <li>STUDIO</li>
        <li>JOURNAL</li>
        <li>STORE</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  );
});

export default Navbar;
