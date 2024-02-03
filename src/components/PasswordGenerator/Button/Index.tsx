import ButtonI from "../../../interfaces/ButtonInterface";
import style from "./Button.module.css"

export default function Button({ children, ...props }: ButtonI) {
  return (
    <button {...props} className={`${style.btn}`}>
      {children}
    </button>
  )
}