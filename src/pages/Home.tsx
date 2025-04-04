import React from 'react';
import { useState } from 'react';
import { PlusCircle, Trash2 } from 'lucide-react';
import { useEffect } from 'react';
import { Clock, MapPin, Phone, Mail } from 'lucide-react';

const Home = () => {
  const [concerns, setConcerns] = useState([""]);

  interface ConcernChangeHandler {
    (index: number, value: string): void;
  }

  const handleConcernChange: ConcernChangeHandler = (index, value) => {
    const updatedConcerns = [...concerns];
    updatedConcerns[index] = value;
    setConcerns(updatedConcerns);
  };

  const addConcern = () => {
    setConcerns([...concerns, ""]);
  };

  const removeConcern = (index: number): void => {
    const updatedConcerns = concerns.filter((_, i) => i !== index);
    setConcerns(updatedConcerns);
  };
  const scheduleData = [
    { day: 'Monday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Tuesday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Wednesday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Thursday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Friday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 2:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 transform -skew-y-6"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-96 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Expert Medical Care
                <span className="block text-blue-600">For Your Family</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Providing comprehensive healthcare solutions with a personal touch.
                Schedule your consultation today and take the first step towards better health.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200">
                Book Appointment
              </button>
            </div>
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800"
                alt="Doctor"
                className="rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Consultation Hours
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scheduleData.map((schedule) => (
              <div
                key={schedule.day}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <Clock className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900">{schedule.day}</h3>
                </div>
                <p className="text-gray-600">{schedule.hours}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Consultation Form */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Request Consultation
          </h2>
          <form className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Age
                </label>
                <input
                  type="number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Medical Concerns
                </label>
                <div className="space-y-2">
                  {concerns.map((concern, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <textarea
                        rows={2}
                        value={concern}
                        onChange={(e) => handleConcernChange(index, e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Describe your concern"
                      />
                      {concerns.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeConcern(index)}
                          className="p-2 text-red-500 hover:bg-red-100 rounded-md transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={addConcern}
                  className="mt-2 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <PlusCircle className="w-5 h-5 mr-1" />
                  Add More
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;