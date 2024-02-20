import React from "react";
import HeaderComponent from "./Header";
import BodyComponent from "./Body";
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
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
};

export default AppLayout;
