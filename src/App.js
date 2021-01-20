import React, { useState, useEffect } from "react";
import axios from 'axios'
import { BASE_URL } from './constants/base_url'
import { API_KEY } from './constants/api_key'
import Apod from './components/Apod'
import "./App.css";

function App() {
  const today = new Date();
  const initialDate = today.toISOString().split('T')[0];

  const [title, setTitle] = useState('');
  const [date, setDate] = useState(initialDate);
  const [img, setImg] = useState('');
  const [imgAlt, setImgAlt] = useState('');
  const [explanation, setExplanation] = useState('');

  useEffect(() => {
    const fetchApod = () => {
      axios.get(`${BASE_URL}?api_key=${API_KEY}&date=${date}`)
        .then(res => {
          console.log(res);
          setTitle(res.data.title);
          setDate(res.data.date);
          setImg(res.data.url);
          setImgAlt(res.data.title);
          setExplanation(res.data.explanation);
        })
        .catch(err => {
          console.log(err);
          debugger
        })
    }
    fetchApod();
  }, [date])

  const prevDate = () => {
    let dateObj = new Date(date);
    dateObj.setDate(dateObj.getDate() - 1);
    const newDate = dateObj.toISOString().split('T')[0];
    console.log(newDate);
    setDate(newDate);
  }

  const nextDate = (e) => {
    if (date === initialDate) {
      e.preventDefault();
      console.log("Already showing the latest picture!")
    } else {  
      let dateObj = new Date(date);
      dateObj.setDate(dateObj.getDate() + 1);
      const newDate = dateObj.toISOString().split('T')[0];
      console.log(newDate);
      setDate(newDate);
    }
  }

  return (
    <div className="App">
      <button className="prev" onClick={prevDate}>&#9668; Prev</button>
      <Apod
        title={title}
        date={date}
        img={img}
        imgAlt={imgAlt}
        explanation={explanation}
      />
      <button className="next" onClick={nextDate}>Next &#9658;</button>
    </div>
  );
}

export default App;
