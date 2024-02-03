import { useState } from "react";
import passwordGenerate from "../characters"
import style from "../components/PasswordGenerator/Button/Button.module.css"
import { toast } from 'react-toastify';

export default function usePasswordGenerator() {
  const notify = () => toast("Senha Copiada", { theme: "dark" })

  const [ password, setPassword ] = useState("")
  const [ copyText, setCopyText] = useState("Copiar!")

  const generate = () => {
    setPassword(passwordGenerate())
    setCopyText("Copiar!")
    const button = document.querySelectorAll("button[id=btnPassword]")
    addClassSelect(button[0])
    removeClassSelect(button[1])
  }

  function addClassSelect(btn: Element) {
    btn.classList.add(style.select)
  }

  function removeClassSelect(btn: Element) {
    btn.classList.remove(style.select)
  }

  const copy = ()  => {
    window.navigator.clipboard.writeText(password)
    setCopyText("Copiado!")
    const button = document.querySelectorAll("button[id=btnPassword]")
    addClassSelect(button[1])
    removeClassSelect(button[0])
    notify()
  }

  return { password, generate, copyText, copy }
}