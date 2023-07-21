import React from "react";
import { useState,useEffect } from "react";
function Pos({ data }) {
    const [listLabel, setListLabel] = useState([])
    function get_pos(data) {
        try {
            if (data !== null) {
                const labels = [];
                for (const text of data) {
                    const tag = text.tag;
                    if (!labels.includes(tag)) {
                        labels.push(tag);
                    }
                }
                const list_label_sen = [];
                for (const label of labels) {
                    const list_word = [label];
                    for (const word of data) {
                        if (word.tag === label && !list_word.includes(word.word)) {
                            list_word.push(word.word);
                        }
                    }
                    list_label_sen.push(list_word);
                }
                setListLabel(list_label_sen)
            }
            return null; // Return null when texts is null
        } catch (error) {
            console.error('Error fetching data:', error);
            return null; // Return null in case of errors
        }
    }
    useEffect(()=>{
        get_pos(data)
    },[data])
    return (
        <>
            <div>
                <div id="pos">
                    <span className="font-medium text-sm" > Gắn nhãn từ loại</span>
                </div>
                {data.length === 0 && <>
                    <div>
                        <p>
                            Xác định nhãn thẻ từ loại đối với mỗi từ trong câu như danh từ, động từ, tính từ, đại từ, định từ,... Đây là bước xử lý quan trọng tiếp theo sau khi tách từ, là cơ sở để hiểu đúng ý nghĩa của một từ, là đầu vào của các pha xử lý tiếp theo trong xử lý ngôn ngữ tự nhiên. Gán nhãn từ loại có thể áp dụng vào các hệ thống tìm kiếm và trích chọn thông tin
                        </p>
                    </div>
                </>}
                {
                    data.length !== 0 && <>
                        {
                            listLabel.map((labels,index)=>{
                                const elementsFromIndex1ToEnd = labels.slice(1);
                                return (
                                    <div className="my-1 " key={index}> 
                                        <span className=" uppercase font-medium text-sm">{labels[0]+": "}</span>
                                        <br />
                                        <div className="my-2">
                                        {elementsFromIndex1ToEnd.map((element, index) => (
                                            <span key={index} className="inline-block bg-blue-600 rounded py-1 px-2 m-1 text-white">{element} </span>
                                        ))}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </>
                }
            </div>
        </>
    )
}
export default Pos