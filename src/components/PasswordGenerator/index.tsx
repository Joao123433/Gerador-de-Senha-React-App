import Button from "./Button/Index";
import style from "./PasswordGererator.module.css"
import usePasswordGenerator from "../../hooks/usePasswordGenerator";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PasswordGererator() {
  const { password, generate, copyText, copy } = usePasswordGenerator()

  return (
    <div className={style.container}>
      <div className={style.btnSection}>
        <Button onClick={generate} id="btnPassword">Gerar!</Button>
        <Button onClick={copy} id="btnPassword">{copyText}</Button>
        <ToastContainer />
      </div>
      <input type="text" className={style.input} value={password} disabled/>
    </div>
  )
}