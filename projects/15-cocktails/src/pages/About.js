import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="page">
      <h1>About</h1>
      <p className="text">
        A cocktail is a mixed drink typically made with a distilled liquor (such
        as arrack, brandy, cachaça, gin, rum, tequila, vodka, or whiskey) as its
        base ingredient that is then mixed with other ingredients or
        garnishments. Sweetened liqueurs, wine, or beer may also serve as the
        base or be added. If beer is one of the ingredients, the drink is called
        a beer cocktail. Cocktails often also contain one or more types of
        juice, fruit, honey, milk or cream, spices, or other flavorings.
        Cocktails may vary in their ingredients from bartender to bartender, and
        from region to region. Two creations may have the same name but taste
        very different because of differences in how the drinks are prepared.
      </p>
      <Link to="/" className="btn">
        Go Back
      </Link>
    </div>
  );
};

export default About;
