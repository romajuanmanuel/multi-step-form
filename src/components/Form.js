import React, {useState} from 'react';

function Form(){

    const [page, setPage] = useState(0);
    const FormTitles = ["Sing Up", "Personal Info", "Oter"]
    return(
        <div cassName="form">
            <div className="progressbar"></div>
            <div className="form-container"></div>
                <div className="header">
                    <h1>{FormTitles[page]}</h1>
                </div>
                <div className="body"></div>
                <div className="footer"></div>
                <button>Prev</button>
                <button>Next</button>
        </div>
    )
}

export default Form;