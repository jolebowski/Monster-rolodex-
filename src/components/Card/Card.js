import "./card.css";

const Card = ({ monster: { id, name, email } }) => (
  <div className="card">
    <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2`} />
    <h2>{name}</h2>
    <p>{email}</p>
  </div>
);
export default Card;
