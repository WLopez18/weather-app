import React, { useState } from 'react'
import './weather.css'

const Weather = () => {
    const API_KEY = process.env.REACT_APP_API_KEY;

    const [form, setForm] = useState({
        city: '',
        country: ''
    });

    async function weatherData(ev) {
        ev.preventDefault();
        if(form.city === ''){
            alert('Add values');
        }else {
            const data = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${API_KEY}`
                ).then(res => console.log(res.json()));
        }
    }

    const handleChange = (ev) => {

        let name = ev.target.name;
        let value = ev.target.value;

        if(name === 'city'){
            setForm({...form, city:value})
        }
        if(name === 'country'){
            setForm({...form, country:value})
        }
        console.log(form.city, form.country)
    }
  return (
    <div className='weather'>
      <span className="title">Weather App</span>
      <br />

      <form>
        <input type='text' name='city' placeholder='city' onChange={(ev) => handleChange(ev)}/>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <input type='text' name='country' placeholder='country' onChange={ev => handleChange(ev)}/>
        <button className='getweather' onClick={(ev) => weatherData(ev)}>Submit</button>
      </form>
    </div>
  )
}

export default Weather
