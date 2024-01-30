import React, { ButtonHTMLAttributes} from 'react'
import '../Styles/ComponentStyles/Button.scss'

interface ButttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  color: string;
  bgColor: string;
}

const Button: React.FC<ButttonProps> = ({value, color, bgColor}) => {
  const buttonStyle = {
    color: color,
    backgroundColor: bgColor,
  }
  return ( 
    <button className='button' style={buttonStyle}>
      {value}
    </button>
   );
}
 
export default Button;