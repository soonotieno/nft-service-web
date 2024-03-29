import React from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "components/AppLayout";
import About from "./About";
import Home from "./Home";
import AccountRoutes from "./accounts";

function Root() {
    return(
        <AppLayout>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route path="/accounts/*" element={<AccountRoutes />}/>
            </Routes>
            
        </AppLayout>
        );
}

export default Root;