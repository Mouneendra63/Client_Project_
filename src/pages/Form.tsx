import * as React from 'react';
import { useState } from 'react';
import { PlusCircle, Trash2 } from 'lucide-react';

const Form = ()=> {
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
                  {concerns.map((concern: string, index: number) => (
                    <div key={index} className="flex items-center space-x-2">
                      <textarea
                        rows={2}
                        value={concern}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleConcernChange(index, e.target.value)}
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
}

export default Form;