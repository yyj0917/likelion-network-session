import { useState } from "react";
import { createRestaurant } from "../api/post";
import { useNavigate } from "react-router-dom";


export default function PostPage() {
    const router = useNavigate();
    const [name, setName] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [comment, setComment] = useState<string>("");
    const [restaurantUrl, setRestaurantUrl] = useState<string>("");

    const inputArr = [
        { name: "name", value: name, setValue: setName, label: "식당 이름" },
        { name: "location", value: location, setValue: setLocation, label: "식당 위치" },
        { name: "comment", value: comment, setValue: setComment, label: "한줄평" },
        { name: "restaurantUrl", value: restaurantUrl, setValue: setRestaurantUrl, label: "바로가기 링크" },
    ]

    const handleInit = () => {
        setName("");
        setLocation("");
        setComment("");
        setRestaurantUrl("");
    }

    const handleSubmit = async () => {
        await createRestaurant({
            name,
            location,
            comment,
            restaurant_url: restaurantUrl,
            image_url: "https://source.unsplash.com/random/800x600/?food",
        })
        alert("식당이 등록되었습니다.");
        router('/');
    }

    return (
        <div className='p-4 w-full h-full flex flex-col justify-between'>
            <form action="" className='flex flex-col gap-4'>
                {inputArr.map((input) => (
                    <div className='w-full flex flex-col gap-2'>
                        <label htmlFor="name" className='text-lg font-semibold'>{input.label}</label>
                        <input 
                            name={input.name}
                            type="text"
                            value={input.value}
                            onChange={(e) => input.setValue(e.target.value)}
                            required
                            className='p-3 w-full border-2 border-orange-400 rounded-xl focus-visible:ring-0 focus:outline-none' />
                    </div>
                ))}
            </form>
            <div className='flex justify-end gap-2'>
                <button 
                    className='p-2 text-[#2A2A6F] border border-[#2A2A6F] rounded-xl'
                    onClick={handleInit}>초기화</button>
                <button 
                    type="submit"
                    className='p-2 text-white bg-orange-400 rounded-xl cursor-pointer'
                    onClick={handleSubmit}
                    >등록하기</button>
            </div>
        </div>
    )
}