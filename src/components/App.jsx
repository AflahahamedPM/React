import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
// project structure

/**
 *  - HeaderComponent
 *   - Logo
 *   - NavItems
 * - BodyComponent
 *   - Search
 *   - CardContainer
 *   - CardComponent
 *      -image
 *      -restaurent name
 *      -rating, delivery time, cuisine
 * - FooterComponent
 *   - Copyright
 *   - Links
 *   - Contact
 *   - Address
 */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

export default AppLayout;
