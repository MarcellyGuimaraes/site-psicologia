import React from 'react'
import { DoubleRight, Home } from '../../components/Icons'

const AboutUs = () => {
  return (
    <>
      About Us
      <div className="page-nav no-margin row">
        <div className="container">
          <div className="row">
            <h2>Sobre a Clínica</h2>
            <ul>
              <li>
                <a href="/">
                  <Home /> Início
                </a>
              </li>
              <li>
                <DoubleRight /> Sobre Nós
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="about-us">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <img src="assets/images/aboout.jpg" alt="" />
            </div>
            <div className="col-md-6 col-sm-12">
              <h2>Bem-Vindo(a) a Clinica XX</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                varius eros consequat auctor gravida. Fusce tristique lacus at
                urna sollicitudin pulvinar. Suspendisse hendrerit ultrices
                mauris.Fusce tristique lacus at urna sollicitudin pulvinar.
                Suspendisse hendrerit ultrices mauris.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                varius eros consequat auctor gravida. Fusce tristique lacus at
                urna sollicitudin pulvinar. Suspendisse hendrerit ultrices
                mauris.Fusce tristique lacus at urna sollicitudin pulvinar.
                Suspendisse hendrerit ultrices mauris. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Nam varius eros consequat
                auctor gravida. Fusce tristique lacus at urna sollicitudin
                pulvinar. Suspendisse hendrerit ultrices mauris.Fusce tristique
                lacus at urna sollicitudin pulvinar. Suspendisse hendrerit
                ultrices mauris.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                varius eros consequat auctor consectetur adipiscing elit. Nam
                varius eros consequat auctorconsectetur adipiscing elit. Nam
                varius eros consequat auctor gravida. Fusce tristique lacus at
                urna sollicitudin pulvinar. Suspendisse hendrerit ultrices
                mauris.Fusce tristique lacus at urna adipiscing(APENAS UM TEXTO
                DE TESTE)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mosion-vision">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="single-dd">
                <h4>Our Mission</h4>
                <p>
                  Lorem Ipsum is simply text of the Lorem Ipsum is simply my
                  text of the printing and Ipsum is simply text of the Ipsum is
                  simply text of thetypesetting Ipsum is simply text of the stry
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum is simply text of the Lorem Ipsum is simply my
                  text of(APENAS UM TEXTO DE TESTE)
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="single-dd">
                <h4>Our Vision</h4>
                <p>
                  Lorem Ipsum is simply text of the Lorem Ipsum is simply my
                  text of ply text of the Ipsum is simply text of thetypesetting
                  Ipsum is simply text of the stry simply <br />
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum is simply text of the Lorem Ipsum is simply my text of
                  (APENAS UM TEXTO DE TESTE)
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="single-dd">
                <h4>Why Choos Us ?</h4>
                <p>
                  Effective Psychological Therapy with a minimum of 5 years post
                  qualification experience.
                </p>

                <p>
                  Ipsum is simply text of the Lorem Ipsum is simply my text of
                  ply text
                </p>

                <p>
                  Lorem Ipsum is simply text of the Lorem Ipsum is simply my
                  text of ply text of the Ipsum f the Lorem Ipsum is simply my
                  text of ply text (APENAS UM TEXTO DE TESTE)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs
