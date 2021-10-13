import { useState } from 'react';
import './App.css';
import KaynamaDurumu from './KaynamaDurumu';
import Sicaklik from './Sicaklik';

function App() {
  const [sicaklikCelcius, setSicaklikCelcius] = useState(0);
  const [sicaklikFahrenheit, setSicaklikFahrenheit] = useState(32);

  const celciusDegisti = function(yeniDeger) {
    setSicaklikCelcius(yeniDeger);
    setSicaklikFahrenheit(celciusdanFahrenheitaDonustur(yeniDeger));
  };

  const fahrenheitDegisti = function(yeniDeger) {
    setSicaklikFahrenheit(yeniDeger);
    setSicaklikCelcius(fahrenheittanCelciusaDonustur(yeniDeger));
  };

  return (
    <div className="App">
      <h1>Su Kaynatmaca - şu anki sıcaklık celcius: {sicaklikCelcius} - {sicaklikFahrenheit}</h1>
      <p>Bu program girilen sıcaklığa göre suyun kaynayıp kaynamayacağını söyler. Sıcaklığı celcius ya da fahrenheit cinsinden girebilirsiniz.</p>

      <Sicaklik birim="c" deger={sicaklikCelcius} sicaklikDegistiginde={celciusDegisti} />
      <Sicaklik birim="f" deger={sicaklikFahrenheit} sicaklikDegistiginde={fahrenheitDegisti} />
      <KaynamaDurumu celcius={sicaklikCelcius}/>
    </div>
  );
}

function celciusdanFahrenheitaDonustur(c) {
  return yuvarla(c / 100 * 180 + 32);
}

function fahrenheittanCelciusaDonustur(f) {
  return yuvarla((f - 32) / 180 * 100);
}

function yuvarla(deger) {
  return Math.round(deger * 100) / 100;
}

export default App;
