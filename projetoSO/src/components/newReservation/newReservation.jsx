import React, { useState } from 'react';
import Sidebar from '../home/sidebar/sidebar';
import './NewReservation.css';

const NewReservation = () => {
    const [formData, setFormData] = useState({
        name: '',
        file: null,
        location: '',
        date: '',
        startTime: '',
        endTime: '',
        responsible: '',
        reason: '',
        info: '',
        guests: ''
    });
    const [backendIp, setBackendIp] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            file: e.target.files[0]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestData = new FormData();
        requestData.append('name', formData.name);
        requestData.append('file', formData.file);
        requestData.append('location', formData.location);
        requestData.append('date', formData.date);
        requestData.append('startTime', formData.startTime);
        requestData.append('endTime', formData.endTime);
        requestData.append('responsible', formData.responsible);
        requestData.append('reason', formData.reason);
        requestData.append('info', formData.info);
        requestData.append('guests', formData.guests)
        
        console.log(requestData)

        const request = fetch(`http://${backendIp || 'localhost'}::4000/reservation/create`, {
            method: 'POST',
            body: requestData
        })
    
        const response = await request

    };

    return (
        <div className="new-reservation">
            <Sidebar />
            <div className="form-container">
                <form className="reservation-form" onSubmit={handleSubmit}>
                    <h2>Criar Nova Reserva</h2>
                    <div className="form-group">
                        <label htmlFor="name">Nome da Sala:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="file">Foto Ilustrativa da Sala:</label>
                        <input
                            type="file"
                            id="file"
                            name="file"
                            onChange={handleFileChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Local da Sala:</label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Data de uso:</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="startTime">Hora Início do uso:</label>
                        <input
                            type="time"
                            id="startTime"
                            name="startTime"
                            value={formData.startTime}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="endTime">Hora Final do uso:</label>
                        <input
                            type="time"
                            id="endTime"
                            name="endTime"
                            value={formData.endTime}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="responsible">Responsável pelo uso:</label>
                        <input
                            type="text"
                            id="responsible"
                            name="responsible"
                            value={formData.responsible}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="reason">Motivo do uso:</label>
                        <input
                            type="text"
                            id="reason"
                            name="reason"
                            value={formData.reason}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="info">Informações em geral:</label>
                        <textarea
                            id="info"
                            name="info"
                            value={formData.info}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="guests">Convidados:</label>
                        <input
                            type="text"
                            id="guests"
                            name="guests"
                            value={formData.guests}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Criar Reserva</button>
                </form>
            </div>
        </div>
    );
};

export default NewReservation;
