"use client"
import React from 'react';
import { useEffect, useState } from "react"
import "./footer.scss"

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <footer className={`footer bg-[#669933] text-white py-8 ${isVisible ? "visible" : ""}`}>
      <div className="footer-overlay container mx-auto">
        <div className="footer-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-5">
          {/* Cột 1: Logo + mô tả */}
          <div className="footer-col">
            <div className="logo w-[150px] h-[100px] flex items-center justify-center bg-white rounded-lg mb-4">
              <img
                className="max-h-full animated-logo"
                src="http://hoaqua.langsonweb.com/wp-content/uploads/2020/09/logo-hoa-qua.png"
                alt="Halona Fruits Logo"
              />
            </div>
            <h3 className="footer-heading font-medium text-lg mb-3">Về chúng tôi</h3>
            <p className="footer-text">
              Chuyên cung cấp các loại hoa quả nhập khẩu, nội địa và các loại
              thực phẩm từ thiên nhiên.
            </p>
          </div>

          {/* Cột 2: Liên hệ */}
          <div className="footer-col">
            <h3 className="footer-heading font-medium text-lg mb-3">Liên hệ</h3>
            <p className="footer-contact-item">🏠 335 Hiệp Bình, Thủ Đức, HCM</p>
            <p className="footer-contact-item">📞 0986.989.626 - 0986.989.626</p>
            <p className="footer-contact-item">✉️ KietTopweb.com.vn@gmail.com</p>
            <p className="footer-contact-item">🌐 fb.com/AnhThoNu.com.vn</p>
          </div>

          {/* Cột 3: Tin tức */}
          <div className="footer-col">
            <h3 className="footer-heading font-medium text-lg mb-3">Tin tức</h3>
            <ul className="footer-list">
              <li className="footer-list-item">Kỹ thuật trồng rau sạch trong chậu xốp tại nhà đơn giản</li>
              <li className="footer-list-item">
                Eat Clean – bí kíp để có thân hình xinh như mơ của cô nàng 9x
              </li>
              <li className="footer-list-item">
                Lấy lại vòng eo con kiến nhờ công thức từ củ đậu và rau cải
              </li>
              <li className="footer-list-item">KM: Tháng giải phóng mỡ thừa, da xấu, độc tố trong cơ thể</li>
            </ul>
          </div>

          {/* Cột 4: Về chúng tôi */}
          <div className="footer-col">
            <h3 className="footer-heading font-medium text-lg mb-3">Về Chúng Tôi</h3>
            <ul className="footer-list">
              <li className="footer-list-item">Giới thiệu</li>
              <li className="footer-list-item">Lĩnh vực hoạt động</li>
              <li className="footer-list-item">Chính sách chất lượng</li>
              <li className="footer-list-item">Triết lý kinh doanh</li>
              <li className="footer-list-item">Năng lực - cơ sở vật chất</li>
            </ul>
          </div>
        </div>
        <div className="copyright text-center pt-4 border-t border-white/30">
          Copyright 2025 © Thiết kế website by Anh Thơ Nụ.com.vn
        </div>
      </div>
    </footer>
  )
}

export default Footer
