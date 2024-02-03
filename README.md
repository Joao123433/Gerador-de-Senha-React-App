# Gerador de Senha feito em React + TypeScript + Vite
Este é um projeto React que implementa um gerador de senha simples. O aplicativo é composto por componentes reutilizáveis e utiliza um hook personalizado para gerar senhas e manipular a funcionalidade de cópia.

## Estrutura do Projeto
src/components/PasswordGenerator:
- `Button:` Contém o componente de botão reutilizável.
- `PasswordGenerator.module.css:` Arquivo de estilos específicos para o componente PasswordGenerator.
- `PasswordGenerator.tsx:`  O componente principal que renderiza o gerador de senha.

src/style:
- `global.css:` Arquivo de estilos globais para o aplicativo.

hooks:
- `usePasswordGenerator.ts:` Contém o hook personalizado responsável por gerenciar o estado da senha, gerar senhas aleatórias, e lidar com a funcionalidade de cópia.

App.tsx:
- O componente raiz do aplicativo React, que importa e renderiza o componente PasswordGenerator.

## Componentes:
App.tsx:
- Este componente representa a estrutura geral do aplicativo, exibindo o título "Gerador de Senha" e o componente `PasswordGenerator/index.tsx`
~~~TypeScript JSX
export default function App() {
  return (
    <>
      <h1 className={style.title}>
        Gerador de Senha
      </h1>
      <PasswordGenerator></PasswordGenerator>
    </>
  );
}
~~~

PasswordGenerator/index.tsx
- Este componente é o coração do aplicativo. Ele utiliza o componente Button e o hook personalizado `usePasswordGenerator` para fornecer funcionalidades de geração e cópia de senhas.
~~~TypeScript JSX
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
~~~

Button/index.tsx
- Um componente de botão simples que pode ser reutilizado em todo o aplicativo.
~~~TypeScript JSX
export default function Button({ children, ...props }: ButtonI) {
  return (
    <button {...props} className={`${style.btn}`}>
      {children}
    </button>
  )
}
~~~

## Hook Personalizado: 
usePasswordGenerator.ts
- Este hook é responsável por gerenciar o estado da senha, gerar senhas aleatórias, e lidar com a funcionalidade de cópia.
~~~TypeScript JSX
export default function usePasswordGenerator() {
  const notify = () => toast("Senha Copiada", { theme: "dark" });

  const [password, setPassword] = useState("");
  const [copyText, setCopyText] = useState("Copiar!");

  const generate = () => {
    setPassword(passwordGenerate());
    setCopyText("Copiar!");
    const button = document.querySelectorAll("button[id=btnGenerate]");
    addClassSelect(button[0]);
    removeClassSelect(button[1]);
  };

  // ... (funções auxiliares e implementação do copy)

  return { password, generate, copyText, copy };
}
~~~
- Este hook utiliza o `useState` do React para gerenciar o estado da senha e o texto do botão de cópia. A função `generate` é responsável por gerar uma nova senha, e a função `copy` lida com a cópia da senha para a área de transferência.

## Funcionalidades Adicionais:
- Utiliza a biblioteca r`eact-toastify` para exibir notificações quando a senha é copiada.
- Aplica estilos usando arquivos `.module.css` para modularizar os estilos dos componentes.

Este projeto é um exemplo simples, mas funcional, de um gerador de senha em React, destacando o uso de componentes reutilizáveis e hooks personalizados para gerenciar o estado e as funcionalidades do aplicativo.