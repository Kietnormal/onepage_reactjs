
import React from 'react'
import { useEffect, useState } from "react"
import "./productList.scss"

const products = [
  {
    id: 1,
    name: "Vải nhập khẩu",
    discount: "-33%",
    oldPrice: "90.000₫",
    price: "60.000₫",
    image: "https://hoaqua.langsonweb.com/wp-content/uploads/2020/09/hoa-qua-4.jpg",
  },
  {
    id: 2,
    name: "Táo nhập khẩu",
    discount: "-13%",
    oldPrice: "80.000₫",
    price: "70.000₫",
    image: "https://hoaqua.langsonweb.com/wp-content/uploads/2020/09/hoa-qua-3.jpg",
  },
  {
    id: 3,
    name: "Cà chua Đà Lạt",
    discount: "-20%",
    oldPrice: "100.000₫",
    price: "80.000₫",
    image: "https://hoaqua.langsonweb.com/wp-content/uploads/2020/09/hoa-qua-2.jpg",
  },
  {
    id: 4,
    name: "Bom mỹ",
    discount: "-10%",
    oldPrice: "200.000₫",
    price: "180.000₫",
    image: "https://hoaqua.langsonweb.com/wp-content/uploads/2020/09/hoa-qua-1.jpg",
  },
]

function ProductList() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className={`product-section bg-[#FFFDF1] py-10 ${isVisible ? "visible" : ""}`}>
      <h2 className="animated-title text-center text-[#5C2200] font-extrabold text-2xl mb-2">TRÁI CÂY NHẬP KHẨU</h2>
      <p className="animated-subtitle text-center mb-8">
        Là nhà cung cấp thực phẩm tươi sạch hàng đầu khu vực phía nam
      </p>
      <div className="product-list container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {products.map((item, index) => (
          <div
            className="product-card relative bg-white border border-[#669933] rounded-md overflow-hidden"
            key={item.id}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="image-container p-4 flex justify-center">
              <div className="discount-badge absolute top-[20px] left-[25px] bg-[#F851A7] rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">
                {item.discount}
              </div>
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                className="product-image w-[220px] h-[250px] object-cover"
              />
            </div>
            <div className="product-info text-center p-4">
              <h3 className="product-title text-[#F851A7] font-semibold mb-2">{item.name}</h3>
              <div className="price-container flex items-center justify-center space-x-1.5 mb-3">
                <p>Giá:</p>
                <p className="original-price line-through text-gray-500">{item.oldPrice}</p>
                <p className="sale-price font-semibold text-[#FF0000]">{item.price}</p>
              </div>
              <button className="buy-button bg-[#669933] text-white px-4 py-2 rounded-[3px] font-bold transition-all duration-300 hover:bg-amber-400 hover:text-[#F851A7] border border-[#ddd]">
                Mua ngay
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="view-more-button bg-[#669933] text-white  py-2 w-[120px] rounded-full transition-all duration-300 hover:bg-white hover:text-[#669933] border border-[#669933]">
          Xem thêm
        </button>
      </div>
    </div>
  )
}

export default ProductList
