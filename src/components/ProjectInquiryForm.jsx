import { useState } from 'react';

export default function ProjectInquiryForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    timeline: '',
    budget: '',
    services: {
      brandStrategy: false,
      webDesign: false,
      contentCreation: false,
      digitalMarketing: false,
      other: false
    },
    moreInfo: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        services: {
          ...formData.services,
          [name]: checked
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="flex bg-white p-8 font-sans">
      {/* Left Column - Contact Info */}
      <div className="w-1/3 pr-8">
        <div className="mb-8">
          <h2 className="text-lg font-medium text-gray-700 mb-2">Find us</h2>
          <p className="text-gray-800">Begusarai, Bihar,<br />India</p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-lg font-medium text-gray-700 mb-2">Inquiry</h2>
          <p className="text-gray-800 mb-2">mohdrashit150@gmail.com</p>
          <p className="text-gray-800">+91 7903409600</p>
        </div>
      </div>
      
      {/* Right Column - Form */}
      <div className="w-2/3">
        <div>
          {/* Full Name */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              FULL NAME <span className="text-xs text-gray-500">1/6</span>
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="NAME SURNAME"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          
          {/* Email Address */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              EMAIL ADDRESS <span className="text-xs text-gray-500">2/6</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="MAIL@COMPANY.COM"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          
          {/* Timeline */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              TIMELINE <span className="text-xs text-gray-500">3/6</span>
            </label>
            <input
              type="text"
              name="timeline"
              placeholder="2 WEEKS"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          
          {/* Budget */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              BUDGET <span className="text-xs text-gray-500">4/6</span>
            </label>
            <input
              type="text"
              name="budget"
              placeholder="$500, $2,000"
              value={formData.budget}
              onChange={handleChange}
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          
          {/* Select Services */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              SELECT SERVICES <span className="text-xs text-gray-500">5/6</span>
            </label>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="brandStrategy"
                  name="brandStrategy"
                  checked={formData.services.brandStrategy}
                  onChange={handleChange}
                  className="h-4 w-4 mr-2"
                />
                <label htmlFor="brandStrategy" className="text-gray-700">BRAND STRATEGY</label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="webDesign"
                  name="webDesign"
                  checked={formData.services.webDesign}
                  onChange={handleChange}
                  className="h-4 w-4 mr-2"
                />
                <label htmlFor="webDesign" className="text-gray-700">WEB DESIGN</label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="contentCreation"
                  name="contentCreation"
                  checked={formData.services.contentCreation}
                  onChange={handleChange}
                  className="h-4 w-4 mr-2"
                />
                <label htmlFor="contentCreation" className="text-gray-700">CONTENT CREATION</label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="digitalMarketing"
                  name="digitalMarketing"
                  checked={formData.services.digitalMarketing}
                  onChange={handleChange}
                  className="h-4 w-4 mr-2"
                />
                <label htmlFor="digitalMarketing" className="text-gray-700">DIGITAL MARKETING</label>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="other"
                  name="other"
                  checked={formData.services.other}
                  onChange={handleChange}
                  className="h-4 w-4 mr-2"
                />
                <label htmlFor="other" className="text-gray-700">OTHER</label>
              </div>
            </div>
          </div>
          
          {/* More Information */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              MORE INFORMATION <span className="text-xs text-gray-500">6/6</span>
            </label>
            <textarea
              name="moreInfo"
              placeholder="HELLO, I'M LOOKING FOR A AGENCY TO HELP ME OUT WITH..."
              value={formData.moreInfo}
              onChange={handleChange}
              rows={4}
              className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          
          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-4 font-medium hover:bg-blue-700 transition-colors"
          >
            SUBMIT PROJECT
          </button>
        </div>
      </div>
    </div>
  );
}