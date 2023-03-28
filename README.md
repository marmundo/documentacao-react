# Documentacao-react
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
