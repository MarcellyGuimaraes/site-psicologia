import React from 'react'
import './styles.css'

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <h2>Sobre Nós</h2>
              <p>
                Lorem Ipsum is simply text of the Lorem Ipsum is simply my text
                of the printing and Ipsum is simply text of the Ipsum is simply
                text of thetypesetting Ipsum is simply text of the stry simply
                dummy text of the printing and typesetting industry. Lorem Ipsum
                is simply text of the Lorem Ipsum is simply my text of (APENAS
                UM TEXTO DE TESTE)
              </p>
            </div>
            <div className="col-md-6 col-sm-12 map-img">
              <h2>Contate-nos</h2>
              <address className="md-margin-bottom-40">
                BlueDart <br />
                Marthandam (K.K District) <br />
                Tamil Nadu, IND <br />
                Telefone:{' '}
                <a href="#" className="link_footer">
                  +55 75 9 9123-4567
                </a>{' '}
                <br />
                Email:{' '}
                <a href="#" className="link_footer">
                  info@bluedart.in
                </a>
                <br />
              </address>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
