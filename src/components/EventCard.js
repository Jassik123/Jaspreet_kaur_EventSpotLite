import React from 'react';

const EventCard = ({ event, onEventClick }) => {
  return (
    <div
      className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-500 transform hover:scale-105 cursor-pointer"
      onClick={() => onEventClick(event)}
    >
      <img
        src={event.image}
        alt={event.name}
        className="w-full h-40 object-cover rounded"
      />
      <h2 className="text-xl font-semibold mt-2">{event.name}</h2>
      <p className="text-gray-500">{event.date}</p>
      <p className="text-blue-500">{event.location}</p>
    </div>
  );
};

export default EventCard;
