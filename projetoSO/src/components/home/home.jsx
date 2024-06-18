import React from 'react';
import Sidebar from './sidebar/sidebar';
import RoomCard from './roomCard/roomCard';
import './Home.css';

const Home = () => {
    const rooms = [
        {
            name: "Sala de Reuniões",
            photo: "https://via.placeholder.com/300",
            location: "Prédio A, 3º Andar",
            date: "25/06/2024",
            startTime: "14:00",
            endTime: "16:00",
            responsible: "João Silva"
        },
        {
            name: "Sala de Conferências",
            photo: "https://via.placeholder.com/300",
            location: "Prédio B, 1º Andar",
            date: "26/06/2024",
            startTime: "10:00",
            endTime: "12:00",
            responsible: "Maria Oliveira"
        },
        {
            name: "Sala de Treinamento",
            photo: "https://via.placeholder.com/300",
            location: "Prédio C, Térreo",
            date: "27/06/2024",
            startTime: "09:00",
            endTime: "11:00",
            responsible: "Carlos Santos"
        }
    ];

    return (
        <div className="home">
            <Sidebar />
            <div className="content">
                {rooms.map((room, index) => (
                    <RoomCard key={index} room={room} />
                ))}
            </div>
        </div>
    );
};

export default Home;
