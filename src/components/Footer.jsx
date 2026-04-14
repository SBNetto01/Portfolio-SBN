import { dict } from './data';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const socialLinks = [
  {
    name: "LinkedIn",
    url: "#", // Add your LinkedIn URL here
    icon: <FaLinkedin className="w-6 h-6" />
  },
  {
    name: "GitHub",
    url: "#", // Add your GitHub URL here
    icon: <FaGithub className="w-6 h-6" />
  }
];

const Footer = ({ lang }) => {
  return (
    <footer className="mt-20 border-t border-gray-800 py-8 text-center">
      <p className="text-gray-400 font-medium mb-4">{dict[lang].footerText}</p>
      
      <div className="flex justify-center space-x-6">
        {socialLinks.map((link) => (
          <a 
            key={link.name}
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={link.name}
            className="text-gray-400 hover:text-[#681ED6] transition-colors duration-300"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;