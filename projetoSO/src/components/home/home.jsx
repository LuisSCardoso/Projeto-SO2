import React from 'react';
import Sidebar from './sidebar/sidebar';
import RoomCard from './roomCard/roomCard';
import './Home.css';
import { useEffect, useState } from 'react';


const Home = () => {

    const [reservations, setReservations] = useState([]);
    console.log(reservations)
    useEffect(() => {
        const fetchReservations = async () => {
          try {
            const response = await fetch('http://localhost:4000/reservation/fetch'); // Ajuste a URL conforme necessário
            if (response.ok) {
              const data = await response.json();
              setReservations(data);
            } else {
              console.error('Failed to fetch reservations');
            }
          } catch (error) {
            console.error('Error fetching reservations:', error);
          }
        };
    
        fetchReservations();
      }, []);
;

    return (
        <div className="home">
            <Sidebar />
            <div className="content">
                {reservations.map((reservation, index) => (
                    <RoomCard key={index} room={reservation} />
                ))}
            </div>
        </div>
    );
};

export default Home;
