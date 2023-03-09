import patternMobile from "../images/patternMobile.svg";

const Card = ({ advice, id }) => {
  return (
    <div className="card">
      <p className="title">ADVICE #{id}</p>
      <blockquote className="card">"{advice}"</blockquote>
      <img className="img--pattern" src={patternMobile} alt="" aria-hidden="true" />
    </div>
  )
}

export default Card