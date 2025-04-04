import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-purple-100 transform -skew-y-6"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
              About MediConsult
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800"
                  alt="Medical Team"
                  className="rounded-lg shadow-2xl"
                />
              </div>
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  With over 20 years of experience in healthcare, MediConsult has been providing exceptional medical services to our community. Our team of dedicated professionals is committed to delivering personalized care and innovative medical solutions.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  We believe in a patient-first approach, ensuring that every individual receives the attention and care they deserve. Our state-of-the-art facility is equipped with the latest medical technology to provide accurate diagnoses and effective treatments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <MapPin className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Location</h3>
              <p className="text-gray-600">
                123 Medical Center Drive<br />
                Suite 456<br />
                Healthcare City, HC 12345
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Phone className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact</h3>
              <p className="text-gray-600">
                Phone: (555) 123-4567<br />
                Emergency: (555) 987-6543<br />
                Fax: (555) 123-4568
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Mail className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Email</h3>
              <p className="text-gray-600">
                info@mediconsult.com<br />
                appointments@mediconsult.com<br />
                emergency@mediconsult.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;