import React, { useState, useEffect } from "react";

function AssignmentFour() {
  const [regions, setRegions] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [barangays, setBarangays] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedBarangay, setSelectedBarangay] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [otherAddress, setOtherAddress] = useState("");
  const [displayAddress, setDisplayAddress] = useState("");

  // State for selected names (instead of codes)
  const [regionName, setRegionName] = useState("");
  const [provinceName, setProvinceName] = useState("");
  const [cityName, setCityName] = useState("");
  const [barangayName, setBarangayName] = useState("");

  // Fetch all regions using fetch
  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const response = await fetch("https://psgc.cloud/api/regions");
        const data = await response.json();
        console.log("Fetched regions:", data); // Debug log to inspect the structure

        // Check the structure of the response and set the correct data
        if (Array.isArray(data)) {
          setRegions(data);
        } else {
          console.error("Unexpected response format:", data);
        }
      } catch (error) {
        console.error("Error fetching regions:", error);
      }
    };

    fetchRegions();
  }, []);

  const handleRegionChange = (e) => {
    const regionCode = e.target.value;
    setSelectedRegion(regionCode);
    setSelectedProvince("");
    setSelectedCity("");
    setSelectedBarangay("");
    setProvinces([]);
    setCities([]);
    setBarangays([]);
    const selectedRegionData = regions.find(
      (region) => region.code === regionCode
    );
    setRegionName(selectedRegionData ? selectedRegionData.name : "");

    // Fetch provinces for selected region
    if (regionCode) {
      fetch(`https://psgc.cloud/api/regions/${regionCode}/provinces`)
        .then((response) => response.json())
        .then((data) => {
          console.log("Fetched provinces:", data);
          setProvinces(data || []);
        })
        .catch((error) => {
          console.error("Error fetching provinces:", error);
        });
    }
  };

  const handleProvinceChange = (e) => {
    const provinceCode = e.target.value;
    setSelectedProvince(provinceCode);
    setSelectedCity("");
    setSelectedBarangay("");
    setCities([]);

    const selectedProvinceData = provinces.find(
      (province) => province.code === provinceCode
    );
    setProvinceName(selectedProvinceData ? selectedProvinceData.name : "");

    // Fetch cities for selected province
    if (provinceCode) {
      fetch(
        `https://psgc.cloud/api/provinces/${provinceCode}/cities-municipalities`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("Fetched cities:", data);
          setCities(data || []);
        })
        .catch((error) => {
          console.error("Error fetching cities:", error);
        });
    }
  };

  const handleCityChange = (e) => {
    const cityCode = e.target.value;
    setSelectedCity(cityCode);
    setSelectedBarangay("");

    const selectedCityData = cities.find((city) => city.code === cityCode);
    setCityName(selectedCityData ? selectedCityData.name : "");

    // Fetch barangays for selected city
    if (cityCode) {
      fetch(`https://psgc.cloud/api/municipalities/${cityCode}/barangays`)
        .then((response) => response.json())
        .then((data) => {
          console.log("Fetched barangays:", data);
          setBarangays(data || []);
        })
        .catch((error) => {
          console.error("Error fetching barangays:", error);
        });
    }
  };

  const handleConfirm = () => {
    if (
      !selectedRegion ||
      !selectedProvince ||
      !selectedCity ||
      !selectedBarangay ||
      !zipCode
    ) {
      alert("Please fill out all required fields.");
      return;
    }
    setDisplayAddress(
      `You live in ${barangayName}, ${cityName}, ${provinceName}, ${regionName}, Philippines, ZIP Code: ${zipCode}. Other Address: ${
        otherAddress || "N/A"
      }`
    );
  };

  return (
    <div className="p-5 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Address Form</h2>

      <div className="mb-4">
        <label
          htmlFor="region"
          className="block text-sm font-medium text-gray-700"
        >
          Region
        </label>
        <select
          id="region"
          value={selectedRegion}
          onChange={handleRegionChange}
          className="w-full p-2 mt-2 border border-gray-300 rounded"
        >
          <option value="">Select a Region</option>
          {regions.length > 0 ? (
            regions.map((region) => (
              <option key={region.code} value={region.code}>
                {region.name}
              </option>
            ))
          ) : (
            <option value="">No regions available</option>
          )}
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="province"
          className="block text-sm font-medium text-gray-700"
        >
          Province
        </label>
        <select
          id="province"
          value={selectedProvince}
          onChange={handleProvinceChange}
          className="w-full p-2 mt-2 border border-gray-300 rounded"
        >
          <option value="">Select a Province</option>
          {provinces.length > 0 ? (
            provinces.map((province) => (
              <option key={province.code} value={province.code}>
                {province.name}
              </option>
            ))
          ) : (
            <option value="">No provinces available</option>
          )}
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="city"
          className="block text-sm font-medium text-gray-700"
        >
          City/Municipality
        </label>
        <select
          id="city"
          value={selectedCity}
          onChange={handleCityChange}
          className="w-full p-2 mt-2 border border-gray-300 rounded"
        >
          <option value="">Select a City</option>
          {cities.length > 0 ? (
            cities.map((city) => (
              <option key={city.code} value={city.code}>
                {city.name}
              </option>
            ))
          ) : (
            <option value="">No cities available</option>
          )}
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="barangay"
          className="block text-sm font-medium text-gray-700"
        >
          Barangay
        </label>
        <select
          id="barangay"
          value={selectedBarangay}
          onChange={(e) => setSelectedBarangay(e.target.value)}
          className="w-full p-2 mt-2 border border-gray-300 rounded"
        >
          <option value="">Select a Barangay</option>
          {barangays.length > 0 ? (
            barangays.map((barangay) => (
              <option key={barangay.code} value={barangay.code}>
                {barangay.name}
              </option>
            ))
          ) : (
            <option value="">No barangays available</option>
          )}
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="zipCode"
          className="block text-sm font-medium text-gray-700"
        >
          ZIP Code
        </label>
        <input
          id="zipCode"
          type="text"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          className="w-full p-2 mt-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="otherAddress"
          className="block text-sm font-medium text-gray-700"
        >
          Other Address (Optional)
        </label>
        <input
          id="otherAddress"
          type="text"
          value={otherAddress}
          onChange={(e) => setOtherAddress(e.target.value)}
          className="w-full p-2 mt-2 border border-gray-300 rounded"
        />
      </div>

      <button
        onClick={handleConfirm}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Confirm
      </button>

      {displayAddress && (
        <div className="mt-4 p-4 bg-green-100 rounded">
          <h3 className="text-lg font-semibold">Your Address:</h3>
          <p>{displayAddress}</p>
        </div>
      )}
    </div>
  );
}

export default AssignmentFour;
