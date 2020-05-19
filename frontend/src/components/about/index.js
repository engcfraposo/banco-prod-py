import React from 'react';
import './styles.css';


export default function About() {
    

  return ( 
      <>
        <div className="container">
        <div className="content">
                <h1>Banco de Dados de Publicações de Brasileiros no Paraguai</h1>
                <div className="textContainer">
                 <div className="textBlock">
                 <p>O que é?</p>
                  <span>
                    O Banco de Dados de Publicações de Brasileiros no Paraguai é um agente indexador de publicações de publicações de pesquisadores
                    brasileiros no paraguai, o mesmo serve para atender demandas de universidades brasileiras em relação a produtividade das 
                    universidades que por muitas vezes são questionadas.
                  </span>
                 </div>
                 <div className="textBlock">
                 <p>Como eu posso apoiar?</p>
                  <span>
                    Todos que fazem medicina, mestrado, doutorado e pós-doutorado podem se inscrever e inserir os dados de sua publicação.
                    Posteriormente poderá emitir relatorios sobre a produção individual e da universidade servindo como apoio no processo 
                    de revalidação.
                  </span>
                 </div>
                 <div className="textBlock">
                 <p>Como meu instituto pode apoiar?</p>
                  <span>
                    Divulgando a plataforma e a importância no processo de revalidação, todos serão bem recebido e aos que apoiarem a causa
                    será disponibilizada a logomarca no site. Além daquelas que possuem revista propria poderá ser utilizada como mais uma fonte
                    de indexação.
                  </span>
                 </div>
                 <div className="textBlock">
                 <p>Como podemos melhorar?</p>
                  <span>
                    Na aba de suporte, você poderá abrir um chamado para possiveis melhorias no sistema, elas serão filtradas e colocada em
                    um roadmap e atualizadas com o tempo.
                  </span>
                 </div>
                </div>
        </div>
      </div>
    </>
  );
}
