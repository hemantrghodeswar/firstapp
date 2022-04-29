import React from "react";
import Jotfrom from "./Jotfrom";
import SideBarForm from "./Sidebarform";
// import NavbarTwo from "./../shared/Navbar";
import NavbarTwo from '../shared/NavbarTwo'

const CreateForm = () => {
    return (
        <>
        <NavbarTwo />
        <Jotfrom />
        <div>
         <SideBarForm />
         </div>
        </>
    );
};

export default CreateForm;