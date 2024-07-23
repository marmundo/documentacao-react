# Respondendo a Eventos em React

## Introdução

- Eventos são ações ou ocorrências que acontecem no sistema.
- React tem seu próprio sistema de manipulação de eventos que é semelhante ao do DOM do navegador, mas com algumas diferenças sintáticas.

## Adicionando Manipuladores de Eventos

- Sintaxe: Usar camelCase para nomear eventos.
  ```jsx
  export default function Button() {
    function handleClick() {
      alert('Você clicou no botão!');
    }

    return (
      // Uma forma menor de utilizar uma função
      //<button onClick={() => {alert('Você clicou no botão!');}}>
      <button onClick={handleClick}>
        Clique neste botão
      </button>
    );
  }
  ```
### Passando manipuladores de eventos como props

```jsx
  function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`Reproduzindo ${movieName}!`);
  }

  return (
    <Button onClick={handlePlayClick}>
      Reproduzir "{movieName}"
    </Button>
  );
}

function UploadButton() {
  return (
    <Button onClick={() => alert('Enviando!')}>
      Enviar Imagem
    </Button>
  );
}

export default function Toolbar() {
  return (
    <div>
      <PlayButton movieName="O Serviço de Entregas da Kiki" />
      <UploadButton />
    </div>
  );
}
```
### Propagação de eventos

```jsx
  export default function Toolbar() {
  return (
    <div className="Toolbar" onClick={() => {
      alert('Você clicou na toolbar!');
    }}>
      <button onClick={() => alert('Reproduzindo!')}>
        Reproduzir Filme
      </button>
      <button onClick={() => alert('Enviando!')}>
        Enviar Imagem
      </button>
    </div>
  );
}
```
#### Parando a propagação
```jsx
  function Button({ onClick, children }) {
  return (
    <button onClick={e => {
      e.stopPropagation();
      onClick();
    }}>
      {children}
    </button>
  );
}

export default function Toolbar() {
  return (
    <div className="Toolbar" onClick={() => {
      alert('Você clicou na toolbar!');
    }}>
```

## Prevenindo Comportamento Padrão

```jsx
  export default function Signup() {
  return (
    <form onSubmit={e => {
      // Evita que a página seja recarregada pois o comportamento do submit é recarregar a página.
      e.preventDefault();
      alert('Enviando!');
    }}>
      <input />
      <button>Enviar</button>
    </form>
  );
}
```

## Eventos Sintéticos
