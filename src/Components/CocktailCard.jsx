import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/CocktailCard";

const CocktailCard = ({ id, name, image, info, glass }) => {
  return (
    <Wrapper>
      <div className='img-container'>
        <img src={image} alt={name} className='img' />
      </div>
      <div className='footer'>
        <h4>{name}</h4>
        <h5>{info}</h5>
        <p>{glass}</p>
        <Link to={`/cocktail/${id}`} className='btn'>
          Detials
        </Link>
      </div>
    </Wrapper>
  );
};
export default CocktailCard;
