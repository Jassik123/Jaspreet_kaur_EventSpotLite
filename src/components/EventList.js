import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';
import SkeletonLoader from './SkeletonLoader';

const EventList = ({ events, onEventClick }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate data fetching delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {loading
        ? Array(6).fill().map((_, i) => <SkeletonLoader key={i} />)
        : events.map((event) => (
            <EventCard key={event.id} event={event} onEventClick={onEventClick} />
          ))}
    </div>
  );
};

export default EventList;
