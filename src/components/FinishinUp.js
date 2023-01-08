import React from "react";

function FinishingUp({ formData, setFormData }) {
  return (
    <div className="finishing-up-container">
      <input
        type="text"
        placeholder="Random..."
        value={formData.nationality}
        onChange={(e) => {
          setFormData({ ...formData, nationality: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Other..."
        value={formData.other}
        onChange={(e) => {
          setFormData({ ...formData, other: e.target.value });
        }}
      />
    </div>
  );
}

export default FinishingUp;