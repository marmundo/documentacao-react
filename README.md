# Documentacao React

Anotações de estudo de React

# Introdução

## Criando primeira aplicacao react

`npm create vite@latest my-react-app -- --template react`

### Executando projeto

```bash
cd nome-do-projeto
npm start
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
.banner {
  backgroud-color: #fff;
}

.banner img {
  max-width: 100%;
}
```

## Utilizando propriedades nos componentes

Exemplo de arquivo

```jsx
const CampoTexto = (props) => {
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input placeholder={props.placeholder} />
    </div>
  );
};

export default CampoTexto;
```

## Utilizando componentes de componentes

Um fomrulario é feito de vários campos. Então podemos ter um componente formulario com varios componentes campos. Segue exemplo de código

```jsx
import CampoTexto from "../CampoTexto";
import "./Formulario.css";

const Formulario = () => {
  return (
    <section className="formulario">
      <form>
        <CampoTexto label="Nome" />
        <CampoTexto label="Endereço" />
      </form>
    </section>
  );
};
export default Formulario;
```

## Utilizando atributos aninhados

Você pode passar valores de atributos para um componente React passando como componentes filhos de componente como se fosse em elementos html.
Desta forma, pode ser passados outros componentes, mídias e etc como atributos ao invés de apenas texto.
Veja o exemplo abaixo.

```html
<Botao> Clique Aqui </Botao>
```

```jsx
const Botao = (props) => {
  return <button>{props.children}</button>;
};
```

## Geração de elementos em componentes

Normalmente é necessário gerar elementos em um componente baseado em itens, por exemplo um combo-box, uma tabela, etc.
Para isso é necessário usar um array de items e usar a função map para gerar os elementos baseado nesta lista. Ver exemplo abaixo.

```jsx
 const times=["A","B", "C"]
 //Observe que a variavel times é passada como atributo items no componente ListaSuspensa
 <ListaSuspensa label="Time" items={times} aoAlterado={(time)=>setTime(time)}/>

//Os itens da lista suspensa é gerado baseado nos itens que pertence a variavel props
<select name="select" onChange={aoSelecionado}>
  {props.items.map((item) =>
    <option value={item}>{item}</option>
  )}
</select>

```

# Controle de Estados

O React utiliza os estados para manter o ciclo de vida de atualização dos valores e comportamento dos componentes React.

Existe um hook chamado de useState que é utilizado como função fornecida pelo React para ter controle das informações/componentes que interagem com o usuário.

Abaixo um trecho de código com um componente 'Campo de Texto' com o valor do input sendo controlado pelo hook useState.

```js
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
Exemplo abaixo:

```jsx
const [nome,setNome]=useState()

// A propriedade aoAlterado ficara responsavel por setar o nome digitado para a variavel nome
 <CampoTexto label="Nome" valor={nome} aoAlterado={nome => { setNome(nome) }} />

 const CampoTexto = (props) => {
  //aoDigitado tem a responsabilidade de chamar o metodo aoAlterado presente no props
  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value)
  }
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <!-- O valor vem pelo props. E o controle de estado é atualizado a cada mudanca do conteudo do input através do onChange-->
      <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} />
    </div>
  )
}
```
# Renderização Condicional
O React renderiza condicionalmente usando uma expressao ternaria. P.ex

```jsx
let itens=[]
//Se o número de itens do array for maior que zero, o React renderiza <Componente/>. Isso através do operador lógico &&
items.lenght>0 && <Component/>
```
