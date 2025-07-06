import React from "react";

const Footer = () => {
  return (
    <footer className="w-full px-8 pt-20 pb-1 relative">
      {/* Top Section */}
      <div className="flex justify-between flex-wrap gap-10 mb-16">
        {/* Left Info */}
        <div className="space-y-2 text-lg">
          <div className="flex items-center gap-3">
            <span>© ONBOX 2025</span>
            <span>BASED IN VANCOUVER, BC</span>
            <span>WORKING GLOBALLY</span>
          </div>
          <div className="pt-4 text-3xl">
            <p>hello@onboxcreative.com</p>
            <p>+1 (604) 698-5837</p>
          </div>
        </div>

        {/* Right Links */}
        <div className="flex gap-20 text-sm uppercase">
          {/* Info Links */}
          <div>
            <p className="font-semibold mb-2">INFO</p>
            <ul className="space-y-1">
              <li>The Archive</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <p className="font-semibold mb-2">CONNECT</p>
            <ul className="space-y-1">
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>Behance</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Big ONBOX Text */}
      <div className="text-[18vw] pt-20 font-black">
        OИBOX
      </div>

      {/* Waving Video - bottom right corner */}
      <div className="absolute bottom-23 right-4 w-[25vw] rounded-lg overflow-hidden shadow-lg">
        <video
          src="https://media.tenor.com/Qy5sUxL5phgAAAPo/forest-gump-wave.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </footer>
  );
};

export default Footer;
