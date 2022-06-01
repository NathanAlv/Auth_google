import { applyActionCode } from 'firebase/auth'
import './styles.css'

const renderWelcomePanel= (container: HTMLElement) => {
    const userName= localStorage.getItem('userName')
    const Dia= new Date().toLocaleDateString();

    
    const htmlContent= `
        <div id="welcome">
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