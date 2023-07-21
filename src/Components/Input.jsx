import React from "react";

function Input({onChange}) {
    return (
        <>
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nhập văn bản vào đây</label>
            < textarea onChange={onChange} id="message" rows="4" class="resize block p-2.5 w-full h-full  text-sm text-gray-900 bg-gray-200 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nhập vào đây"></textarea>
        </>
    )
}
export default Input