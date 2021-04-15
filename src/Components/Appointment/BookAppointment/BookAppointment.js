import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const bookingData = [
    {
        _id: '1',
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 Am-9:00 Am',
        totalSpace: 10
    },
    {
        _id: '2',
        subject: 'Cosmotic Dentristey ',
        visitingHour: '10:05 Am-11:30 Am',
        totalSpace: 10
    },
    {
        _id: '3',
        subject: 'Teeth Clearing',
        visitingHour: '5:00 Am-6:30 Am',
        totalSpace: 10
    },
    {
        _id: '4',
        subject: 'Cavity Porection',
        visitingHour: '7:00 Am-8:30 Am',
        totalSpace: 10
    },
    {
        _id: '1',
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 Am-9:00 Am',
        totalSpace: 10
    },
    {
        _id: '1',
        subject: 'Teeth Orthodontics',
        visitingHour: '9:00 Am-11:30 Am',
        totalSpace: 10
    }
]

const BookAppointment = ({ date }) => {
    return (
        <section>
            <h2 className="text-center text-brand mb-5">Available Appointments on {date.toDateString()}</h2>

               <div className="container">
               <div className="row">
                    {
                        bookingData.map( booking => <BookingCard key={booking._id} date={date} booking={booking} />)
                    }
                </div>
               </div>

        </section>
    );
};

export default BookAppointment;