import { Link } from "react-router-dom";
import Loading from "./Loading";
import Cocktail from "./Cocktail";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { data_cocktails, loading, setSearchTerm } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (data_cocktails.length <= 0) {
    return (
      <div className="page">
        <h2>Can't find cocktail with that keyword</h2>
        <Link to="/" className="btn" onClick={() => setSearchTerm("a")}>
          Go Back
        </Link>
      </div>
    );
  }
  return (
    <div className="cocktail-list">
      <h2>Cocktails</h2>
      <div className="cocktails">
        {data_cocktails.map((data) => {
          return <Cocktail key={data.id} {...data} />;
        })}
      </div>
    </div>
  );
};

export default CocktailList;
