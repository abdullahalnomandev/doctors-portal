import React, { useState } from 'react';
import Sidebar from '../Dashbord/Sidebar/Sidebar';

const AddDoctor = () => {

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {

        const newInfo = { ...info }
        newInfo[e.target.name] = e.target.value;

        setInfo(newInfo);
    }

    const handleFileChange = (e) => {

        const newFile = e.target.files;

        setFile(newFile[0]);

    }

    const handleSubmit = () => {

        const formData = new FormData()
       
        formData.append('name', info.name);
        formData.append('email', info.email);
        formData.append('file', file);
        fetch('http://localhost:5000/addDoctor', {

            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }


    return (
        <section >

            <div className="container-fluid">
                <div className="row">

                    <div className="col-md-2">
                        <Sidebar />
                    </div>
                    <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                        <h5>Add a Doctor</h5>
                        <form onSubmit={handleSubmit} >
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" onBlur={handleBlur} name="email" placeholder="Enter email" />

                            </div>

                            <div class="form-group">
                                <label for="exampleInputPassword1">Name</label>
                                <input type="text" class="form-control" name="name" onBlur={handleBlur} placeholder="Name" />
                            </div>
                            <br />

                            <div class="form-group">
                                <label for="exampleInputPassword1">Upload aa image</label>
                                <input onChange={handleFileChange} type="file" class="form-control" id="exampleInputPassword1" placeholder="picture" />
                            </div>
                            <br />
                            <br />
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddDoctor;