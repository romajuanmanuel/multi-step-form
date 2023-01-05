import React, {useState} from 'react';

function Form(){

    const [page, setPage] = useState(0);
    return(
        <div cassName="form">
            <div className="progressbar"></div>
            <div className="form-container"></div>
                <div className="header"></div>
                <div className="body"></div>
                <div className="footer"></div>
                <button>Prev</button>
                <button>Next</button>
        </div>
    )
}

export default Form;