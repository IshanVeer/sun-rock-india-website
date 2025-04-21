"use client";
import React, { useState } from "react";
import { productData } from "@/constants";
import Image from "next/image";

const ProductShowcase = () => {
  const [selectedProduct, setSelectedProduct] = useState(productData[0]);
  return (
    <div className="flex bg-[#E7EBED] p-12 gap-12 min-h-screen items-center">
      {/* Sidebar */}
      <div className="flex flex-col text-light-600 gap-4 relative border-l border-gray-300 pl-8">
        {productData.map((product) => (
          <button
            key={product.name}
            onClick={() => setSelectedProduct(product)}
            className={`text-left font-medium ${
              selectedProduct?.name === product.name
                ? "text-[#0f1d40] font-semibold"
                : "text-gray-500"
            }`}
          >
            {product.name}
          </button>
        ))}

        {/* Vertical dot indicator */}
        <div
          className="absolute -left-[7px] top-[2px] h-5 w-2 rounded-full bg-[#0f1d40] transition-all"
          style={{
            top: `${
              productData.findIndex((p) => p?.name === selectedProduct.name) *
              40
            }px`,
          }}
        />

        {/* Button */}
        <button className="mt-8 px-4 py-2 bg-white text-[#0f1d40] font-semibold rounded-lg shadow-sm hover:shadow-md transition">
          See All Products
        </button>
      </div>

      {/* Right Panel */}
      <div className="bg-white p-8 rounded-2xl shadow-lg flex gap-8 items-start max-w-2xl">
        <Image
          src="/assets/images/river-white.png"
          alt={selectedProduct.name}
          height={500}
          width={500}
        />
        <div>
          <h2 className="text-2xl font-bold text-dark-100 mb-2">
            {selectedProduct.name}
          </h2>
          <p className="text-light-600">
            <strong>{selectedProduct.name}</strong>{" "}
            {selectedProduct.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
