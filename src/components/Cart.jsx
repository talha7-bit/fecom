import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

const Cart = () => {
  const queryClient = useQueryClient();

  const { data: cartItems, isLoading, isError, error } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const response = await axios.get(
        "http://localhost:3000/api/user/getallorders",
        { withCredentials: true }
      );
      return response.data.data;
    },
    refetchOnMount:true
  });

  const {data:totalbalance}=useQuery({
    queryKey:["totalbalance"],
    queryFn:async()=>{
        const response=await axios.get("http://localhost:3000/api/user/fetchtotalpayment",{withCredentials:true});
        return response.data.data;
    }
  })
  const URL=import.meta.env.VITE_API_URL;
  const { mutate: removeItem, isLoading: removing } = useMutation({
    mutationFn: async (id) => {
      const response = await axios.post(
        `${URL}/api/order/remove/${id}`,
        {},
        { withCredentials: true }
      );
      return response.data;
    },
    onSuccess: (res) => {
      queryClient.invalidateQueries(["cart"]);
      queryClient.invalidateQueries(["totalbalance"]);
      toast.success(res.message);
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-gray-600 text-xl">
        Loading cart...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-gray-600 text-xl">
        {error.message}
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-gray-100 p-8 mt-5">
      <h1 className="text-4xl font-bold mb-10 text-center">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-700 text-xl">Your cart is empty</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-28 object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {item.name}
                </h2>
                <p className="text-gray-600 mb-4">${item.price}</p>
                <button
                  onClick={() => removeItem(item._id)}
                  disabled={removing}
                  className={`px-4 py-2 rounded-xl text-white ${
                    removing
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-red-600 hover:bg-red-700"
                  }`}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>


          <div className="mt-10 text-right">
            <h2 className="text-2xl font-bold text-gray-800">
             Total: {totalbalance}$
            </h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;