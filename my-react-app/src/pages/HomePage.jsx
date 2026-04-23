import { useState, useEffect } from 'react';
import PropertyCard from '../components/PropertyCard';



function HomePage(){

    // if we had an API, we would fetch properties here and set them in state
    const [properties,setProperties] = useState([]);

    const [loading, setLoading] = useState(true);
useEffect(() => {
    // Simulate API call
    console.log("API den komponent yuklendi ...");
    setTimeout(() => {
        const dataFromServer=[
            { id: 1, title: "Modern Villa", location: "Mary, TM", price: "50,000" },
        { id: 2, title: "Office Center", location: "Ashgabat, TM", price: "200,000" }

        ];
        setProperties(dataFromServer);//infony stateda saklayas 
        setLoading(false);//zagurskany ocuryas 
    }, 2000);  // iki min garashyas 
}, []);


    return(
        <div style={{ padding: '40px' }}>
            <h2>Available Properties</h2>
            {loading && <h3> Loading properties from server...</h3>}
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>

              {properties.map((item) => (
          <PropertyCard 
            key={item.id} 
            title={item.title} 
            location={item.location} 
            price={item.price} 
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
