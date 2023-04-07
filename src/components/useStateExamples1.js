import React, { useState } from "react";

function UseStateExample() {

    const [show, setShow] = useState(false);

    const handleChange = () => {
        setShow(!show);
    }

    return (

        <div>
            <h1>Show something</h1>
            <button onClick={handleChange}>{show ? "hide" : "show"  }</button>

            {
                show && (<p>
                    <p> evado okadi kindha brathakateme thappa maaku vere dhaari ledhanaavu...
                    veedu poyadu...veedi sthanam loki nuvvu vastava?</p>
                    
                   <p> okka adugu..!!!....okkka adugu...!!!!</p>
                    
                    <p>!!!vaadu pothe veedu...veedu pothe nennu...nennu pothe naa amma..mogudu antu evarainna adhikaaram kosam egapadithe...!!!!  </p>                 
                    
                   <p> appal naidu...
                    dadagiri ki vachchina dourjanyaaniki vachchina goondaisaniki vachchina grouplu katataniki vachchina rajakiyam tho vachchina rowdyisam tho vachchina...puta ko sevam lekkana chappuna port ki bali avuthaayi.Teeram lo keratalu la erupu rangu pusukoni potethutai...</p>
                    </p>)
            }


        </div>
    )
}
export default UseStateExample;