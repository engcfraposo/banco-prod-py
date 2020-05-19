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


export default function University() {
    
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

      

       



  return ( 
      <>
        <div className="container">
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
      </div>
    </>
  );
}
