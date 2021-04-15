import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {

    data.service = appointmentOn;
    data.date = date.toDateString()

    fetch('http://localhost:5000/AddAppointment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {

        if (result) {
          closeModal();
          alert('Appointment successful.')
        }

      })

    console.log(data);

  };

  return (
    <div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

        <h2 className="text-center text-brand" >{appointmentOn}</h2>
        <h5 className="text-center text-secondary">{date.toDateString()}</h5>

        <form style={{ width: '400px', padding: '20px' }} className="text-center" onSubmit={handleSubmit(onSubmit)}>

          <select ref={register({ required: true })} class="form-select" aria-label="Default select example">
            <option disabled={true} selected>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {/* <select {...register("gender")}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select> */}
          <br />

          <input className='form-control' name="name" ref={register({ required: true })} placeholder="Your Name" />
          {errors.name && <span className="text-red">Name is required</span>}
          <br />

          <input className='form-control' name="phone" ref={register({ required: true })} placeholder="Phone Number" />
          {errors.phone && <span className="text-red">Phone is required</span>}
          <br />

          <input className='form-control' name="email" ref={register({ required: true })} placeholder="Email" />
          {errors.email && <span className="text-red">Email is required</span>}
          <br />

          <input className="btn-brand" value="send" type="submit" />
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentForm;