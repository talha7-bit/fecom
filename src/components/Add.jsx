import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";

const Add = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const URL=import.meta.env.VITE_API_URL;

  const {mutate}=useMutation({
    mutationFn:async(data)=>{
      const res=await axios.post(`${URL}/api/product/create`,data,{headers:{
        "Content-Type":"multipart/form-data",
      },withCredentials:true});
      return res;
    },
    onSuccess:(res)=>{
      console.log(res.message);
    },
    onError:(err)=>{
      alert("You are not authorized person");
    }
  })

  const onSubmit = (data) => {
    const formdata=new FormData();
    formdata.append("name",data.name);
    formdata.append("category",data.category);
    formdata.append("description",data.description);
    formdata.append("specifications",data.specifications);
    formdata.append("originalprice",Number(data.originalprice));
    formdata.append("discountprice",Number(data.discountprice));
    formdata.append("image",data.image[0]);
    mutate(formdata);
  };

 return (
  <div className="h-screen bg-gradient-to-br from-gray-400 via-gray-500 to-gray-700 flex items-center justify-center p-4 overflow-hidden">
    
    <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-6 h-[90vh] overflow-y-auto mt-7">
      
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Add New Product
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div>
          <label className="block text-gray-700 text-sm mb-1">
            Product Name
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-gray-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm mb-1">
            Category
          </label>
          <input
            type="text"
            {...register("category", { required: true })}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-gray-500 outline-none"
          />
        </div>
 
        <div className="md:col-span-2">
          <label className="block text-gray-700 text-sm mb-1">
            Description
          </label>
          <textarea
            rows="1"
            {...register("description", { required: true })}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-gray-500 outline-none"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-gray-700 text-sm mb-1">
            Specifications
          </label>
          <textarea
            rows="1"
            {...register("specifications", { required: true })}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-gray-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm mb-1">
            Original Price
          </label>
          <input
            type="number"
            {...register("originalprice", { required: true })}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-gray-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm mb-1">
            Discount Price
          </label>
          <input
            type="number"
            {...register("discountprice", { required: true })}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-gray-500 outline-none"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-gray-700 text-sm mb-1">
            Product Image
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white"
          />
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-800 transition font-medium cursor-pointer"
          >
            Add Product
          </button>
        </div>

      </form>
    </div>
  </div>
);
};

export default Add;