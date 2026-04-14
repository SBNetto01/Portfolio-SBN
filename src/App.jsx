import { useState } from 'react';
import { LuGlobe } from 'react-icons/lu';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import { dict } from './components/data';

function App() {
  const [lang, setLang] = useState('en');

  return (
    <div className="min-h-screen bg-gray-950 py-8 px-4 sm:px-6 lg:px-8 text-gray-200 font-sans">
      <div className="max-w-4xl mx-auto">
        
        <header className="flex justify-end mb-8">
          <div className="relative flex items-center bg-gray-900 border border-gray-800 rounded-lg px-3 py-2 shadow-sm focus-within:border-[#681ED6] transition-colors">
            <LuGlobe className="w-4 h-4 text-gray-400 mr-2" />
            <select 
              value={lang} 
              onChange={(e) => setLang(e.target.value)}
              className="bg-transparent text-sm text-gray-200 outline-none cursor-pointer appearance-none pr-4"
            >
              <option value="en" className="bg-gray-900">English</option>
              <option value="pt" className="bg-gray-900">Português (BR)</option>
            </select>
          </div>
        </header>

        <h1 className="text-3xl font-bold text-center text-white mb-16">
          {dict[lang].title}
        </h1>
        
        <Timeline lang={lang} />
        
        <Footer lang={lang} />
      </div>
    </div>
  );
}

export default App;