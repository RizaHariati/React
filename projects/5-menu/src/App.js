import React, { useState, useContext } from "react";
import menu from "./data";
import Category from "./Category";
import Menu from "./Menu";

const MenuContext = React.createContext();
function App() {
  const [menuItems, setMenuItems] = useState(menu);
  const category = ["All", ...new Set(menu.map((item) => item.category))];

  const filterItems = (selected) => {
    if (selected === "all") {
      setMenuItems(menu);
    } else {
      const newMenu = menu.filter((item) => item.category === selected);
      setMenuItems(newMenu);
    }
  };
  return (
    <MenuContext.Provider value={{ category, filterItems }}>
      <header>
        <h1>Our Menu</h1>
        <div className="line"></div>
      </header>
      <nav className="navbar">
        <Category />
      </nav>
      <div className="menu-container">
        {menuItems.map((item) => {
          return <Menu key={item.id} {...item} />;
        })}
      </div>
    </MenuContext.Provider>
  );
}
export { MenuContext };
export default App;
