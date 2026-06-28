import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const SocialNav = () => {
  // Array matrix with integrated React Icons and cohesive color design templates
  const socialLinks = [
    {
      id: "facebook",
      label: "Facebook",
      displayUrl: "BAMBOOjapaneseLanguageschool",
      href: "https://www.facebook.com/BAMBOOjapaneseLanguageschool",
      icon: <FaFacebookF className="text-base text-[#1877F2]" />,
      hoverBg: "hover:bg-[#1877F2]/10",
      isExternal: true,
    },
    {
      id: "tiktok",
      label: "TikTok",
      displayUrl: "bamboo.japan.lang",
      href: "https://www.tiktok.com/@bamboo.japan.lang?_r=1&_t=ZS-97af6Qsgwt6",
      icon: <FaTiktok className="text-base text-[#000000]" />,
      hoverBg: "hover:bg-black/5",
      isExternal: true,
    },
 {
    id: "gmail",
    label: "Gmail",
    displayUrl: "bamboojls1618@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=bamboojls1618@gmail.com",
    icon: <SiGmail className="text-base text-[#EA4335]" />,
    hoverBg: "hover:bg-[#EA4335]/10",
    isExternal: true, 
  },
  ];

  return (
    <div className="bg-[#EBF3EB] border-b border-[#D6E6D6] text-xs font-semibold tracking-wide text-gray-700 shadow-inner">
      <div className="mx-auto flex max-w-5xl justify-end items-center gap-2 px-6 py-1.5 flex-wrap">
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target={link.isExternal ? "_blank" : undefined}
            rel={link.isExternal ? "noopener noreferrer" : undefined}
            className={`flex items-center gap-2.5 px-3 py-1 rounded-full transition-all duration-200 ${link.hoverBg}`}
          >
            {/* Brand Logo Container Area */}
            <span className="flex items-center justify-center">
              {link.icon}
            </span>
            
            {/* Descriptive Content Layout */}
            <div className="flex items-center gap-1">
              <span className="text-gray-900 font-bold">{link.label}:</span>
              <span className="text-gray-600 font-medium text-[11px] opacity-90 transition-opacity">
                {link.displayUrl}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialNav;