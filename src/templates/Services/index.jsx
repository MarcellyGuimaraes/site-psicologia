import React from 'react'
import { sessions } from '../../assets/api'
import { DoubleRight, Home } from '../../components/Icons'

const Services = () => {
  return (
    <div>
      <div className="page-nav no-margin row">
        <div className="container">
          <div className="row">
            <h2>Serviços</h2>
            <ul>
              <li>
                <a href="/">
                  <Home /> Início
                </a>
              </li>
              <li>
                <DoubleRight /> Serviços
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section className="sesion-type">
        <div className="container">
          <div className="session-title row">
            <h2>Nossos Tipos de Sessão</h2>
            <p>
              Not the answer you're looking for? Printing and typesetting
              inLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s Lorem (APENAS UM
              TEXTO DE TESTE)
            </p>
          </div>
          <div className="row">
            {sessions.map((session) => (
              <div key={session.id} className="col-md-4 col-sm-6">
                <div className="single-sess">
                  <img src={session.img} alt="" />
                  <p>{session.title}</p>
                </div>
              </div>
            ))}
            <div className="col-md-4 col-sm-6">
              <div className="single-sess sess-ok">
                <h4>Comece sua sessão hoje</h4>
                <p>Dê o primeiro passo em sua jornada para se sentir melhor.</p>
                <button className="btn btn-success">Agende uma Visita</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
