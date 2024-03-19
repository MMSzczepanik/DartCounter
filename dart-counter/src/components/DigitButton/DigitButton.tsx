import { ButtonHTMLAttributes, FunctionComponent } from "react";

type Props  = {
    sign: number | string;
}

const DigitButton: FunctionComponent<Props & ButtonHTMLAttributes<HTMLButtonElement>> = ({sign, ...props}) => {

    return (
        <button 
            className="h-24 w-24 text-4xl text-white leading-10 rounded-lg bg-blue-700 hover:bg-blue-300 mx-[5px] my-[5px] shadow-gray-950 shadow-lg"
                {...props}
            >
            {sign}
        </button>
    )

}

export default DigitButton;