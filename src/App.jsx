import "./App.css";
import React from "react";

function Arama({ aramaMetni, onSearch }) {
  return (
    <div>
      <label htmlFor="arama">Ara: </label>
      <input id="arama" type="text" onChange={onSearch} value={aramaMetni} />
      <p></p>
    </div>
  );
}

function Yazi({ id, url, baslik, yazar, yorum_sayisi, puan }) {
  return (
    <li key={id}>
      <span>
        <a href={url}>{baslik}</a>,
      </span>
      <span>
        <b>Yazar:</b> {yazar},{" "}
      </span>
      <span>
        <b>Yorum Sayısı:</b> {yorum_sayisi},{" "}
      </span>
      <span>
        <b>Puan:</b> {puan}
      </span>
    </li>
  );
}

function Liste(props) {
  return (
    <ul>
      {props.yazilar.map(function (yazi) {
        return <Yazi key={yazi.id} {...yazi} />;
      })}
    </ul>
  );
}

function App() {
  const [aramaMetni, setAramaMetni] = React.useState(
    localStorage.getItem("aranan") || "React"
  );
  const yaziListesi = [
    {
      baslik: "React",
      url: "https://react.dev/learn",
      yazar: "React",
      yorum_sayisi: 3,
      puan: 4,
      id: 0,
    },
    {
      baslik: "Web Teknolojileri ve Programlama",
      url: "https://www.google.com.tr/?hl=tr",
      yazar: "SDU",
      yorum_sayisi: 3,
      puan: 6,
      id: 1,
    },
    {
      baslik: "MySQL",
      url: "https://dev.mysql.com/doc/refman/8.0/en/tutorial.html",
      yazar: "Oracle",
      yorum_sayisi: 2,
      puan: 1,
      id: 3,
    },
    {
      baslik: "Python ile Programlamaya Giriş",
      url: "www.w3schools.com",
      yazar: "Haluk Akbaş",
      yorum_sayisi: 7,
      puan: 3,
      id: 2,
    },
    {
      baslik: "HTML ",
      url: "www.w3schools.com",
      yazar: "Haluk Akbaş",
      yorum_sayisi: 63,
      puan: 4.8,
      id: 3,
    },
    {
      baslik: "JAVA ",
      url: "www.w3schools.com",
      yazar: "David Malan",
      yorum_sayisi: 120,
      puan: 5,
      id: 4,
    },
    {
      baslik: "Javascript Tutorial ",
      url: "www.freecodecamp.org",
      yazar: "Nathan Sebhastian",
      yorum_sayisi: 100,
      puan: 3,
      id: 5,
    },

  ];

  const arananYazilar = yaziListesi.filter(function (yazi) {
    return (
      yazi.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) ||
      yazi.yazar.toLowerCase().includes(aramaMetni.toLowerCase())
    );
  });

  function handleSearch(event) {
    setAramaMetni(event.target.value);
  }

  React.useEffect(() => {
    localStorage.setItem("aranan", aramaMetni);
  }, [aramaMetni]);

  return (
    <React.Fragment>
      <h1>Yazılar</h1>
      <Arama aramaMetni={aramaMetni} onSearch={handleSearch} />
      <strong>{aramaMetni} aranıyor...</strong>
      <hr />
      <Liste yazilar={arananYazilar} />
    </React.Fragment>
  );
}
export default App;