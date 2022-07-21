import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { rgbToHex } from './rbgtohex'


export const SingleButtons = ({ weight, rgb, index, hexcolor }) => {
  const [Alert,SetAlert] = useState(false);
  const bcg = rgb.join(",");
  const hex = rgbToHex(...rgb);
  const hexClr = `#${hexcolor}`;
  console.log(hex);

  useEffect(()=>{
   const Timeout = setTimeout(()=>{
         SetAlert(false);
      },2000)
    return ()=> clearTimeout(Timeout);
  },[Alert])

  return (
    <div className="buttondiv" key={index}>
      <button
        className="buttons"
        type="button"
        style={{ backgroundColor: `rgb(${bcg})` }}
        onClick={() => {
          SetAlert(true);
          navigator.clipboard.writeText(hexClr);
        }}
      >
        <div className={`buttoninsidediv ${index > 10 && `buttoninsidediv2`}`}>
          <p>{`${weight}%`}</p>
          <p>{hexClr}</p>
          {Alert && <p className="clipboard">Copied to Clipboard</p>}
        </div>
      </button>
    </div>
  );
};
