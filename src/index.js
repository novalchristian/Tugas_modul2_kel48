import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let data = [
  {nama: "Maulana Ilham Mudhin Ghozali", nim: "21120118120018", kelompok:"11", key:1},
  {nama: "Noval Christian Bagariang", nim: "21120118130060", kelompok:"11", key:2}
]

ReactDOM.render(
  <React.StrictMode>
    <App title="Ingin Tahu Siapa saja anggota kelompok 28 ?" no="No" yes="Yes" data={data} />
  </React.StrictMode>,
  document.getElementById('root')
);


