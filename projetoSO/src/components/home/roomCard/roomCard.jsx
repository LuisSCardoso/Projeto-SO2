import React from 'react';
import './RoomCard.css';

const RoomCard = ({ room }) => {
    return (
        <div className="room-card">
            <img src={room.photo} alt={`Foto da ${room.name}`} className="room-photo" />
            <div className="room-details">
                <h2 className="room-name">{room.name}</h2>
                <p><strong>Local:</strong> {room.location}</p>
                <p><strong>Data de uso:</strong> {room.date}</p>
                <p><strong>Hora Início:</strong> {room.startTime}</p>
                <p><strong>Hora Final:</strong> {room.endTime}</p>
                <p><strong>Responsável:</strong> {room.responsible}</p>
            </div>
        </div>
    );
};

export default RoomCard;
