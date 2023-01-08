import React from "react";

function SignUpInfo({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
      <div>Name</div>
      <input
        type="text"
        placeholder="Full Name"
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      />
      <div>Email Adress</div>
       <input
        type="text"
        placeholder="Email Adress"
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
      <div>Phone Number</div>
      <input
        type="text"
        placeholder="Confirm Password..."
        value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        }
      />
    </div>
  );
}

export default SignUpInfo;