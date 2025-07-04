import React, { useState } from 'react';
import { Phone, PhoneCall } from 'lucide-react';

const MyanmarDialerApp = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState('');

  // Service codes with their display names
  const serviceCodes = {
    '*101#': 'ဘေစစ်',
    '*102#': 'နံပါတ်စစ်'
  };

  const handleServiceCall = (code) => {
    // Open phone dialer with the service code
    const phoneUrl = `tel:${code}`;
    window.location.href = phoneUrl;
    
    // Also show dialog for feedback
    setDialogContent(`${serviceCodes[code]} ကို ခေါ်ရန် Dialer ပွင့်နေသည်...`);
    setIsDialogOpen(true);
    
    // Auto close after 2 seconds
    setTimeout(() => {
      setIsDialogOpen(false);
    }, 2000);
  };

  const services = [
    { 
      code: '*101#', 
      name: 'ဘေစစ်', 
      icon: <Phone className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700'
    },
    { 
      code: '*102#', 
      name: 'နံပါတ်စစ်', 
      icon: <Phone className="w-8 h-8" />,
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="max-w-sm mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
          <h1 className="text-xl font-bold text-center">Myanmar Dialer</h1>
          <p className="text-center text-blue-100 text-sm mt-1">ဖုန်းခေါ်ရန် app</p>
        </div>

        {/* Welcome Message */}
        <div className="p-6 bg-gray-50">
          <div className="bg-white rounded-xl p-4 text-center shadow-inner">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">ဝန်ဆောင်မှု ရွေးချယ်ပါ</h2>
            <p className="text-sm text-gray-600">အောက်မှ ခလုတ်များကို နှိပ်ပါ</p>
          </div>
        </div>

        {/* Service Buttons */}
        <div className="p-6 space-y-4">
          {services.map((service) => (
            <button
              key={service.code}
              onClick={() => handleServiceCall(service.code)}
              className={`w-full bg-gradient-to-r ${service.color} ${service.hoverColor} text-white p-6 rounded-2xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg`}
            >
              <div className="flex items-center justify-center gap-4">
                {service.icon}
                <div className="text-center">
                  <h3 className="text-xl font-bold">{service.name}</h3>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="p-6 pt-2 text-center">
          <div className="bg-blue-50 rounded-lg p-3 mb-4">
            <p className="text-sm text-blue-700 font-medium">
              📱 ခလုတ်နှိပ်ရင် သင့်ဖုန်း၏ Dialer ပွင့်မယ်
            </p>
            <p className="text-xs text-blue-600 mt-1">
              နံပါတ်အဆင်သင့်ပေါ်နေပြီး ခေါ်လို့ရပါပြီ
            </p>
          </div>
        </div>
      </div>

      {/* Call Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <PhoneCall className="w-8 h-8 text-green-600 animate-pulse" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {dialogContent}
            </h3>
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-500"></div>
            </div>
            <p className="text-sm text-gray-500 mt-3">ခေါ်ဆိုနေပါသည်...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyanmarDialerApp;
