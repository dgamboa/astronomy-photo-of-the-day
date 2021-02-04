import React, { useState, useEffect } from "react";
import axios from 'axios'
import { BASE_URL } from './constants/base_url'
import { API_KEY } from './constants/api_key'
import Nav from './components/Nav'
import Image from './components/Image'
import Footer from './components/Footer'

function App() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth().toString().length < 2 ? `0${today.getMonth() + 1}` : today.getMonth();
  const day = today.getDate().toString().length < 2 ? `0${today.getDate()}` : today.getDate();

  const initialDate = `${year}-${month}-${day}`

  const [title, setTitle] = useState('');
  const [date, setDate] = useState(initialDate);
  const [img, setImg] = useState('');
  const [explanation, setExplanation] = useState('');
  const [imgLink, setImgLink] = useState('');
  const [mediaType, setMediaType] = useState('image');

  useEffect(() => {
    const fetchImage = () => {
      axios.get(`${BASE_URL}?api_key=${API_KEY}&date=${date}`)
        .then(res => {
          console.log(res);
          setTitle(res.data.title);
          setDate(res.data.date);
          setImg(res.data.url);
          setExplanation(res.data.explanation);
          setImgLink(res.data.hdurl);
          setMediaType(res.data.media_type);
        })
        .catch(err => {
          console.log(err);
          debugger
        })
    }
    fetchImage();
  }, [date])

  const prevDate = (e) => {
    e.target.blur();
    let dateObj = new Date(date);
    dateObj.setDate(dateObj.getDate() - 1);
    const newDate = dateObj.toISOString().split('T')[0];
    console.log(newDate);
    setDate(newDate);
  }

  const nextDate = (e) => {
    e.target.blur();
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
      <Nav />
      
      <Image
        title={title}
        date={date}
        initialDate={initialDate}
        img={img}
        explanation={explanation}
        imgLink={imgLink}
        mediaType={mediaType}
        prevDate={prevDate}
        nextDate={nextDate}
      />
      
      <Footer />
      <a href="https://github.com/dgamboa/astronomy-photo-of-the-day"><img loading="lazy" width="149" height="149" src="https://github.blog/wp-content/uploads/2008/12/forkme_right_gray_6d6d6d.png?resize=149%2C149" className="attachment-full size-full" alt="Fork me on GitHub" data-recalc-dims="1" /></a>
    </div>
  );
}

export default App;
