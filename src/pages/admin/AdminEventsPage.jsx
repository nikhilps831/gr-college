import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { eventService } from '../../services/eventService';
import { Plus, Trash2, X } from 'lucide-react';

export const AdminEventsPage = () => {
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: 'Academic Fest',
    date: '2026-11-20',
    time: '09:00 AM - 05:00 PM',
    venue: 'Main Auditorium',
    organizer: 'Department of IT',
    description: '',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800'
  });

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    const data = await eventService.getAllEvents();
    setEvents(data);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    await eventService.createEvent(formData);
    setIsModalOpen(false);
    loadEvents();
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this event listing?')) {
      await eventService.deleteEvent(id);
      loadEvents();
    }
  };

  return (
    <>
      <Helmet>
        <title>Events Management | Admin CMS</title>
      </Helmet>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900">Campus Events & Fests</h2>
            <p className="text-xs text-slate-500">Schedule upcoming workshops, hackathons, and sports meets.</p>
          </div>
          <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-900 text-white text-xs font-bold rounded-xl">
            <Plus className="w-4 h-4" /> Create Event
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {events.map((evt) => (
            <div key={evt.id} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-900 text-[10px] font-bold">{evt.category}</span>
                <h4 className="text-sm font-bold text-slate-900 leading-tight">{evt.title}</h4>
                <p className="text-[11px] text-slate-500">{evt.date} • {evt.venue}</p>
              </div>
              <button onClick={() => handleDelete(evt.id)} className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg shrink-0">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white max-w-lg w-full rounded-3xl p-6 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b">
                <h3 className="text-sm font-bold text-slate-900">Schedule New Event</h3>
                <button onClick={() => setIsModalOpen(false)}><X className="w-5 h-5 text-slate-500" /></button>
              </div>

              <form onSubmit={handleSave} className="space-y-3 text-xs font-medium">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Event Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                    className="w-full p-2 bg-slate-50 border rounded-xl"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Date</label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      required
                      className="w-full p-2 bg-slate-50 border rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Venue</label>
                    <input
                      type="text"
                      value={formData.venue}
                      onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                      required
                      className="w-full p-2 bg-slate-50 border rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">Organizer</label>
                  <input
                    type="text"
                    value={formData.organizer}
                    onChange={(e) => setFormData({ ...formData, organizer: e.target.value })}
                    required
                    className="w-full p-2 bg-slate-50 border rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">Description</label>
                  <textarea
                    rows={3}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                    className="w-full p-2 bg-slate-50 border rounded-xl"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-slate-200 rounded-xl">Cancel</button>
                  <button type="submit" className="px-5 py-2 bg-blue-900 text-white font-bold rounded-xl">Schedule Event</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
