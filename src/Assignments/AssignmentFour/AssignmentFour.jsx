import React, { useState } from "react";

function AssignmentFour() {
  // Sample data for locations
  const regions = {
    "National Capital Region": ["Quezon City", "Manila", "Makati"],
    "Central Luzon": ["Angeles City", "San Fernando", "Tarlac City"],
    CALABARZON: ["Antipolo", "Batangas City", "Lucena"],
  };

  const barangays = {
    "Quezon City": [
      "Barangay Bagumbayan",
      "Barangay Commonwealth",
      "Barangay Loyola Heights",
    ],
    Manila: ["Barangay 1", "Barangay 2", "Barangay 3"],
    Makati: ["Barangay Bel-Air", "Barangay San Lorenzo", "Barangay Urdaneta"],
  };

  const [selectedCountry] = useState("Philippines");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedBarangay, setSelectedBarangay] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [otherAddress, setOtherAddress] = useState("");
  const [displayAddress, setDisplayAddress] = useState("");

  const handleConfirm = () => {
    if (!selectedRegion || !selectedCity || !selectedBarangay || !zipCode) {
      alert("Please fill out all required fields.");
      return;
    }
    setDisplayAddress(
      `You live in ${selectedBarangay}, ${selectedCity}, ${selectedRegion}, Philippines, ZIP Code: ${zipCode}. Other Address: ${
        otherAddress || "N/A"
      }`
    );
  };

  return (
    <div className="p-5 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Philippines Location Form</h2>

      {/* Country (Philippines pre-selected) */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Country</label>
        <select disabled className="border p-2 w-full">
          <option>{selectedCountry}</option>
        </select>
      </div>

      {/* Region Selection */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Region</label>
        <select
          value={selectedRegion}
          onChange={(e) => {
            setSelectedRegion(e.target.value);
            setSelectedCity("");
            setSelectedBarangay("");
          }}
          className="border p-2 w-full"
        >
          <option value="">Select a region</option>
          {Object.keys(regions).map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>

      {/* City Selection */}
      {selectedRegion && (
        <div className="mb-4">
          <label className="block mb-1 font-semibold">City</label>
          <select
            value={selectedCity}
            onChange={(e) => {
              setSelectedCity(e.target.value);
              setSelectedBarangay("");
            }}
            className="border p-2 w-full"
          >
            <option value="">Select a city</option>
            {regions[selectedRegion].map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Barangay Selection */}
      {selectedCity && (
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Barangay</label>
          <select
            value={selectedBarangay}
            onChange={(e) => setSelectedBarangay(e.target.value)}
            className="border p-2 w-full"
          >
            <option value="">Select a barangay</option>
            {barangays[selectedCity]?.map((barangay) => (
              <option key={barangay} value={barangay}>
                {barangay}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* ZIP Code Input */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">ZIP Code</label>
        <input
          type="text"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          placeholder="Enter ZIP Code"
          className="border p-2 w-full"
        />
      </div>

      {/* Other Address Input */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Other Address</label>
        <input
          type="text"
          value={otherAddress}
          onChange={(e) => setOtherAddress(e.target.value)}
          placeholder="Optional Address Details"
          className="border p-2 w-full"
        />
      </div>

      {/* Confirm Button */}
      <button
        onClick={handleConfirm}
        className="bg-blue-500 text-white p-2 rounded w-full"
      >
        Confirm Address
      </button>

      {/* Display Address */}
      {displayAddress && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <p className="text-lg font-semibold">{displayAddress}</p>
        </div>
      )}
    </div>
  );
}

export default AssignmentFour;
