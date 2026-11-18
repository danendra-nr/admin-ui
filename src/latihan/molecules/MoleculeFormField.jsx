import React from "react";
import AtomLabel from "../atoms/AtomLabel";
import AtomInput from "../atoms/AtomInput";

const MoleculeFormField = ({ id, label, type = "text" }) => {
  return (
    <>
      <div className="mb-1">
        <AtomLabel htmlFor={id}>{label}</AtomLabel>
        <br />
        <AtomInput id={id} name={id} type={type} />
      </div>
    </>
  );
};

export default MoleculeFormField;