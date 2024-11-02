import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IoIosPricetag } from "react-icons/io";
import { RiDiscountPercentFill } from "react-icons/ri";
import { MdOutlinePreview } from "react-icons/md";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { FcRating } from "react-icons/fc";
import { LuLoader } from "react-icons/lu";

export const Details = () => {
    const { productId } = useParams();
    const[Isloading,setIsLoading]=useState(true)
    const [storedata, setStoreData] = useState({});
  

    useEffect(() => {
        const handleData = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${productId}`);
                if (!response.ok) {
                    throw new Error("You have missing something");
                }
                const data = await response.json();
                setStoreData(data);
            } catch (err) {
                setError(err.message);
            }
            finally{
                setIsLoading(false)
            }
        };
        handleData();
    }, [productId]);

    return (
        <div>
              {Isloading ? (
                 <h1 className="h-96 w-full text-8xl flex justify-center p-20 items-center" ><LuLoader className="inline-block"/></h1>
                ):(
            <div className="p-4"> 
                <h1 className="text-center text-4xl text-blue-950 font-bold">Products Details Page</h1>
                <div className="h-auto w-full bg-white p-3 mt-2">
                    <h1 className="text-center text-3xl text-red-700 font-medium">Brand: {storedata.brand}</h1>
                    {storedata.images && storedata.images.length > 0 && (
                        <img
                            className="m-auto h-[300px] w-[300px] border-2 border-blue-950 rounded-lg shadow-blue-500 shadow-inner"
                            src={storedata.images[0]}
                            alt="Product"
                        />
                    )}
                    <h1 className="text-lg font-semibold text-green-800">Description:</h1>
                    <p>{storedata.description}</p>
                    <div className="flex items-center justify-center">
                        <div className="flex items-center">
                            <span className="mr-1"><IoIosPricetag /></span>
                            <span className="text-green-900 font-semibold text-lg">Price:</span>
                            <span className="font-bold">{storedata.price}</span>
                            <span className="ml-2"><RiDiscountPercentFill /></span>
                            <span className="text-green-900 font-semibold text-lg">Discount Percentage:</span>
                            <span className="font-bold">{storedata.discountPercentage}</span>
                            <span className="ml-2"><FcRating /></span>
                            <span className="font-bold text-green-900">Rating:</span>
                            <span className="font-bold">{storedata.rating}</span>
                            <span className="font-bold text-green-900 ml-2">Return Policy:</span>
                            <span className="font-bold">{storedata.returnPolicy}</span>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold text-pink-800"><MdOutlinePreview className="inline-block" /> Comments/Reviews:</h1>
                        <div>
                            {storedata.reviews && storedata.reviews.length > 0 ? (
                                storedata.reviews.map((review, index) => (
                                    <div key={index} className="bg-gray-200 p-2 m-2 hover:scale-95 duration-150 border-2 border-blue-800">
                                        <h1 className="font-semibold hover:text-orange-600">Reviewer Name: {review.reviewerName}</h1>
                                        <h1 className="font-semibold hover:text-orange-600">Email: {review.reviewerEmail}</h1>
                                        <p className="font-semibold hover:text-orange-600">Comment: {review.comment}</p>
                                        <p className="font-semibold hover:text-orange-600"><FcRating className="inline-block" /> Rating: {review.rating}</p>
                                    </div>
                                ))
                            ) : (
                                <p className="text-fuchsia-950 text-4xl font-semibold">No reviews available.</p>
                            )}
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold text-amber-800 text-lg"><MdOutlineQrCodeScanner className="inline-block" /> QR Code:</h1>
                        {storedata.meta && storedata.meta.qrCode && (
                            <img src={storedata.meta.qrCode} alt="QR Code" />
                        )}
                    </div>
                </div>
            </div>
        )}
        </div>
    );
};
