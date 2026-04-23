import { useState } from 'react';



function PropertyCard( props ) {

const [showInfo, setShowInfo] = useState(false);
const [isSold, setIsSold] = useState(true);

const cardStyle = {
    border: '1px solid #444',
    borderRadius: '10px',
    padding: '20px',
    margin: '10px',
    backgroundColor: '#1e1e1e', 
    width: '300px'};

    return (

        <div style={cardStyle}>
            <h3 style={{ color: '#00a8ff' }}>{props.title}</h3>
            <p>📍 Location: {props.location}</p>
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                Price:${props.price}
            </p>
            <button 
            onClick={()=> setShowInfo(!showInfo)}
            
            
            style={{ 
        backgroundColor: '#00a8ff', 
        color: 'white', 
        border: 'none', 
        padding: '10px', 
        borderRadius: '5px',
        cursor: 'pointer' 
      }}>
       {showInfo ? 'Hide Details' : 'View Details'}
      </button>

      {showInfo && (
        <div style={{ marginTop: '15px', padding: '10px', background: '#333' }}>
          <p>This is a premium property with 3 bedrooms and a private pool.</p>
        </div>
      )}
    </div>
  );
}

export default PropertyCard;