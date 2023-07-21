import React from "react";
function Ner({ data }) {

    return (
        <>
            <div>
                <div id="ner">
                    <span className=" font-medium text-sm"> Nhận dạng thực thể</span>
                </div>
                {data.length === 0 && <>
                    <div>
                        <p>
                            Xác định và phân loại tự động những thành phần trong một văn bản vào từng loại cho trước như tổ chức, tên người, tên địa điểm và các thực thể khác
                            Bài toán được sử dụng trong rất nhiều các hệ thống khai phá dữ liệu, hỏi đáp, dịch máy, tóm tắt văn bản,...
                        </p>
                    </div>
                </>}
                {
                    data.length !== 0 && <>
                        {
                            <div>
                                <p>
                                    {data.map(function (item, index) {

                                        return (
                                            <>
                                                <span
                                                    key={index}
                                                    style={{ backgroundColor: item.color === ' ' ? ' ' : item.color }}
                                                    className=' rounded p-1 text-sm my-1 inline-block'
                                                >
                                                    {item.word}
                                                    <span className=" text-gray-600 ml-1">
                                                        {
                                                            item.tag===' ' && item.color===' '?' ':item.tag
                                                        }
                                                    </span>
                                                </span>
                                            </>
                                        )
                                    })}
                                </p>
                            </div>
                        }
                    </>
                }
                <div>

                </div>
            </div>
        </>
    )
}
export default Ner