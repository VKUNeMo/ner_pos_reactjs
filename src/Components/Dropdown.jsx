import React from "react";

function Dropdown({ handleDropdownChange }) {
    return (
        <div className=" w-full ưflex justify-evenly border rounded-md shadow-sm items-center">
            <select className=" w-full p-2.5 text-gray-900 bg-white  appearance-none focus:border-indigo-600" onChange={handleDropdownChange}>
                <option value="1">Nhận dạng thực thể</option>
                <option value="2">Gắn nhãn từ loại </option>
            </select>

        </div>
    );
}
export default Dropdown