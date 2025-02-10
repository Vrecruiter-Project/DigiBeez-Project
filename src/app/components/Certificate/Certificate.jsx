
import React from "react";
import Certificate from '../../../assets/Certificate/certificate.png';
import { Container } from "@mui/material";

const Certificatee = () => {
  return (
    <Container>
      <div className="flex flex-col items-center py-10 px-4">
        <div className="flex flex-col md:flex-row items-center bg-green-100 p-6 rounded-lg max-w-6xl w-full">
          <div className="w-full justify-center flex md:w-1/2">
            <img src={Certificate} alt="NSDC Certificate" className="" />
          </div>
          <div className="w-full md:w-1/2 md:pl-6 mt-4 md:mt-0 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">Empowering the Next Generation of Tech Talent.</h2>
            <p className="text-gray-600">
              Approved training partner of National Skill Development Corporation (NSDC), India
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Certificatee;