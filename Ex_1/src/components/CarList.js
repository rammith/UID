import React, { useState } from 'react';

const cars = [
  { id: 1, brand: 'Tesla', name: 'Tesla Model S', price: '$80,000', image: 'car1.jpg', description: 'The Tesla Model S is an all-electric luxury sedan with cutting-edge technology.' },
  { id: 2, brand: 'BMW', name: 'BMW X5', price: '$60,000', image: 'car2.avif', description: 'The BMW X5 is a mid-sized luxury SUV with excellent performance and comfort.' },
  { id: 3, brand: 'Audi', name: 'Audi A4', price: '$50,000', image: 'car3.jpg', description: 'The Audi A4 is a compact executive car known for its refined design and advanced technology.' },
  { id: 4, brand: 'Hyundai', name: 'Hyundai Elantra', price: '$30,000', image: 'car4.jpg', description: 'The Hyundai Elantra is a stylish sedan with great fuel economy and value.' },
  { id: 5, brand: 'Bugatti', name: 'Bugatti Veyron', price: '$1,500,000', image: 'car5.jpg', description: 'The Bugatti Veyron is a high-performance sports car with a sleek design and incredible speed.' },
  { id: 6, brand: 'Audi', name: 'Audi Q7', price: '$70,000', image: 'car6.jpg', description: 'The Audi Q7 is a luxury SUV with a spacious interior and cutting-edge technology.' },
  { id: 7, brand: 'BMW', name: 'BMW M3', price: '$80,000', image: 'car7.jpg', description: 'The BMW M3 is a high-performance sedan with exceptional handling and power.' },
  { id: 8, brand: 'Hyundai', name: 'Hyundai Sonata', price: '$35,000', image: 'car8.jpg', description: 'The Hyundai Sonata is a reliable midsize sedan with excellent features and a smooth ride.' },
];

const CarList = () => {
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedCar, setSelectedCar] = useState(null);

  // Filter cars by selected brand
  const filteredCars = selectedBrand === 'All' ? cars : cars.filter(car => car.brand === selectedBrand);

  // Function to handle when a car is clicked to view details
  const handleCarClick = (car) => {
    setSelectedCar(car);
  };

  // Function to handle going back to the car list
  const handleBack = () => {
    setSelectedCar(null);
  };

  // Function to handle brand filter change
  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
    setSelectedCar(null);  // Reset any selected car when changing brands
  };

  // If a car is selected, show its details
  if (selectedCar) {
    return (
      <div className="car-details">
        <img src={selectedCar.image} alt={selectedCar.name} className="car-image-details" />
        <h2>{selectedCar.name}</h2>
        <p>{selectedCar.description}</p>
        <p>Price: {selectedCar.price}</p>
        <button className="buy-button">Buy</button>
        <button onClick={handleBack} className="back-button">Back to Car List</button>
      </div>
    );
  }

  // Show car list with brand filtering buttons
  return (
    <div>
      {/* Brand classification buttons */}
      <div className="brand-filters">
        <button onClick={() => handleBrandChange('All')}>All</button>
        <button onClick={() => handleBrandChange('Audi')}>Audi</button>
        <button onClick={() => handleBrandChange('BMW')}>BMW</button>
        <button onClick={() => handleBrandChange('Hyundai')}>Hyundai</button>
        <button onClick={() => handleBrandChange('Bugatti')}>Bugatti</button>
        <button onClick={() => handleBrandChange('Tesla')}>Tesla</button>
      </div>

      {/* Display the filtered list of cars */}
      <div className="car-list">
        {filteredCars.map(car => (
          <div key={car.id} className="car-card" onClick={() => handleCarClick(car)}>
            <img src={car.image} alt={car.name} className="car-image" />
            <h2>{car.name}</h2>
            <p>{car.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarList;
