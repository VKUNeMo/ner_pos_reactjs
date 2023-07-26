import React from "react";
import "./home.css"
import { useState, useEffect } from "react";
function Introduce(){
    const listFeature = ['Chatbot', 'Tiền xử lí', 'NER', 'POS']
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % listFeature.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex]);
    return(
        <>
            <div>
                <div className="flex justify-center items-center flex-col h-screen">
                    <div className="bg-about w-full h-screen "></div>
                    <div className="flex justify-center items-center flex-col h-full w-full">
                        <div className="flex flex-row justify-center w-1/2" >
                            <span className=" uppercase text-white text-5xl  font-medium font-about  mr-2"> NLP  eSTI:
                            </span>
                            {
                                (
                                    <span className="w-fittransition-opacity duration-1000 opacity-100 animate-fade-in uppercase text-white text-5xl font-medium font-about">
                                        {listFeature[currentIndex]}
                                    </span>
                                )
                            }
                        </div>
                        <div className="text-center text-white mt-4">
                            <span>Xử lí ngôn ngữ tự nhiên dành riêng cho tiếng Việt</span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Introduce