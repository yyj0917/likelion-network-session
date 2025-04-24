import { useEffect, useState } from "react";
import { Restaurant } from "../types/restaurant";
import { getRestaurantAll } from "../api/get";
import { Link, MapPin, MessageCircleMore, Pencil, SquareX } from "lucide-react";
import { deleteRestaurant } from "../api/delete";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";


export default function GetPage() {
    const router = useNavigate();
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const tmp_img_arr = [
        "src/assets/tmp_img/onion1.jpg",
        "src/assets/tmp_img/onion2.jpg",
        "src/assets/tmp_img/onion3.jpg",
        "src/assets/tmp_img/onion4.jpg",
        "src/assets/tmp_img/onion5.jpg",
        "src/assets/tmp_img/onion6.jpg",
    ]
    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const response = await getRestaurantAll();
                setRestaurants(response);
            } catch (error) {
                console.error("Error fetching restaurants:", error);
            }
        };
        setIsLoading(true);
        setTimeout(() => {
            fetchRestaurants();
            setIsLoading(false);
        }, 1500);
    }, [])

    const handleDelete = async (id: string) => {
        try {
            if (window.confirm("이 식당을 삭제하시겠습니까?")) {
                await deleteRestaurant(id);
                setRestaurants((prevRestaurants) => 
                    prevRestaurants.filter((restaurant) => restaurant.id !== id)
                );
            } else {
                alert("취소!");
            }
                
        } catch (error) {
            console.error("Error deleting restaurant:", error);
        }
    }
    return (
        <div className='p-4 w-full h-full overflow-y-auto scrollbar-hide'>
            <ul className='flex flex-col gap-4'>
                {restaurants.map((restaurant) => {
                    if (restaurant.name === '더미') return null;
                    return (
                        <li 
                        key={restaurant.id} 
                        className='w-full h-auto flex justify-start gap-4 border border-orange-400 rounded-xl'>
                        <img 
                            src={tmp_img_arr[6 % +(restaurant.id ?? 0)]} 
                            alt={restaurant.name} 
                            className='size-40 p-2 rounded-2xl object-fit'/>
                        <div className='py-2 pr-2 max-w-[384px] flex flex-col items-start gap-2'>
                            <h2 className='w-full flex justify-between items-center text-2xl font-bold text-[#2A2A6F]'>
                                <span>{restaurant.name}</span>
                                <div className='flex items-center gap-2'>
                                    <button 
                                        className='text-orange-600 cursor-pointer'
                                        onClick={() => router(`/patch/${restaurant.id}`)}>
                                        <Pencil/>
                                    </button>
                                    <button 
                                        className='text-orange-600 cursor-pointer'
                                        onClick={() => handleDelete(restaurant.id ?? '')}>
                                        <SquareX />
                                    </button>
                                </div>
                            </h2>
                            <p className='flex gap-1'>
                                <MapPin className='text-orange-500 shrink-0'/>
                                <span>{restaurant.location}</span>
                            </p>
                            <p className='flex gap-1'>
                                <MessageCircleMore className='text-orange-500 shrink-0'/>
                                <span>{restaurant.comment}</span>
                            </p>
                            <a 
                                href={restaurant.restaurant_url} 
                                target='_blank' 
                                rel='noreferrer' 
                                className='max-w-[384px] flex gap-1 text-[#2A2A6F] underline'>
                                <Link className='text-orange-500 shrink-0'/>
                                <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                                    {restaurant.restaurant_url}
                                </span>
                            </a>
                        </div>
                    </li>
                    )
                })}
            </ul>
            {isLoading && <Loading/>}
        </div>
    )
}