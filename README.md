# Documentacao React

Anotações de estudo de React

# Introdução

## Criando primeira aplicacao react

`npm create vite@latest my-react-app -- --template react`

### Executando projeto

```bash
cd nome-do-projeto
npm i
npm run dev
```
### Instalando extensão com snippets

Nome da extensão: ES7+ React/Redux/React-Native snippets

## Pastas com assets ( conteúdo estatico)

Pasta public

# Criando seu primeiro componente React

Um componente React é uma unidade reutilizável e independente de interface do usuário que pode ser usada para construir a interface de um aplicativo React. Os componentes React são como blocos de construção que podem ser combinados para criar uma interface de usuário complexa.

Cada componente React possui sua própria lógica e estado interno, e pode receber propriedades (props) como entrada e renderizar uma representação visual com base nesses dados. Os componentes podem ser compostos uns dentro dos outros para criar hierarquias de componentes, formando uma árvore de componentes.

Os componentes React são escritos usando JavaScript (ou TypeScript) e JSX, uma extensão de sintaxe que permite escrever código HTML-like dentro do JavaScript. Essa combinação de JavaScript e JSX permite que você defina a estrutura e o comportamento do componente em um único arquivo.



Por exemplo criar componente Banner
Criar pasta dentro de src

```
componentes/Banner/Banner.jsx
```

Exemplo de componente React

```jsx
import "./Banner.css";
function Banner() {
  return <img />;
}
export default Banner;
```

### Adicionando arquivo CSS ao Componente

Criar arquivo CSS com o mesmo nome do componente

```
componentes/Banner/Banner.css
```

Exemplo de CSS

```css
  .banner{
    display: flex;
    justify-content: center;
  }
```

## Utilizando propriedades nos componentes

As propriedades (ou "props") em React são uma maneira de passar dados de componentes pais para componentes filhos. Elas são semelhantes aos argumentos de uma função em JavaScript. As props são imutáveis, o que significa que um componente filho não pode alterar as props que recebe do componente pai.

Exemplo

```jsx
import PropTypes from 'prop-types';

const CampoTexto = (props) => {
        return (
            <div className="campo-texto">
                <label>{props.label}</label>
                <input placeholder={props.placeholder} />
            </div>
        );
    };

CampoTexto.propTypes = {
    placeholder: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};
export default CampoTexto;
```

```css
.campo-texto {
    width: 20%;
    display: flex;
    justify-content: space-between
}
```

### Porque é necessário usar PropTypes?

PropTypes é uma biblioteca em React que ajuda a definir o tipo de propriedade que um componente deve receber. Ela serve para garantir que o componente esteja recebendo os dados corretos, do tipo correto e na estrutura correta. Isso é especialmente útil em grandes aplicações onde os componentes podem ter muitas props.

PropTypes oferece muitos validadores diferentes que podem ser usados para garantir que as props tenham o formato correto. Alguns exemplos incluem:

* PropTypes.array
* PropTypes.bool
* PropTypes.func
* PropTypes.number
* PropTypes.object
* PropTypes.string

Além disso, você pode marcar props como obrigatórias usando `.isRequired`

## Utilizando componentes de componentes

Um formulario é feito de vários campos. Então podemos ter um componente formulario com varios componentes campos. Segue exemplo de código

```jsx
import BotaoAninhado from "../BotaoAninhado/BotaoAninhado";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {

  return (
    <section className="formulario">
      <form className="form">
        <CampoTexto className="campo-texto" label="Nome" />
        <CampoTexto className="campo-texto" label="Endereço" />
      </form>
    </section>
  );
};
export default Formulario;

```

```css
.formulario{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
}

.formulario .campo-texto{
    margin-bottom: 5%;
}
```

## Utilizando atributos aninhados

Você pode passar valores de atributos para um componente React passando como componentes filhos de componente como se fosse em elementos html.
Desta forma, pode ser passados outros componentes, mídias e etc como atributos ao invés de apenas texto.

Veja o exemplo abaixo.

```html
<Botao> Clique Aqui </Botao>
```

```jsx
import PropTypes from 'prop-types';

const BotaoAninhado = (props) => {
    return <button>{props.children}</button>;
};

BotaoAninhado.propTypes = {
    children: PropTypes.node.isRequired,
};

export default BotaoAninhado;
```

```jsx
...
  return (
    <section className="formulario">
      <form className="form">
        ...
        <BotaoAninhado>Clique Aqui</BotaoAninhado>
      </form>
    </section>
  );
};
export default Formulario;

```

## Geração de elementos em componentes

Normalmente é necessário gerar elementos em um componente baseado em itens, por exemplo um combo-box, uma tabela, etc.
Para isso é necessário usar um array de items e usar a função map para gerar os elementos baseado nesta lista. Ver exemplo abaixo.

```jsx
/*Lista Suspensa*/

import PropTypes from 'prop-types';

export default function ListaSuspensa(props) {
    const aoSelecionado = (event) => {
        alert(event.target.value)
    };

    return (
        <select name="select" onChange={aoSelecionado}>
        {props.items.map((item, index) =>
            <option key={index} value={item}>{item}</option>
        )}
        </select>
    )
}

ListaSuspensa.propTypes = {
    items: PropTypes.array.isRequired,
};

```

```jsx
...

const Formulario = () => {
  const times=["A","B", "C"]

  return (
    <section className="formulario">
      <form className="form">
        ...
        <ListaSuspensa items={times} />
      </form>
    </section>
  );
};
export default Formulario;


```
# Eventos em React
A documentação mais detalhada está [aqui](respondendo_a_eventos.md)
# Controle de Estados

O React utiliza os estados para manter o ciclo de vida de atualização dos valores e comportamento dos componentes React.

Existe um hook chamado de useState que é utilizado como função fornecida pelo React para ter controle das informações/componentes que interagem com o usuário.

Abaixo um trecho de código com um componente 'Campo de Texto' com o valor do input sendo controlado pelo hook useState.

```jsx
const CampoTexto = (props) => {
  const [valor, setValor] = useState();

  const aoDigitado = (evento) => {
    setValor(evento.target.value);
  };
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={valor}
        onChange={aoDigitado}
        placeholder={props.placeholder}
      />
    </div>
  );
};
```

## Uso dos Estados fora do componente

Existe casos que o componente pai que precisa controlar os estados dos componentes filhos.
Assim, o controle do estado ficará sob responsabilidade do componente pai.

Gerenciar o estado fora de um componente específico em React é útil por várias razões:

1. Compartilhamento de estado
: Quando o estado precisa ser compartilhado entre vários componentes, pode ser mais fácil gerenciá-lo fora de um único componente. Isso evita o "prop drilling", onde o estado precisa ser passado de um componente pai para um componente filho através de props.

2. Persistência de estado
: Se você quiser que o estado persista mesmo quando um componente é desmontado e remontado, gerenciar o estado fora do componente pode ser útil. Isso pode ser importante para coisas como manter o estado do usuário após a atualização da página.

3. Lógica de negócios complexa
: Às vezes, a lógica de negócios relacionada ao estado pode ser complexa e envolver vários componentes. Nesses casos, pode ser mais fácil testar e manter essa lógica se ela estiver separada dos componentes da interface do usuário.

4. Performance
: Em aplicações grandes, atualizar o estado em um componente de nível superior pode levar a muitas renderizações desnecessárias em componentes filhos. Gerenciar o estado fora do componente pode ajudar a evitar isso.

Exemplo abaixo:

```jsx
import PropTypes from 'prop-types';

const CampoTexto = (props) => {
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    };
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input
                value={props.valor}
                onChange={aoDigitado}
                required={props.obrigatorio}
                placeholder={props.placeholder}
            />
        </div>
    );
};

CampoTexto.propTypes = {
    placeholder: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    valor: PropTypes.string.isRequired,
    obrigatorio: PropTypes.bool.isRequired,
    aoAlterado: PropTypes.func.isRequired,
};
export default CampoTexto;
```

```jsx
...

const Formulario = () => {
...

  const [nome, setNome] = useState();


  return (
    <>
    <section className="formulario">
      <form className="form">
        <CampoTextoEstado className="campo-texto" label="Nome" valor={nome} aoAlterado= {nome=>setNome(nome)} />
        ...
      </form>
      
    </section>
    <section className='dados'>
      <p>Nome:{nome}</p>
    </section>
    </>
  );
};
export default Formulario;
```
Clique [aqui](estados.md) para saber mais sobre estados em React.

Clique [aqui](https://pt-br.react.dev/learn/responding-to-events) para a documentação oficial que trata de estados em React.

# Renderização Condicional
A renderização condicional em React é um padrão que permite a você renderizar diferentes elementos ou componentes com base em uma condição. Isso é feito usando operadores JavaScript como if, else, operador ternário (? :) e operador lógico &&.


```jsx
let itens=[]
//Se o número de itens do array for maior que zero, o React renderiza <Componente/>. Isso através do operador lógico &&
items.lenght>0 && <Component/>
```

```jsx
...

const Formulario = () => {
  ...

  const [nome, setNome] = useState();


  return (
    <>
      ...
      <CampoTextoEstado className="campo-texto" label="Nome" valor={nome} aoAlterado={nome=>setNome(nome)} />
      ...

    {nome && (  
      <section className='dados'>
        <p>Nome:{nome}</p>
      </section>
    )}
    </>
  );
};
export default Formulario;
```

# Estilização de Componentes (CSS Modules)

O CSS Modules é uma abordagem para estilizar componentes React que oferece escopo local para estilos CSS. Isso significa que as classes CSS definidas em um arquivo CSS Module são encapsuladas dentro do componente correspondente, evitando conflitos de nomes de classe em toda a aplicação.

Os arquivos CSS que você deseja transformar em módulos devem ser nomeados com a extensão `.module.css`. Por exemplo, `MeuComponente.module.css`.

Exemplo de JSX

```jsx
import React from 'react';
import styles from './MeuComponente.module.css';

const MeuComponente = () => {
  return (
    <div className={styles.container}>
      <p className={styles.texto}>Meu componente estilizado com CSS Modules</p>
    </div>
  );
}

export default MeuComponente;
```

Exemplo de módulo CSS

```css
/* MeuComponente.module.css */

.container {
  background-color: #f0f0f0;
  padding: 20px;
}

.texto {
  color: #333;
  font-size: 18px;
}
```
