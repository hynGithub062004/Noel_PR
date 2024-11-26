import React from 'react'
import img from '../img/banner/timeline.jpg'
const Timeline = () => {
  return (
    <div>
      <h2 className='font-bold text-4xl text-center'>Timeline chương trình</h2>
      <div className='mx-auto flex justify-center gap-60 mt-7'>
        <ul className='my-auto'>
            <li className='py-3'>✔️ XUẤT HIỆN BẤT NGỜ TẠO HỨNG KHỞI VỚI CÁC BÉ</li>
            <li className='py-3'>✔️ GIAO LƯU HỎI HAN, TRÒ CHUYỆN VUI VẺ VỀ GIÁNG SINH </li>
            <li className='py-3'>✔️ GIAO LƯU VĂN NGHỆ CÙNG BÉ </li>
            <li className='py-3'>✔️ PHÁT QUÀ CHO CÁC BÉ KÈM THEO LỜI DẶN TỪ CHA MẸ</li>
            <li className='py-3'>✔️ CHỤP ẢNH LƯU NIỆM VỚI ÔNG GIÀ NOEL</li>
            <li className='py-3'>✔️ ÔNG GIÀ NOEL DẶN DÒ VÀ TẠM BIỆT</li>
        </ul>
        <img className='w-80' src={img} alt=''/>
      </div>
    </div>
  )
}

export default Timeline
