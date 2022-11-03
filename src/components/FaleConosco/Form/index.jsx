import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Form = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env.YOUR_SERVICE_ID,
        process.env.YOUR_TEMPLATE_ID,
        form.current,
        process.env.YOUR_PUBLIC_KEY,
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
    <form ref={form} onSubmit={sendEmail} className="col-sm-6">
      <h2>Formulário de Contato/Agendamento</h2>

      <div className="row">
        <div className="col-sm-3">
          <label>Digite seu nome: </label>
        </div>
        <div className="col-sm-8">
          <input
            required
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
            required
            type="email"
            placeholder="Digite seu email"
            name="user_email"
            className="form-control input-sm"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-3">
          <label>Insira sua mensagem: </label>
        </div>
        <div className="col-sm-8">
          <textarea
            required
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
  )
}

export default Form
