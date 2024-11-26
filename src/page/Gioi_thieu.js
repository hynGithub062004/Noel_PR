import React from 'react'
import video1 from '../video/video1.mp4'
import video2 from '../video/evid3.mp4'
import './lido.css'

const Gioi_thieu = () => {
  return (
    <div id='#gioi-thieu' className='lido mt-20 mx-auto flex gap-7 flex-col justify-around max-w-screen-xl'>
      <h2 className=' font-bold text-3xl text-red-cf text-center'>Giáng Sinh Hạnh Phúc: Thắp Sáng Niềm Vui Cho Trẻ Em Tại Hà Nội</h2>
      <div className='flex justify-center items-start gap-5'>
        <video className={"h-auto  w-60 rounded-lg h-1/2"} loop controls src={video1} autoPlay="true" type="video/mp4" />
        <video className={"h-auto w-400 rounded-lg h-400 "} muted controls src={video2} autoPlay="true" type="video/mp4" />
      </div>
     
        
      <p className='text-2xl mt-1'>
          Dịch vụ Ông Già Noel Tặng Quà tại Hà Nội đã trở thành một trong những đơn vị nổi bật trong lĩnh vực này. Với sứ mệnh mang lại niềm vui cho trẻ em, đặc biệt trong mùa lễ Giáng Sinh, nhóm đã không ngừng nỗ lực để tạo ra những kỷ niệm đáng nhớ cho các em nhỏ. Trong suốt nhiều năm hoạt động, nhóm đã thực hiện hơn 10.000 món quà ý nghĩa, mang lại hạnh phúc và nụ cười cho nhiều <b className='text-red-800 underline decoration-red-500 italic'>gia đình, trường học và tổ chức công ty </b>ở Hà Nội.
      </p>

      <a href="https://www.facebook.com/profile.php?id=61550865262791" class="mt-1 mx-auto relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group shadow-lg w-56">
          <span class="w-56 h-56 rounded rotate-[-40deg] bg-red-600 absolute bottom-3 left-3 -translate-x-full ease-out duration-1000 transition-all translate-y-full mb-15 ml-15 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white text-xl">Xem ảnh và video</span>
      </a>
    </div>
  )
}

export default Gioi_thieu
