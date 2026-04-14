import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LuCode, LuServer, LuBriefcase, LuUsers, LuGraduationCap, LuChevronDown } from 'react-icons/lu';
import { dict } from './data';

const iconMap = { 
  Code: LuCode, 
  Server: LuServer, 
  Briefcase: LuBriefcase, 
  Users: LuUsers, 
  GraduationCap: LuGraduationCap 
};

const TimelineItem = ({ data, index, lang }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isEven = index % 2 === 0;
  const IconComponent = iconMap[data.iconName] || LuBriefcase;
  
  const content = data[lang];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`mb-12 flex flex-col sm:flex-row items-center w-full ${
        isEven ? 'sm:flex-row-reverse' : ''
      }`}
    >
      <div className="w-full sm:w-5/12 mb-6 sm:mb-0 z-10">
        <div className={`bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800 hover:border-[#681ED6] hover:shadow-[0_0_15px_rgba(104,30,214,0.2)] transition-all duration-300 ${
          isEven ? 'sm:text-right' : 'sm:text-left'
        }`}>
          <span className="text-xs font-bold text-[#681ED6] tracking-wider uppercase bg-[#681ED6]/10 px-3 py-1 rounded-full border border-[#681ED6]/20">
            {data.date[lang]}
          </span>
          <h3 className="text-xl font-bold text-white mt-4">{content.title}</h3>
          <h4 className="text-md font-medium text-gray-400 mt-1 mb-3">{content.role}</h4>
          <p className="text-gray-300 leading-relaxed text-sm">{content.description}</p>

          {content.deepDive && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`mt-4 flex items-center text-sm font-semibold text-[#681ED6] hover:text-[#8b4deb] transition-colors ${
                isEven ? 'sm:ml-auto' : ''
              }`}
            >
              {dict[lang].deepDive}
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="ml-1"
              >
                <LuChevronDown className="w-4 h-4" />
              </motion.div>
            </button>
          )}

          <AnimatePresence>
            {isExpanded && content.deepDive && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className={`mt-4 pt-4 border-t border-gray-800 ${isEven ? 'sm:text-right' : 'sm:text-left'}`}>
                  <ul className="text-sm text-gray-400 space-y-2 inline-block text-left">
                    {content.deepDive.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#681ED6] mr-2 font-bold">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="w-full sm:w-2/12 flex justify-center relative hidden sm:flex">
        <div className="w-12 h-12 bg-gray-900 rounded-full border-4 border-[#681ED6] shadow-[0_0_10px_rgba(104,30,214,0.5)] flex items-center justify-center z-10 transition-transform duration-300 hover:scale-110">
          <IconComponent className="w-5 h-5 text-white" />
        </div>
      </div>

      <div className="w-full sm:w-5/12 hidden sm:block"></div>
    </motion.div>
  );
};

export default TimelineItem;