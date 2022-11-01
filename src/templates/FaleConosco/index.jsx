import React, { useRef } from 'react'
import { DoubleRight, Home } from '../../components/Icons'
import emailjs from '@emailjs/browser'
import {
  YOUR_PUBLIC_KEY,
  YOUR_SERVICE_ID,
  YOUR_TEMPLATE_ID,
} from '../../assets/api'

const FaleConosco = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        form.current,
        YOUR_PUBLIC_KEY,
      )
      .then(
        (result) => {
          alert(result, 'Seu email foi enviado! :)')
          e.target.reset()
        },
        (error) => {
          console.log(error.text)
        },
      )
  }

  return (
    <div>
      <div className="page-nav no-margin row">
        <div className="container">
          <div className="row">
            <h2>Fale Conosco</h2>
            <ul>
              <li>
                {' '}
                <a href="/">
                  <Home /> Início
                </a>
              </li>
              <li>
                <DoubleRight /> Fale Conosco
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row no-margin">
        <iframe
          title="Feira de Santana"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36184.75424050004!2d-38.976092363475765!3d-12.262926255877742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71439dbd0766da9%3A0xed4d58d8df9d5ffe!2sFeira%20de%20Santana%20-%20Maria%20Quit%C3%A9ria%2C%20Feira%20de%20Santana%20-%20BA!5e0!3m2!1spt-BR!2sbr!4v1667260966285!5m2!1spt-BR!2sbr"
          height="450"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <div className="row contact-rooo no-margin">
        <div className="container">
          <div className="row">
            <form ref={form} onSubmit={sendEmail} className="col-sm-6">
              <h2>Contact Form</h2>

              <div className="row">
                <div className="col-sm-3">
                  <label>Digite seu nome: </label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="text"
                    placeholder="Digite seu nome"
                    name="user_name"
                    className="form-control input-sm"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-sm-3">
                  <label>Digite seu email: </label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="email"
                    placeholder="Digite seu email"
                    name="user_email"
                    className="form-control input-sm"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-sm-3">
                  <label>Insira sua mensagem:</label>
                </div>
                <div className="col-sm-8">
                  <textarea
                    rows="5"
                    name="message"
                    placeholder="Insira sua mensagem"
                    className="form-control input-sm"
                  ></textarea>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-3">
                  <label></label>
                </div>
                <div className="col-sm-8">
                  <input
                    type="submit"
                    value="Enviar Mensagem"
                    className="btn btn-success btn-sm"
                  />
                </div>
              </div>
            </form>

            <div className="col-sm-6">
              <div className="serv">
                <h2>Endereço</h2>
                Clínica XX <br />
                Rua XYZ, Número 123, Bairro XXXX
                <br />
                Feira de Santana
                <br />
                Telefone:+55 75 9 9123-4567
                <br />
                Email: info@smart-eye.in
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FaleConosco
