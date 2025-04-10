"use client"
import React from 'react';
import { useState, useEffect } from "react"
import { FaCartArrowDown } from "react-icons/fa"
import { CiSearch } from "react-icons/ci"
import "./Header.scss"

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header className={`animated-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="header__top bg-[#669933] text-white">
          <div className="container mx-auto flex items-center h-[40px] justify-between">
            <div className="header__top--content animated-fade-in">
              <h3>Chuyên cung cấp thực phẩm sạch | Halona Fruist</h3>
            </div>
            <div className="header__top--menu">
              <ul className="flex items-center space-x-[10px]">
                <li
                  className="hover:text-[#1C398E] hover:underline animated-slide-in"
                  style={{ animationDelay: "0.1s" }}
                >
                  <a href="#">Tài khoản</a>
                </li>
                <li
                  className="hover:text-[#1C398E] hover:underline animated-slide-in"
                  style={{ animationDelay: "0.2s" }}
                >
                  <a href="#">Thanh toán</a>
                </li>
                <li
                  className="hover:text-[#1C398E] hover:underline animated-slide-in"
                  style={{ animationDelay: "0.3s" }}
                >
                  <a href="#">Cửa hàng</a>
                </li>
                <li
                  className="hover:text-[#1C398E] hover:underline animated-slide-in"
                  style={{ animationDelay: "0.4s" }}
                >
                  <a href="#">Đăng nhập</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="header__bottom bg-white !mt-0">
          <div className="container mx-auto flex items-center justify-between py-2">
            <div className="logo w-[150px] h-[100px] flex items-center justify-center animated-logo">
              <img
                className="max-h-full"
                src="http://hoaqua.langsonweb.com/wp-content/uploads/2020/09/logo-hoa-qua.png"
                alt="Halona Fruits Logo"
              />
            </div>

            <div className="search flex items-center animated-fade-in" style={{ animationDelay: "0.3s" }}>
              <input
                className="border border-[#ddd] h-[36px] px-2 rounded-l search-input"
                type="text"
                placeholder="Tìm kiếm..."
              />
              <div className="bg-[#669933] text-white h-[36px] w-[36px] flex items-center justify-center rounded-r search-button">
                <a className="font-bold" href="">
                  <CiSearch />
                </a>
              </div>
            </div>

            <div className="nav flex items-center space-x-[10px]">
              <a className="text-black hover:text-white hover:bg-[#669933] rounded-2xl px-1.5 py-1 nav-item" href="#">
                Trang chủ
              </a>
              <a className="text-black hover:text-white hover:bg-[#669933] rounded-2xl px-1.5 py-1 nav-item" href="#">
                Sản phẩm
              </a>
              <a className="text-black hover:text-white hover:bg-[#669933] rounded-2xl px-1.5 py-1 nav-item" href="#">
                Giới thiệu
              </a>
              <a className="text-black hover:text-white hover:bg-[#669933] rounded-2xl px-1.5 py-1 nav-item" href="#">
                Tin tức
              </a>
              <a className="text-black hover:text-white hover:bg-[#669933] rounded-2xl px-1.5 py-1 nav-item" href="#">
                Liên hệ
              </a>
              <a
                href="#"
                className="text-black flex items-center hover:text-white hover:bg-[#669933] rounded-2xl px-1.5 py-1 nav-item cart-item"
              >
                <span className="mx-1">Giỏ hàng </span>
                <FaCartArrowDown className="cart-icon" />
              </a>
            </div>
          </div>
          <hr />
        </div>
      </header>
    </>
  )
}

export default Header
