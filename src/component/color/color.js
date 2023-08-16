import React, { useState } from "react";


function Color(){
    const [colorRed, setColorRed] = useState('red')
    const [colorBlue, setColorBlue] = useState('Blue')

    const blueFunc = () => {
        setColorRed(colorBlue)
        setColorBlue(colorRed)
    }
    const redFunc = () => {
        setColorBlue(colorRed)
        setColorRed(colorBlue)
    }

    return(
        <div className="div_flex">
            <div onClick={blueFunc} style={{backgroundColor: colorRed}} className="div"></div>
            <div onClick={redFunc} style={{backgroundColor: colorBlue}} className="div"></div>
        </div>
    )
}
export default Color