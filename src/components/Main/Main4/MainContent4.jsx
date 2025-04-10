"use client"
import React from 'react';
import { useEffect, useState } from "react"
import "./main-content4.scss"

const newsItems = [
  {
    image: "https://hoaqua.langsonweb.com/wp-content/uploads/2020/09/blog-img-6.jpg",
    title: "Kỹ thuật trồng rau sạch trong chậu xốp tại nhà đơn giản",
    date: "18/08/2020",
    description: "Tự trồng rau trong chậu xốp tại nhà là xu hướng...Tháng 4, tháng trong lành giải phóng mỡ thừa...",
  },
  {
    image: "https://hoaqua.langsonweb.com/wp-content/uploads/2020/09/qua2aa.jpg",
    title: "Eat Clean – bí kíp để có thân hình xinh như mơ của cô nàng 9x",
    date: "18/08/2020",
    description: "Với nhiều người, 'Eat Clean' vẫn còn mới mẻ..Tháng 4, tháng trong lành giải phóng mỡ thừa....",
  },
  {
    image: "https://hoaqua.langsonweb.com/wp-content/uploads/2020/09/qua-1.jpg",
    title: "Lấy lại vóc eo con kiến nhờ công thức đơn giản từ củ đậu và rau cải",
    date: "18/08/2020",
    description: "Bụng mỡ nhiều khiến bạn mất tự tin..Tháng 4, tháng trong lành giải phóng mỡ thừa....",
  },
  {
    image: "https://hoaqua.langsonweb.com/wp-content/uploads/2020/09/qua2aa.jpg",
    title: "KM: Tháng giải phóng mỡ thừa, da xấu, độc tố trong cơ thể",
    date: "18/08/2020",
    description: "Tháng 4, tháng trong lành giải phóng mỡ thừa.. Tháng 4, tháng trong lành giải phóng mỡ thừa....",
  },
]

const Maincontent4 = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className={`container mx-auto mt-10 mb-10 main-content4 ${isVisible ? "visible" : ""}`}>
      <div className="main-layout grid grid-cols-1 lg:grid-cols-10 gap-8">
        {/* Tin tức */}
        <div className="news-section col-span-1 lg:col-span-6">
          <div className="section-title-container mb-6">
            <h2 className="section-title text-[#3C0000] font-extrabold text-center text-2xl">TIN TỨC</h2>
            <div className="title-underline"></div>
          </div>

          <div className="news-items">
            {newsItems.map((item, index) => (
              <div
                key={index}
                className="news-item flex flex-col md:flex-row mb-6 p-3 rounded-lg hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="news-image-container mb-3 md:mb-0 md:mr-4">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="news-image w-full md:w-[200px] h-[150px] object-cover rounded-lg"
                  />
                </div>
                <div className="news-content flex-1 flex flex-col justify-center">
                  <h3 className="news-title text-[#F851A7] text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="news-date text-sm text-gray-600 mb-2">{item.date}</p>
                  <p className="news-description">{item.description}</p>
                  <a href="#" className="read-more mt-2 text-[#669933] font-medium">
                    Đọc tiếp →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="sidebar col-span-1 lg:col-span-4">
          {/* Form liên hệ */}
          <div className="contact-form-container mb-8">
            <div className="contact-form border-2 border-[#669933] rounded-xl p-5 bg-white">
              <h3 className="form-title text-center text-[#3C0000] font-bold text-xl mb-4">LIÊN HỆ TƯ VẤN MUA HÀNG</h3>
              <div className="form-group mb-3">
                <input
                  className="form-input bg-amber-50 border-2 border-[#669933] w-full p-2 rounded"
                  placeholder="Họ tên của bạn..."
                />
              </div>
              <div className="form-group mb-3">
                <input
                  className="form-input bg-amber-50 border-2 border-[#669933] w-full p-2 rounded"
                  placeholder="Số điện thoại..."
                />
              </div>
              <div className="form-group mb-3">
                <textarea
                  className="form-textarea bg-amber-50 border-2 border-[#669933] w-full p-2 rounded h-[120px]"
                  placeholder="Nội dung cần tư vấn..."
                ></textarea>
              </div>
              <button className="form-button bg-[#669933] text-white w-full py-2 rounded-full hover:bg-white hover:text-[#669933] border-2 border-[#669933] transition-all duration-300">
                Gửi liên hệ
              </button>
            </div>
          </div>

          {/* Video */}
          <div className="video-container mb-8">
            <div className="video-box rounded-lg overflow-hidden shadow-md">
              <div className="video-wrapper relative">
                <iframe
                  width="100%"
                  height="200"
                  src="https://www.youtube.com/embed/i493IC18WvY"
                  title="Imovie sample video fruits film clip (HD)"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="video-iframe"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="map-container">
            <div className="map-box rounded-lg overflow-hidden shadow-md">
              <iframe
                width="100%"
                height="200"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125271.95764947782!2d106.51806499676732!3d11.132086119699695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174cc38c0cd60d3%3A0xf44174d5fa753f09!2zVGjDoG5oIHBo4buRIELhur9uIEPDoXQsIELDrG5oIETGsMahbmcsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1744274253660!5m2!1svi!2s"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="map-iframe"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Maincontent4
