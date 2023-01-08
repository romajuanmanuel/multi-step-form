import React, { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import SvgComponent from "./Svg";
import FinishingUp from "./FinishinUp";

function Form() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        username: "",
        nationality: "",
        other: "",
    });

    const FormTitles = ["Personal Info", "Select your Plan", "Pick Addons","Finising Up"];

    const PageDisplay = () => {
        if (page === 0) {
            return <SignUpInfo formData={formData} setFormData={setFormData} />;
        } else if (page === 1) { 
            return <SelectPlan formData={formData} setFormData={setFormData} />;
        } else if (page === 2) {
            return <PersonalInfo formData={formData} setFormData={setFormData} />;
        } else {
            return <FinishingUp formData={formData} setFormData={setFormData} />;
        }
    };

    return (
        <div className="form">
            <div className="container">
                <div className="form-container">
                    <div className="header">
                        <h1>{FormTitles[page]}</h1>
                    </div>
                    <div className="body">{PageDisplay()}</div>
                    <div className="footer">
                        <button className={page === 0 ? "hidden" : ""}
                            disabled={page == 0}
                            onClick={() => {
                                setPage((currPage) => currPage - 1);
                            }}
                        >
                            Prev
                        </button>
                        <button 
                            onClick={() => {
                                if (page === FormTitles.length - 1) {
                                    alert("FORM SUBMITTED");
                                    console.log(formData);
                                } else {
                                    setPage((currPage) => currPage + 1);
                                }
                            }}
                        >
                            {page === FormTitles.length - 1 ? "Submit" : "Next"}
                        </button>
                    </div>
                </div>
                <div className="progress">
                    <SvgComponent />
                </div>
            </div>
        </div>
    );
}

export default Form;