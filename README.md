# Documentacao React
Anotações de estudo de React

## Criando primeira aplicacao react
``` npx create-react-app <nome-do-projeto> ```

## Executando projeto
``` bash
cd nome-do-projeto 
npm start
```
## Pastas com assets ( conteúdo estatico)
 Pasta public
 
## Criando seu primeiro componente React
Por exemplo criar componente Banner
Criar pasta dentro de src
```
componentes/Banner/Banner.js
```
Exemplo de componente React

```jsx
import './Banner.css'
function Banner(){
  return <img/>
}
export default Banner
```
### Adicionando arquivo CSS ao Componente
Criar arquivo CSS com o mesmo nome do componente
```
componentes/Banner/Banner.css
```
Exemplo de CSS
```css
.banner{
backgroud-color:#fff
}

.banner img{
max-width:100%
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
  )
}

export default CampoTexto
```
## Utilizando componentes de componentes
Um fomrulario é feito de vários campos. Então podemos ter um componente formulario com varios componentes campos. Segue exemplo de código
```jsx
import CampoTexto from "../CampoTexto"
import './Formulario.css'

const Formulario = () => {
  return (
    <section className="formulario">
      <form>
        <CampoTexto label="Nome" />
        <CampoTexto label="Endereço" />
      </form>
    </section>
  )
}
export default Formulario
```

## Utilizando atributos aninhados

Você pode passar valores de atributos para um componente React passando como componentes filhos de componente como se fosse em elementos html.
Desta forma, pode ser passados outros componentes, mídias e etc como atributos ao invés de apenas texto.
Veja o exemplo abaixo.

```html
<Botao>
  Clique Aqui
</Botao>
```
```jsx
const Botao = (props) => {
  return (
      <button>
        {props.children}
      </button>
  )
}
```