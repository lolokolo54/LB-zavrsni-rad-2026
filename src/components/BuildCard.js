import { Link } from "react-router-dom";


function BuildCard(props) {
  return (
    <Link to="/tutorials" className="card-link">
    <div className="card">
      <h3>{props.naslov}</h3>
      <p>{props.opis}</p>
      <p>{props.god}</p>
      <p>{props.komp}</p>
    </div>
    </Link>
  );
}

export default BuildCard;