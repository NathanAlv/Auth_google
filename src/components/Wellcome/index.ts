import { applyActionCode } from 'firebase/auth'
import './styles.css'



const renderWelcomePanel= (container: HTMLElement) => {
    const userName= localStorage.getItem('userName')
    const Dia= new Date().toLocaleDateString();
    const foto = localStorage.getItem("Foto");
    
    const htmlContent= `
        <div id="welcome">
        <div id="menu">
        <h1>Anonymos</h1>
        <a href="details.html" class="Menu">Detalhes</a>
        <a href="logout.html" class="Menu">Sair</a>
        <img src="${foto}" alt="foto do usuario">
        </div>
            <h1>Bem vindo, ${userName}</h1>
            <h1>Hoje é ${Dia}</h1>
            <h1 id= 'timehour'></h1>
        </div>
    `
    setInterval(()=>{
        let Hora= new Date();
        const Anyway= <HTMLHeadingElement>document.querySelector('#timehour')
        Hora.setDate(Hora.getDate() + 1)
        Anyway.innerText= `${Hora.toLocaleTimeString()}`
        },1000)

    container.innerHTML= htmlContent
}

export default renderWelcomePanel