import React from "react";
import { Button, Card } from "@material-tailwind/react";

function Verify() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Verify your email</h1>
        <p className="mb-4">
          Check your email and click the link to activate your account.
        </p>
        
      </div>
    </div>
  );
}

export default Verify;
