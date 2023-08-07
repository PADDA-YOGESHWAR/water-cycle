import React from 'react'
import { useState } from 'react';
import './skycomponents.css';


export default function Sun(props) {
  const [time, setTime] = useState(600);
  const [x,setX]=useState(50);
  const [y,setY]=useState(270);
  const [c,setC]=useState('#f02f2f');
  const[op,setOp]=useState(98);
  //const [opacity,setOpacity]=useState(50);
  const change_time =   (event) => {
    setTime(event.target.value);
    if(time>=600&&time<625){
      setC('#ff4000')
      setOp(98)
      setX(50)
      setY(270)
    }
    else if(time>=625&&time<650)
    {
      setC('#ff4000')
      setOp(96)
      setX(62)
      setY(258)
    }
    else if(time>=650&&time<675)
    {
      setC('#ff4000')
      setOp(94)
      setX(75)
      setY(245)
    }
    else if(time>=675&&time<700)
    {
      setC('#ff4000')
      setOp(92)
      setX(83)
      setY(233)
    }
    else if(time>=700&&time<725)
    {
      setC('#ff4000')
      setOp(90)
      setX(90)
      setY(220)
    }
    else if(time>=725&&time<750)
    {
      setC('#ff4000')
      setOp(88)
      setX(102)
      setY(208)
    }
    else if(time>=750&&time<775)
    {
      setC('#ff4000')
      setOp(86)
      setX(116)
      setY(195)
    }
    else if(time>=775&&time<800)
    {
      setC('#ff4000')
      setOp(84)
      setX(130)
      setY(183)
    }
    else if(time>=800&&time<825)
    {
      setC('#ff8000')
      setOp(82)
      setX(142)
      setY(170)
    }
    else if(time>=825&&time<850)
    {
      setC('#ff4000')
      setOp(80)
      setX(157)
      setY(158)
    }
    else if(time>=850&&time<875)
    {
      setC('#ff4000')
      setOp(78)
      setX(172)
      setY(145)
    }
    else if(time>=875&&time<900)
    {
      setC('#ff4000')
      setOp(76)
      setX(185)
      setY(133)
    }
    else if(time>=900&&time<925)
    {
      setC('#ff8000')
      setOp(74)
      setX(202)
      setY(120)
    }
    else if(time>=925&&time<950)
    {
      setC('#ffd633')
      setOp(72)
      setX(225)
      setY(108)
    }
    else if(time>=950&&time<975)
    {
      setC('#ffd633')
      setOp(74)
      setX(242)
      setY(95)
    }
    else if(time>=975&&time<1000)
    {
      setC('#ffd633')
      setOp(76)
      setX(270)
      setY(83)
    }
    else if(time>=1000&&time<1025)
    {
      setC('#ffd633')
      setOp(78)
      setX(290)
      setY(70)
    }
    else if(time>=1025&&time<1050)
    {
      setC('#ffd633')
      setOp(80)
      setX(322)
      setY(58)
    }
    else if(time>=1050&&time<1075)
    {
      setC('#ffd633')
      setOp(82)
      setX(350)
      setY(45)
    }
    else if(time>=1075&&time<1100)
    {
      setC('#ffd633')
      setOp(84)
      setX(380)
      setY(33)
    }
    else if(time>=1100&&time<1125)
    {
      setC('#ffd633')
      setOp(86)
      setX(408)
      setY(20)
    }
    else if(time>=1125&&time<1150)
    {
      setC('#ffd633')
      setOp(88)
      setX(425)
      setY(11)
    }
    else if(time>=1150&&time<1175)
    {
      setC('#ffd633')
      setOp(90)
      setX(450)
      setY(8)
    }
    else if(time>=1175&&time<1200)
    {
      setC('ffd633')
      setOp(92)
      setX(480)
      setY(5)
    }
    else if(time>=1200&&time<1225)
    {
      setC('ffd633')
      setOp(94)
      setX(500)
      setY(0)
    }
    else if(time>=1225&&time<1250)
    {
      setC('ffd633')
      setOp(96)
      setX(520)
      setY(5)
    }
    else if(time>=1250&&time<1275)
    {
      setC('#f4fd04')
      setOp(98)
      setX(550)
      setY(8)
    }
    else if(time>=1275&&time<1300)
    {
      setC('#f4fd04')
      setOp(96)
      setX(575)
      setY(11)
    }
    else if(time>=1300&&time<1325)
    {
      setC('#f4fd04')
      setOp(94)
      setX(592)
      setY(20)
    }
    else if(time>=1325&&time<1350){
      setC('#fff700')
      setOp(92)
      setX(620)
      setY(33)
    }
    else if(time>=1350&&time<1375)
    {
      setC('#fff700')
      setOp(90)
      setX(650)
      setY(45)
    }
    else if(time>=1375&&time<1400)
    {
      setC('#fff700')
      setOp(88)
      setX(678)
      setY(58)
    }
    else if(time>=1400&&time<1425)
    {
      setC('#f4fd04')
      setOp(86)
      setX(710)
      setY(70)
    }
    else if(time>=1425&&time<1450)
    {
      setC('#ffd633')
      setOp(84)
      setX(730)
      setY(83)
    }
    else if(time>=1450&&time<1475)
    {
      setC('#ffd633')
      setOp(82)
      setX(758)
      setY(95)
    }
    else if(time>=1475&&time<1500)
    {
      setC('#ffd633')
      setOp(80)
      setX(775)
      setY(108)
    }
    else if(time>=1500&&time<1525)
    {
      setC('#ffd633')
      setOp(78)
      setX(798)
      setY(120)
    }
    else if(time>=1525&&time<1550)
    {
      setC('#ffd633')
      setOp(78)
      setX(815)
      setY(133)
    }
    else if(time>=1550&&time<1575)
    {
      setC('#ffd633')
      setOp(80)
      setX(828)
      setY(145)
    }
    else if(time>=1575&&time<1600)
    {
      setC('#ffd633')
      setOp(82)
      setX(843)
      setY(158)
    }
    else if(time>=1600&&time<1625)
    {
      setC('#ffd633')
      setOp(84)
      setX(858)
      setY(170)
    }
    else if(time>=1625&&time<1650)
    {
      setC('#ffd633')
      setOp(86)
      setX(870)
      setY(183)
    }
    else if(time>=1650&&time<1675)
    {
      setC('#ff8000')
      setOp(88)
      setX(884)
      setY(195)
    }
    else if(time>=1675&&time<1700)
    {
      setC('#ff8000')
      setOp(90)
      setX(898)
      setY(212)
    }
    else if(time>=1700&&time<1725)
    {
      setC('#ff8000')
      setOp(92)
      setX(910)
      setY(228)
    }
    else if(time>=1725&&time<1750)
    {
      setC('#ff4000')
      setOp(94)
      setX(917)
      setY(245)
    }
    else if(time>=1750&&time<1775)
    {
      setC('#ff4000')
      setOp(96)
      setX(925)
      setY(258)
    }
    else 
    {
      setC('#ff4000')
      setOp(98)
      setX(938)
      setY(270)
    }
  };

  return (
    <>
    <div className="dayPane"> 
    <input 
    
        id = 'myRange'
        type='range'
        onChange={change_time}
        min={600}
        max={1800}
        
        className='custom-slider'/>

        <label>Time is   {parseInt(time/100)}:{parseInt((time%100)/1.666666667)}</label>
        
              <span  className='demo' style={{opacity :`${op}%`, backgroundColor: `${c}`, marginTop: `${y+50}px`, marginLeft:`${x}px`}}></span>
              
    </div>
    
    </>
  )
}

