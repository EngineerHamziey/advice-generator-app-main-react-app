import iconDice from "../images/iconDice.svg"

const Button = ({ onPress }) => {
  return (
    
    <button className='btn btn--advice' onClick={onPress}>
      <img className="btn__icon" src={iconDice} alt="" />
    </button>
    
  )
}

export default Button