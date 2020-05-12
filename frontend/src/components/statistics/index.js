import React from 'react';
import './styles.css';
import {
    BarChart,
    Bar,
    XAxis, 
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    
  } from 'recharts';


export default function Statitics() {
    
    const data = [
        {  
          name: 'Autonoma', Artigos: 40, Livros: 25, Monografia: 43, Banner: 12,
        },
        {
          name: 'Interamericana', Artigos: 30, Livros: 21, Monografia: 23, Banner: 22,
        },
        {
          name: 'Americana', Artigos: 20, Livros: 25, Monografia: 33, Banner: 1,
        },
        {
          name: 'Maria Serrana', Artigos: 27, Livros: 12, Monografia: 12, Banner: 32,
        },
        {
          name: 'Unida', Artigos: 18, Livros: 20, Monografia: 10, Banner: 2,
        },

      ];

      const data2 = [
        {  
          name: 'IMJBR', Artigos: 40, Livros: 25, Monografia: 43, Banner: 12,
        },
        {
          name: 'Revista UAA', Artigos: 30, Livros: 21, Monografia: 23, Banner: 22,
        },
        {
          name: 'Nucleo', Artigos: 20, Livros: 25, Monografia: 33, Banner: 1,
        },
        {
          name: 'Race', Artigos: 27, Livros: 12, Monografia: 12, Banner: 32,
        },
        {
          name: 'Unida', Artigos: 18, Livros: 20, Monografia: 10, Banner: 2,
        },

      ];

  



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
            <div className="content">
                <h1>Universidades</h1>
                <span className="align">Dados de artigos publicados</span>
                <BarChart
                    width={1200}
                    height={300}
                    data={data}
                    margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                    }}
                    barSize={40}
                >
                    <XAxis dataKey="name" scale="auto" padding={{ left: 0, right: 0 }} />
                    <YAxis /> 
                    <Tooltip />
                    <Legend />
                    
                    <CartesianGrid strokeDasharray="3" />
                    <Bar dataKey="Artigos" fill= '#8884d8' background={{ fill: '#eee' }} />
                    <Bar dataKey="Livros" fill= '#83a6ed' background={{ fill: '#eee' }} />
                    <Bar dataKey="Monografia" fill= '#8dd1e1' background={{ fill: '#eee' }} />
                    <Bar dataKey="Banner" fill= '#82ca9d' background={{ fill: '#eee' }} />

                </BarChart>
            
            </div>
        
        <div className="content">
            <h1>Revistas Cientificas</h1>
            <span>Dados de artigos publicados</span>
            <BarChart
                width={1200}
                height={300}
                data={data2}
                margin={{
                top: 5, right: 30, left: 20, bottom: 5,
                }}
                barSize={40}
            >
                <XAxis dataKey="name" scale="auto" padding={{ left: 0, right: 0 }} />
                <YAxis /> 
                <Tooltip />
                <Legend />
                
                <CartesianGrid strokeDasharray="3" />
                <Bar dataKey="Artigos" fill= '#8884d8' background={{ fill: '#eee' }} />

            </BarChart>
        
        </div>
      </div>
    </>
  );
}
