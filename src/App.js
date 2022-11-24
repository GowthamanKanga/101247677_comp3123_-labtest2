import './App.css';
import React,{useState} from 'react';
import axios from 'axios';



function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const weatherIcon = `http://openweathermap.org/img/wn/${data.weather ? data.weather[0].icon : null}@2x.png`
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=7fb647cb64917167c571b0df0ed5f551`

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((res) => {
        setData(res.data)
        console.log(res.data)
      })
      setLocation("")
    }
  }

  return (
    <>
    <br/>
    <div>
    <div className='App'>
      <div>
        <h1>Lab Test 2 - FullStack Devlopment I</h1>
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text" />
      </div>
          <div>
            <h1>{data.name},{data.sys.country}</h1>
          </div>
          <div>
            <img src={weatherIcon}/>
            {data.main ? <h2>Temperature: {data.main.temp.toFixed()}°C</h2> : null}
          </div>
          <div>
              {data.main ? <h2>Humidity: {data.main.humidity}%</h2> : null}
          </div>
          <div>
            {data.main ? <h2>Pressure: {data.main.pressure}</h2> : null}
          </div>
          <div>
            {data.weather ? <h2>Weather Condition: {data.weather[0].main}</h2> : null}
          </div>
          <div>
            {data.wind ? <h2>Wind Speed: {data.wind.speed.toFixed()}  KM/H</h2> : null}
          </div>
          <div>
            {data.coord ? <h2>Longitude:{data.coord.lon}, Latitude: {data.coord.lat}</h2>: null}
          </div>
    </div>
    </div>
    </>
  );
}

export default App;


