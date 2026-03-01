import React from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../useAuth";

const ProductDetails = () => {
  
    const queryclient=useQueryClient();
    const[added,setadded]=useState(false);
    const[isclicked,setisclicked]=useState(false);
    const {data:user}=useAuth();
  const { id } = useParams();
  const URL=import.meta.env.VITE_API_URL;
  const {data:product,isLoading,isError,error}=useQuery({
    queryKey:["product",id],
    queryFn:async()=>{
        const response=await axios.get(`${URL}/api/product/getone/${id}`);
        return response.data.data;
    }
  })

  const {mutate}=useMutation({
    mutationFn:async(productdata)=>{
        const response=await axios.post(`${URL}/api/order/place/${productdata._id}`,productdata,{withCredentials:true});
        return response.data;
    },
    onSuccess:(res)=>{
    queryclient.invalidateQueries(["totalbalance"]);
    toast.success(res.message);
    setadded(true);
    setisclicked(true);
    },
    onError:(err)=>{
        toast.error("error occured please login first");
    }
  })

  const handleclick=()=>{
    if(user==200){
      mutate(product);
    }else{
      toast.error("please login first");
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-600 text-white text-xl">
        Loading product...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-600 text-white text-xl">
        {error.message}
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-600 text-white text-xl">
        Product not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-400 via-gray-600 to-gray-700 flex items-center justify-center p-8">
      <div className="bg-gray-200 rounded-2xl shadow-2xl max-w-5xl w-full grid md:grid-cols-2 gap-8 p-8">
        
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover rounded-xl"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {product.name}
            </h1>

            <p className="text-gray-700 mb-4">
              {product.description}
            </p>

            <p className="text-gray-800 mb-6">
              <span className="font-semibold">Specifications:</span>{" "}
              {product.specifications}
            </p>

            <div className="flex items-center gap-4 mb-6">
              <span className="line-through text-gray-600 text-lg">
                ${product.originalprice}
              </span>

              <span className="text-green-600 font-bold text-2xl">
                ${product.discountprice}
              </span>
            </div>
          </div>

          <button onClick={handleclick} disabled={isclicked} className={`text-white py-3 rounded-xl hover:bg-gray-800 transition duration-300 font-semibold ${added ? "bg-gray-400 disable" : "bg-black"}`}>
            {added? "Added" : "Add To Cart"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;