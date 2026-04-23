import { useState, useEffect } from 'react';
import PropertyCard from '../components/PropertyCard';

function HomePage() {
  const [properties, setProperties] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // New state for search
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated API call
    setTimeout(() => {
      const dataFromServer = [
        { id: 1, title: "Modern Villa", location: "Mary, TM", price: "50,000" },
        { id: 2, title: "Luxury Penthouse", location: "Cluj Napoca, RO", price: "500,000" },
        { id: 3, title: "Office Center", location: "Ashgabat, TM", price: "200,000" },
        { id: 4, title: "Family Home", location: "Bucharest, RO", price: "300,000" }
      ];
      setProperties(dataFromServer);
      setLoading(false);
    }, 1000);
  }, []);

  // 3. Filter logic: This happens on every render
  const filteredProperties = properties.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '40px', color: 'white' }}>
      <h2>Real Estate Directory</h2>

      {/* SEARCH BAR */}
      <input 
        type="text" 
        placeholder="Search by city or title..." 
        style={{
          padding: '12px',
          width: '100%',
          maxWidth: '400px',
          borderRadius: '8px',
          border: '1px solid #555',
          backgroundColor: '#222',
          color: 'white',
          marginBottom: '20px'
        }}
        onChange={(e) => setSearchTerm(e.target.value)} 
      />

      {loading && <h3>⌛ Loading...</h3>}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {filteredProperties.length > 0 ? (
          filteredProperties.map((item) => (
            <PropertyCard key={item.id} {...item} />
          ))
        ) : (
          !loading && <p>No properties found matching "{searchTerm}"</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;