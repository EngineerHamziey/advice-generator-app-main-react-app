import patternMobile from "../images/patternMobile.svg";

const Card = ({ advice, id }) => {
  return (
    <div className="card">
      <p className="card__title">ADVICE #{id}</p>
      <blockquote className="card__quote">"{advice}"</blockquote>
      <img className="card__pattern" src={patternMobile} alt="" aria-hidden="true" />
    </div>
  )
}

export default Card