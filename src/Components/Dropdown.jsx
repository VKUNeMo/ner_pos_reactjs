import React from "react";

function Dropdown({ handleDropdownChange }) {
    return (
        <div className=" w-full ưflex justify-evenly border rounded-md shadow-sm items-center">
            <select className=" w-full p-2.5 text-gray-900 bg-white  appearance-none focus:border-indigo-600" onChange={handleDropdownChange}>
                <option value="1">Gắn nhãn từ loại </option>
                <option value="2">Trích xuất thực thể</option>
            </select>

        </div>
    );
}
export default Dropdown