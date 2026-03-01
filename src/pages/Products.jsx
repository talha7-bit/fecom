import React, { useEffect, useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate=useNavigate();

  const URL=import.meta.env.VITE_API_URL;
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: async () => {
      const response = await axios.get(
        `${URL}/api/product/fetchall`
      );
      return response.data.data;
    },
    onSuccess: (data) => {
      setProducts(data);
    },
  });

  useEffect(() => {
    mutate();
  }, []);

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-600 text-white text-xl">
        Loading...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-600 text-white text-xl">
        No product listed
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-400 via-gray-600 to-gray-700 p-8">
      <h1 className="text-4xl font-bold text-center text-white mb-10 mt-5">
        Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products?.map((product) => (
          <div
            onClick={()=>navigate(`/productdetails/${product._id}`)}
            key={product._id}
            className="bg-gray-300 rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h2 className="text-lg font-bold text-gray-800 mb-3">
                {product.name}
              </h2>

              <div className="flex items-center gap-4">
                <span className="line-through text-gray-600">
                  ${product.originalprice}
                </span>

                <span className="text-green-600 font-bold text-lg">
                  ${product.discountprice}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;