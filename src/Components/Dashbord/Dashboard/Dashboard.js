import React, { useContext, useEffect, useState } from 'react';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';

const containerStyle = {

    backgroundColor: '#4FDFb',
    height: '100%'
}

const Dashboard = () => {
    const [loginUser, setLoginUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date().toDateString());
    const [appointments, setAppointments] = useState([]);

    const handleDataChange = date => {
        setSelectedDate(date.toDateString());
    }

    useEffect( () => {
        fetch('http://localhost:5000/appointmentsByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({ date: selectedDate, email: loginUser.email })
        })
        .then(res=>res.json())
        .then(data => setAppointments(data))
    }, [selectedDate])
   
    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar />
                </div>

                <div className="col-md-5">
                    <Calendar
                        onChange={handleDataChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-5">
                    <h6>Appointments:{appointments.length}</h6>
                    {
                        appointments.length ?
                            <AppointmentsByDate appointments={appointments} />
                            :
                            <div className="p-5">
                                <h4 className="lead text-center">No Appointments for this Date</h4>
                            </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default Dashboard;