import React, { useRef } from 'react';
import { Phone, ChevronRight, ChevronLeft } from 'lucide-react';

const PracticeSection = () => {
    // স্ক্রল কন্ট্রোল করার জন্য রেফ (Ref)
    const scrollRef = useRef(null);

    const practiceData = [
        {
            id: 1,
            title: "Favorite Animals",
            description: "Talk about your favorite animals and pets",
            image: "https://img.freepik.com/free-vector/colorful-farm-animals-collection_23-2148450371.jpg",
            tag: "Be first!",
            buttonText: "Join & Start Call"
        },
        {
            id: 2,
            title: "Hobbies",
            description: "Share your favorite activities and interests",
            image: "https://img.freepik.com/free-vector/hobby-concept-illustration_114360-1042.jpg",
            tag: "3 Online",
            buttonText: "Join Now"
        },
        {
            id: 3,
            title: "Daily Routine",
            description: "Describe your day from morning to night",
            image: "https://img.freepik.com/free-vector/daily-routine-concept-illustration_114360-6615.jpg",
            tag: "5 Online",
            buttonText: "Join & Start Call"
        },
        {
            id: 4,
            title: "Travel Dreams",
            description: "Talk about places you want to visit",
            image: "https://img.freepik.com/free-vector/travel-concept-illustration_114360-1234.jpg",
            tag: "Be first!",
            buttonText: "Join Now"
        }
    ];

 
    const scroll = (direction) => {
        const { current } = scrollRef;
        if (direction === 'left') {
            current.scrollLeft -= 400;
        } else {
            current.scrollLeft += 400;
        }
    };

    return (
        <div className=" py-10">
       
            <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                    <div className="bg-purple-100 p-2.5 rounded-2xl text-purple-600 shadow-sm">
                        <Phone size={24} fill="currentColor" className="opacity-80" />
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-800 text-xl md:text-2xl">Practice with Humans</h3>
                        <p className="text-xs text-gray-400 font-medium md:hidden">Scroll to explore</p>
                    </div>
                </div>


                <div className="flex items-center gap-4">
                    <button className="hidden md:flex text-green-500 text-sm font-bold items-center gap-1 hover:underline mr-2">
                        Show all <ChevronRight size={18} />
                    </button>

                   
                    <div className="hidden md:flex gap-2">
                        <button
                            onClick={() => scroll('left')}
                            className="p-3 border-2 border-gray-100 rounded-full hover:bg-white hover:border-green-500 hover:text-green-500 transition-all shadow-sm bg-gray-50 text-gray-400"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="p-3 border-2 border-gray-100 rounded-full hover:bg-white hover:border-green-500 hover:text-green-500 transition-all shadow-sm bg-gray-50 text-gray-400"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Horizontal Scrollable Container */}
            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {practiceData.map((item) => (
                    <div
                        key={item.id}
                        className="min-w-[310px] md:min-w-[420px] h-[240px] rounded-[45px] relative overflow-hidden shadow-xl group cursor-pointer transition-transform duration-300 active:scale-95"
                    >
                        {/* Background Image */}
                        <img
                            src={item.image}
                            alt={item.title}
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                        {/* Top Status Tag */}
                        <div className="absolute top-5 right-6 bg-black/30 backdrop-blur-xl text-white text-[10px] md:text-xs font-bold px-5 py-2 rounded-full border border-white/20 shadow-lg">
                            {item.tag}
                        </div>

                        {/* Text Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col gap-4">
                            <div>
                                <h4 className="text-white text-xl md:text-2xl font-black tracking-tight">{item.title}</h4>
                                <p className="text-white/80 text-xs md:text-sm font-medium line-clamp-1">{item.description}</p>
                            </div>

                            {/* Action Button */}
                            <button className="bg-white hover:bg-green-50 text-green-600 font-extrabold py-3.5 px-8 rounded-full text-sm shadow-xl transition-all hover:scale-105 active:scale-90 text-center w-full md:w-max">
                                {item.buttonText}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PracticeSection;