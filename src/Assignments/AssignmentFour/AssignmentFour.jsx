import React, { useState, useEffect } from "react";
import "./AssignmentFour.css"; // Import CSS

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

  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const response = await fetch("https://psgc.cloud/api/regions");
        const data = await response.json();
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

    if (regionCode) {
      fetch(`https://psgc.cloud/api/regions/${regionCode}/provinces`)
        .then((response) => response.json())
        .then((data) => setProvinces(data || []))
        .catch((error) => console.error("Error fetching provinces:", error));
    }
  };

  const handleProvinceChange = (e) => {
    const provinceCode = e.target.value;
    setSelectedProvince(provinceCode);
    setSelectedCity("");
    setSelectedBarangay("");
    setCities([]);

    if (provinceCode) {
      fetch(
        `https://psgc.cloud/api/provinces/${provinceCode}/cities-municipalities`
      )
        .then((response) => response.json())
        .then((data) => setCities(data || []))
        .catch((error) => console.error("Error fetching cities:", error));
    }
  };

  const handleCityChange = (e) => {
    const cityCode = e.target.value;
    setSelectedCity(cityCode);
    setSelectedBarangay("");

    if (cityCode) {
      fetch(`https://psgc.cloud/api/municipalities/${cityCode}/barangays`)
        .then((response) => response.json())
        .then((data) => setBarangays(data || []))
        .catch((error) => console.error("Error fetching barangays:", error));
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

    const regionName =
      regions.find((region) => region.code === selectedRegion)?.name ||
      "Unknown Region";
    const provinceName =
      provinces.find((province) => province.code === selectedProvince)?.name ||
      "Unknown Province";
    const cityName =
      cities.find((city) => city.code === selectedCity)?.name || "Unknown City";
    const barangayName =
      barangays.find((barangay) => barangay.code === selectedBarangay)?.name ||
      "Unknown Barangay";

    setDisplayAddress(
      `You live in   ${
        otherAddress || ""
      }, ${barangayName}, ${cityName}, ${provinceName}, ${regionName}, ${zipCode}, Philippines. 
      `
    );
  };

  return (
    <div className="address-container">
      <div className="address-wrapper">
        <div className="title-container">
          <h1>My Address</h1>
          <p>
            {" "}
            Explore conditional rendering by fetching address details from an
            external API. The data is displayed only when successfully
            retrieved, showcasing how to handle loading states, API errors, and
            dynamic UI updates effectively.
          </p>
        </div>
        {displayAddress && (
          <div className="address-display">{displayAddress}</div>
        )}
        <div className="form-group">
          <label htmlFor="region">Region</label>
          <select
            id="region"
            value={selectedRegion}
            onChange={handleRegionChange}
          >
            <option value="">Select a Region</option>
            {regions.map((region) => (
              <option key={region.code} value={region.code}>
                {region.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="province">Province</label>
          <select
            id="province"
            value={selectedProvince}
            onChange={handleProvinceChange}
          >
            <option value="">Select a Province</option>
            {provinces.map((province) => (
              <option key={province.code} value={province.code}>
                {province.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="city">City/Municipality</label>
          <select id="city" value={selectedCity} onChange={handleCityChange}>
            <option value="">Select a City</option>
            {cities.map((city) => (
              <option key={city.code} value={city.code}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="barangay">Barangay</label>
          <select
            id="barangay"
            value={selectedBarangay}
            onChange={(e) => setSelectedBarangay(e.target.value)}
          >
            <option value="">Select a Barangay</option>
            {barangays.map((barangay) => (
              <option key={barangay.code} value={barangay.code}>
                {barangay.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="zipCode">ZIP Code</label>
          <input
            id="zipCode"
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="otherAddress">Other Address (Optional)</label>
          <input
            id="otherAddress"
            type="text"
            value={otherAddress}
            onChange={(e) => setOtherAddress(e.target.value)}
          />
        </div>
        <button onClick={handleConfirm}>Confirm</button>
      </div>
    </div>
  );
}

export default AssignmentFour;
