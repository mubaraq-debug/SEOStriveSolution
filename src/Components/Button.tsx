import React, { ButtonHTMLAttributes, useState} from 'react'
import '../Styles/ComponentStyles/Button.scss'

interface ButttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  color: string;
  bgColor: string;
  bgHoverColor: string;
  textHoverColor: string;
  borderHoverColor: string;
  borderHoverStyle?: string; 
}

const Button: React.FC<ButttonProps> = ({value, color, bgColor, bgHoverColor, textHoverColor, borderHoverColor, borderHoverStyle}) => {
  const [isHovered,setIsHovered] = useState(false);
  // const [hoverColor, setHoverColor] = useState(color)

  const handleMouseEnter =  () => {
    setIsHovered(true);
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
  }
  
  const buttonStyle: React.CSSProperties = {
    backgroundColor: isHovered ? bgHoverColor : bgColor,
    color: isHovered ? textHoverColor : color,
    borderColor: isHovered ? borderHoverColor : "initial",
  }
  return ( 
    <button className='button' style={buttonStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {value}
    </button>
   );
}
 
export default Button;