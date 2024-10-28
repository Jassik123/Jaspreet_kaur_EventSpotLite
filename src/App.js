import React, { useState } from 'react';
import EventList from './components/EventList';
import Modal from './components/Modal';
import eventsData from './data/events';
import './index.css'; // Ensure this imports your CSS

const App = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  const filteredEvents = eventsData.filter(
    (event) =>
      event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 p-4 text-white text-center">
        <h1 className="text-2.5xl font-bold">EventSpot Lite</h1>
        <input
          type="text"
          placeholder="Search events..."
          className="mt-4 p-2 w-80 rounded shadow"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>

      {/* Spotlight bar */}
      <div className="spotlight">
        <div className="sliding-text">Upcoming Events</div>
      </div>

      <main className="p-4">
        <EventList events={filteredEvents} onEventClick={handleEventClick} />
      </main>

      {selectedEvent && (
        <Modal event={selectedEvent} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;
