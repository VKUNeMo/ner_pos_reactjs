import { useState, useEffect } from 'react';
import axios from 'axios'
import Button from './Components/Button';
import Footer from './Components/Footer';
import Input from './Components/Input';
import Navbar from './Components/Navbar';
import "./App.css"
import Dropdown from './Components/Dropdown';
import Ner from './Components/Feature/Ner';
import Pos from './Components/Feature/Pos'

function App() {
  const [display, setDisplay] = useState('1')
  const [textareaValue, setTextareaValue] = useState('');
  const [data, setData] = useState([])
  const API_POS = "http://localhost:8000/nlp/pos"
  const API_NER = "http://localhost:8000/nlp/ner"
  const handleOption = (event) => {
    setDisplay(event.target.value);
  };
  const handleChangeTextArea = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    setTextareaValue(event.target.value);
  };
  const fetchDataFromApi = async () => {
    const datasend = {
      "sentence": textareaValue
    }
    await axios.post(API_POS, datasend)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <div className='w-full h-screen'>
        <div className='shadow-custom'>
          <Navbar></Navbar>
        </div>
        <hr></hr>
        <div className="w-full text-center mt-5">
          <span className="uppercase text-3xl tracking-wide font-medium ">Demo</span>
        </div>
        <div className='grid grid-cols-2 gap-10 mx-36 my-10 justify-items-center'>
          <div className='w-full h-full'>
            <div className=" block w-full h-full">
              <Input onChange={handleChangeTextArea} ></Input>
              <div className='mt-2 w-full'>
                <Dropdown handleDropdownChange={handleOption}></Dropdown>
              </div>
              <div className='mt-5'>
                <Button content={"Trích xuất"} onClick={fetchDataFromApi} ></Button>
              </div>
            </div>
          </div>
          <div className='w-full h-full'>
            {display === '1' && <> <Ner data={data} ></Ner></>}
            {display === '2' && <> <Pos data={data}></Pos> </>}
          </div>
        </div>
        <div className='fixed bottom-0 w-full m-2'>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
