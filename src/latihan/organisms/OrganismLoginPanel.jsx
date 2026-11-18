import React from "react";
import AtomCard from "../atoms/AtomCard";
import AtomButton from "../atoms/AtomButton";
import MoleculeFormField from "../molecules/MoleculeFormField";

const OrganismLoginPanel = () => {
  return (
    <AtomCard>
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-primary">
          Welcome back
        </h1>

        <p className="mt-2 text-sm text-neutral-400">
          Masuk ke akun kamu untuk melanjutkan.
        </p>
      </div>

      <form className="p-5">
        <MoleculeFormField id="email" label="Email" type="email" />
        <br />
        <MoleculeFormField id="password" label="Password" type="password" />
        <br />
        <AtomButton type="submit" variant="primary">
          Login
        </AtomButton>
      </form>

      <p className="mt-6 text-center text-xs text-neutral-500">
        Dengan login, kamu menyetujui ketentuan layanan kami.
      </p>
    </AtomCard>
  );
};

export default OrganismLoginPanel;