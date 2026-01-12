import axios from "axios";
import { useEffect,useState } from "react";

const BestSeller = () => {
    const [bestSellers, setBestSellers] = useState([]);

    useEffect(() => {
        const fetchBestSellers = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/products/best-sellers`);
                setBestSellers(response.data);
            } catch (error) {
                console.error("Error fetching best sellers:", error);
            }
        };
        fetchBestSellers();
    }, []);
    return (
        <div className="w-full h-full flex flex-col p-4 flex-grow-1">
            <h1 className="text-2xl font-bold mb-4 text-center pt-2">Best Sellers</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {bestSellers.map((product) => (
                    <div key={product._id} className="border p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
                        <img src={product.img} alt={product.title} className="w-full h-48 object-cover mb-4" />
                        <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                        <p className="text-gray-600 mb-2">Brand: {product.brand}</p>
                        <p className="text-yellow-500 mb-2">Rating: {product.rating} ⭐</p>
                        <p className="text-gray-800 font-bold">Price: ${product.sellPrice}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BestSeller;