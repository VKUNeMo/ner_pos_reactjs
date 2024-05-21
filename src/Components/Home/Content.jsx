import React from "react";
import Dropdown from '../Dropdown';
import Ner from '../Feature/Ner';
import Pos from '../Feature/Pos'
import { useState } from 'react';
import axios from 'axios'
import Button from '../Button';
import Input from '../Input';
function Content() {
    const [display, setDisplay] = useState('1')
    const [textareaValue, setTextareaValue] = useState('');
    const [data, setData] = useState([])

    const API_POS = "http://localhost:8080/danangnlp/pos"
    const API_NER = "http://localhost:8080/danangnlp/ner"

    const handleOption = (event) => {
        setData([])
        setDisplay(event.target.value);
    };

    function removeEmptyLines(text1) {
        const result = text1.replace(/^\s*\n/gm, '');
        return result;
    }

    const handleChangeTextArea = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        if (event.target.value.length === 0) {
            setData([])
        }
        setTextareaValue(removeEmptyLines(event.target.value));
    };
    const fetchDataFromApi = async () => {
        let API = ""
        display === '1' ? API = API_NER : API = API_POS
        const datasend = {
            "sentence": textareaValue
        }
        await axios.post(API, datasend, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                console.log(response.data.data);
                setData(response.data.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };
    return (
        <>
            <div className='min-h-0 overflow-hidden mb-2'>
                <div className='grid grid-cols-2 gap-10 mx-36 my-10 justify-items-center  pb-10'>
                    <div className='w-full h-full'>
                        <div className=" block w-full h-fit">
                            <Input text={textareaValue} onChange={handleChangeTextArea} ></Input>
                            <div className='mt-2 w-full'>
                                <Dropdown handleDropdownChange={handleOption}></Dropdown>
                            </div>
                        </div>
                        <div className='mt-5 inline-block '>
                            <Button content={"Trích xuất"} onClick={fetchDataFromApi} ></Button>
                        </div>
                    </div>
                    <div className='w-full h-full'>
                        {display === '1' && <> <Ner data={data} ></Ner></>}
                        {display === '2' && <> <Pos data={data}></Pos> </>}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Content