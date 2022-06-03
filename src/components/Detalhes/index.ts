import './styles.css'

const userName = localStorage.getItem('userName')
const email = localStorage.getItem('Email')
const Telefone = localStorage.getItem('Telefone')
const foto = localStorage.getItem('Foto')

const renderDetalhes = (container: HTMLElement) => {
  const htmlContent=`
  <div id="menu">
    <h1>Anonymos</h1>
    <a href="index.html" class="Menu">Home</a>
    <a href="logout.html" class="Menu">Sair</a>
    <img src="${foto}" alt="foto do usuario">
</div>
  <div id="Detalhes"> 
  <h1>Detalhes sobre o usuario:</h1>
  <p>Nome do usuario : ${userName}</p>
  <p>Email do usuario : ${email}</p>
  <p>Telefone : ${Telefone}</p>
  <span id="hora"></span>
</div>
      `
  container.innerHTML = htmlContent
}

export default renderDetalhes
