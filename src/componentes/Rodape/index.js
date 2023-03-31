import './Rodape.css'
const Rodape = () => {
  return (
    <section className='rodape'>
      <div className='redeSocial'>
      <img src="/imagens/fb.png" alt="facebook"/>
      <img src="/imagens/tw.png"alt="twitter"/>
      <img src="/imagens/ig.png" alt="instagram"/>
      </div>
      <div className='logo'>
        <img src="/imagens/logo.png" alt="logo"/>
      </div>
      <div className='texto'>
        <p>Desenvolvido por Marcelo Damasceno</p>
      </div>
    </section>
  )
}
export default Rodape