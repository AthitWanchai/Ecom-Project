import React from 'react'

export default function Card() {
    return (
<div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 group">
    <a href="#">
        <div className="relative">
          
            <img className="p-4 rounded-t-lg object-cover w-11/12 h-64 group-hover:opacity-50 transition-opacity" src="https://spfresh.co.th/wp-content/uploads/2022/12/%E0%B8%9C%E0%B8%B1%E0%B8%81%E0%B8%81%E0%B8%B2%E0%B8%94%E0%B8%82%E0%B8%B2%E0%B8%A7%E0%B8%9B%E0%B8%A5%E0%B8%B5-1.jpg" alt="product image" />
            
        
            <div className="absolute inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                <h5 className="text-xl font-semibold text-white">ผักกาดขาว</h5>
            </div>
        </div>
    </a>
</div>


    )
}
