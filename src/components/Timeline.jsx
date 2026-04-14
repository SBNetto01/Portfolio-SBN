import { timelineData } from './data';
import TimelineItem from './TimelineItem';

const Timeline = ({ lang }) => {
  return (
    <div className="relative container mx-auto px-4 py-8">
      {/* The central vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-800 hidden sm:block z-0"></div>

      {/* Map through the data array and pass the lang prop down to each item */}
      {timelineData.map((item, index) => (
        <TimelineItem key={item.id} data={item} index={index} lang={lang} />
      ))}
    </div>
  );
};

export default Timeline;