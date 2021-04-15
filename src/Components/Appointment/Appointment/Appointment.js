import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {

    const [selectedDate,setSelectedDate]=useState(new Date());

    const handleDataChange = date =>{
              
        setSelectedDate(date);
    }
    return (
        <div>
            <Navbar />
            <AppointmentHeader handleDataChange={handleDataChange} />
            <BookAppointment date={selectedDate} />
            <Footer />
           
        </div>
    );
};

export default Appointment;