import React, { useState } from 'react';
import { ChevronDown, Phone, User, Menu, X, Check } from 'lucide-react';


const NavDropdown = ({ title, items, isMobile, toggleMobileMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={`${isMobile ? 'w-full' : 'relative group'}`}>
      <button 
        className="flex items-center justify-between w-full text-gray-700 hover:text-gray-900 py-2"
        onClick={handleClick}
        onMouseEnter={() => !isMobile && setIsOpen(true)}
        onMouseLeave={() => !isMobile && setIsOpen(false)}
      >
        <span>{title}</span>
        <ChevronDown size={16} />
      </button>
      {isOpen && (
        <div className={`${isMobile ? 'mt-2' : 'absolute left-0 mt-2 w-48'} rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10`}>
          <div className="py-1">
            {items.map((item, index) => (
              <a key={index} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={isMobile ? toggleMobileMenu : undefined}>
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const PricingPage = () => {
  const [activeTab, setActiveTab] = useState('AL CARTE');
  const [isDealFacilitator, setIsDealFacilitator] = useState(true);
  const [isMonthly, setIsMonthly] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pricingData = {
    'AL CARTE': [
      { type: 'Featured listing', name: '1 Unit Listing', price: { with: 1000, without: 800 } },
      { type: 'Featured listing', name: '1 Building Listing', price: { with: 5000, without: 4000 } },
      { type: 'Featured listing', name: '1 Estate Listing', price: { with: 10000, without: 8000 } },
      { type: 'Regular listing', name: '1 Unit Listing', price: { with: 300, without: 240 } },
      { type: 'Regular listing', name: '1 Building Listing', price: { with: 2000, without: 1600 } },
      { type: 'Regular listing', name: '1 Estate Listing', price: { with: 3000, without: 2400 } },
    ],
    'BUNDLES': [
      { type: 'Featured listing', name: 'Basic', price: 1000, listings: 2, validity: '01 month', features: ['2 Featured Listings', '24/7 Support', 'Analytics Dashboard'] },
      { type: 'Featured listing', name: 'Elite', price: 2000, listings: 5, validity: '03 months', features: ['5 Featured Listings', 'Priority Support', 'Advanced Analytics', 'Custom Branding'] },
      { type: 'Featured listing', name: 'Premium', price: 5000, listings: 10, validity: '06 months', features: ['10 Featured Listings', 'Dedicated Account Manager', 'Premium Analytics', 'API Access'] },
      { type: 'Featured listing', name: 'Platinum', price: 10000, listings: 20, validity: '12 months', features: ['20 Featured Listings', '24/7 VIP Support', 'Enterprise Analytics', 'White-label Solutions'] },
      { type: 'Featured listing', name: 'Diamond', price: 20000, listings: 50, validity: '12 months', features: ['50 Featured Listings', 'Exclusive Concierge Service', 'Custom Development', 'Industry Insights'] },
    ]
  };

  const handlePurchase = (plan) => {
    window.location.href = 'https://rzp.io/rzp/7Zs6NKg'; // Replace with your actual payment page URL
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg p-4 absolute w-full z-40">
          {Object.entries(navItems).map(([key, items]) => (
            <NavDropdown key={key} title={key} items={items} isMobile={true} toggleMobileMenu={toggleMobileMenu} />
          ))}
          <div className="mt-4 space-y-2">
            <div className="flex items-center">
              <Phone size={20} className="text-red-800 mr-2" />
              <span className="text-gray-600">(800) 987 6543</span>
            </div>
            <button className="w-full bg-red-800 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300">
              CREATE A LISTING
            </button>
            <button className="w-full bg-gray-200 p-2 rounded-full flex items-center justify-center hover:bg-gray-300 transition duration-300">
              <User size={20} className="text-gray-600" />
              <span className="ml-2">User Account</span>
            </button>
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-red-800">Choose Your Plan</h1>
        <div className="flex justify-center space-x-2 mb-6">
          <button
            className={`px-6 py-2 rounded-md transition duration-300 ${
              activeTab === 'AL CARTE' ? 'bg-red-800 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => setActiveTab('AL CARTE')}
          >
            AL CARTE
          </button>
          <button
            className={`px-6 py-2 rounded-md transition duration-300 ${
              activeTab === 'BUNDLES' ? 'bg-red-800 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => setActiveTab('BUNDLES')}
          >
            BUNDLES
          </button>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center mb-6 space-y-4 sm:space-y-0 sm:space-x-8">
          <div className="flex items-center justify-between w-full sm:w-auto">
            <span className={`mr-2 ${isDealFacilitator ? 'text-gray-900' : 'text-gray-400'}`}>With Deal Facilitator</span>
            <button
              className={`w-14 h-7 rounded-full ${isDealFacilitator ? 'bg-red-800' : 'bg-gray-300'} transition duration-300 relative`}
              onClick={() => setIsDealFacilitator(!isDealFacilitator)}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white absolute top-1 transition-transform duration-200 ease-in-out ${
                  isDealFacilitator ? 'right-1' : 'left-1'
                }`}
              />
            </button>
            <span className={`ml-2 ${!isDealFacilitator ? 'text-gray-900' : 'text-gray-400'}`}>Without Deal Facilitator</span>
          </div>
          <div className="flex items-center justify-between w-full sm:w-auto">
            <span className={`mr-2 ${isMonthly ? 'text-gray-900' : 'text-gray-400'}`}>Monthly</span>
            <button
              className={`w-14 h-7 rounded-full ${isMonthly ? 'bg-red-800' : 'bg-gray-300'} transition duration-300 relative`}
              onClick={() => setIsMonthly(!isMonthly)}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white absolute top-1 transition-transform duration-200 ease-in-out ${
                  isMonthly ? 'right-1' : 'left-1'
                }`}
              />
            </button>
            <span className={`ml-2 ${!isMonthly ? 'text-gray-900' : 'text-gray-400'}`}>Annually</span>
          </div>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${activeTab === 'BUNDLES' ? 'xl:grid-cols-5' : ''} gap-6`}>
          {pricingData[activeTab].map((plan, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg flex flex-col justify-between transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                (activeTab === 'AL CARTE' && index < 3) || activeTab === 'BUNDLES' ? 'bg-pink-50' : 'bg-white'
              }`}
            >
              <div className="text-center">
                <div className="text-xs font-semibold mb-2 px-2 py-1 rounded bg-gray-800 text-white inline-block">
                  {plan.type}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-red-800">{plan.name}</h3>
                <div className="text-4xl font-bold mb-1 text-gray-800">
                  ${activeTab === 'AL CARTE'
                    ? isDealFacilitator
                      ? plan.price.with
                      : plan.price.without
                    : plan.price}
                </div>
                <div className="text-sm font-normal text-gray-600 mb-4">/{isMonthly ? 'month' : 'year'}</div>
                {activeTab === 'BUNDLES' && (
                  <div className="text-sm text-gray-600 mb-4">
                    <p>Total Listings: {plan.listings}</p>
                    <p>Validity: {plan.validity}</p>
                  </div>
                )}
              </div>
              {activeTab === 'BUNDLES' && (
                <ul className="text-sm text-gray-600 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center mb-2">
                      <Check size={16} className="text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
              <button 
                className="w-full bg-red-800 text-white py-3 rounded-md font-semibold text-lg hover:bg-red-700 transition duration-300 mt-4"
                onClick={() => handlePurchase(plan)}
              >
                Purchase this plan
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-red-800">Terms and Conditions</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Only owners can manage a development page (estate, office building, mall, industrial parks) unless a Brokerage or Agent can show exclusive mandate to lease/to sell).</li>
            <li>Developments that are not paid page will be directed to admin for client auction.</li>
            <li>Client auction only applies to agents/agencies/brokerage/firms where they will subscribe to it on an annual basis.</li>
            <li>Promos and coupons to apply upon checkout.</li>
            <li>Sellers who availed the DEAL FACILITATOR will have contact e-mail and phone set to Crebook's dedicated hotlines.</li>
          </ol>
        </div>
      </main>
    </div>
  );
};

export default PricingPage;