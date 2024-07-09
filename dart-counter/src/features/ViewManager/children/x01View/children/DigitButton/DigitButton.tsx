import classNames from "classnames";
import { ButtonHTMLAttributes, FunctionComponent } from "react";

type Props  = {
    sign: number | string;
}

const DigitButton: FunctionComponent<Props & ButtonHTMLAttributes<HTMLButtonElement>> = ({sign, ...props}) => {

    return (
        <button 
            className={classNames("h-28 w-28 text-4xl text-white leading-10 rounded-lg mx-[5px] my-[5px] shadow-gray-950 shadow-lg", {
                "bg-blue-700 hover:bg-blue-300 ": !props?.disabled,
                "bg-blue-100": props?.disabled
            })}
                {...props}
            >
            {sign}
        </button>
    )

}

export default DigitButton;