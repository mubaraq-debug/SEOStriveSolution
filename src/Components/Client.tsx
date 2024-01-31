import React, { AllHTMLAttributes } from 'react';
// import person from '../assets/cleint.avif';
import '../Styles/ComponentStyles/Client.scss'
// import 'animate.css'

interface ClientProps extends AllHTMLAttributes<HTMLDivElement> {
  text: string;
  lineColor: string;
  name: string;
  position: string;
  image: any;
}

const Client: React.FC<ClientProps> = ({text, lineColor, name, position, image}) => {

  const lineStyle = {
    backgroundColor: lineColor,
  }
  return (
    <div className="client-card">
      <img src={image} alt="img" height="140px" width="145px" />
      <p className="text">
       {text}
      </p>
      <div className="line" style={lineStyle}></div>
      <p className="name">{name}</p>
      <p className="pos">{position}</p>
    </div>
  );
}
 
export default Client;