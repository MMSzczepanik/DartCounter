import { ButtonHTMLAttributes, FunctionComponent } from "react";

type Props  = {
    digit: number
    props?: ButtonHTMLAttributes<HTMLButtonElement>
}

const DigitButton: FunctionComponent<Props> = ({digit, props}) => {

    return (
        <button 
            className="h-24 w-24 text-4xl text-white leading-10 rounded-lg bg-blue-700 hover:bg-blue-300 mx-[5px] my-[5px] shadow-gray-950 shadow-lg"
                {...props}
            >
            {digit}
        </button>
    )

}

export default DigitButton;