import React, { useRef } from 'react';
import { Moon, Gem, MoreHorizontal, Video, Phone, BookOpen, Smartphone, ChevronRight, ChevronLeft, Trophy, } from 'lucide-react';


import Banner from './Banner';
import Audioplayer from './Audioplayer';
import PracticeSection from './PracticeSection';
import { Link } from 'react-router';


const Home = () => {

    const scrollRef = useRef(null);

   
    const scroll = (direction) => {
        const { current } = scrollRef;
        if (direction === 'left') {
            current.scrollLeft -= 300;
        } else {
            current.scrollLeft += 300;
        }
    };


    return (
        <div className="bg-gray-50 px-4 pb-24 font-sans">
            <div className="max-w-6xl mx-auto bg-white  shadow-sm">

                {/* Green Header Section */}
                <Banner></Banner>
              
                {/* Icons Grid */}
                <div className="max-w-5xl mx-auto grid grid-cols-4 gap-4 p-8 md:p-12">
                    {[
                        { icon: <Video size={32} className="text-blue-500" />, label: 'Video Learning', color: 'bg-blue-50' },
                        { icon: <Phone size={32} className="text-blue-400" />, label: 'Peer Calls', color: 'bg-blue-50' },
                        { icon: <BookOpen size={32} className="text-red-400" />, label: 'Stories', color: 'bg-red-50' },
                        { icon: <Smartphone size={32} className="text-red-600" />, label: 'AI Calls', color: 'bg-red-50' },
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center gap-2 cursor-pointer group">
                            <div className={`w-16 h-16 md:w-24 md:h-24 ${item.color} rounded-full shadow-sm flex items-center justify-center border border-white group-hover:scale-110 transition-transform`}>
                                {item.icon}
                            </div>
                            <span className="text-[10px] md:text-sm font-bold text-gray-500 text-center">{item.label}</span>
                        </div>
                    ))}
                </div>

           
                <div className="   pb-10">
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-3">
                            <div className="bg-green-100 p-2 rounded-lg text-green-600 font-bold"><BookOpen size={20} /></div>
                            <h3 className="font-bold text-gray-800 text-xl md:text-2xl">Audio Stories</h3>
                        </div>

                        {/* Scroll Buttons for Desktop */}
                        <div className="hidden md:flex gap-2">
                            <button onClick={() => scroll('left')} className="p-2 border rounded-full hover:bg-gray-100 text-gray-600"><ChevronLeft size={20} /></button>
                            <button onClick={() => scroll('right')} className="p-2 border rounded-full hover:bg-gray-100 text-gray-600"><ChevronRight size={20} /></button>
                        </div>
                    </div>

                    
                    <Audioplayer scrollRef={scrollRef}></Audioplayer>
                    <PracticeSection></PracticeSection>

                    <div className="px-4 md:px-12 mt-8 mb-12 flex text-center justify-center">
                        <Link to={'/quiz'} className="w-full max-w-md py-5 rounded-2xl text-lg font-bold transition-all shadow-lg bg-green-600 text-white hover:bg-green-700 active:scale-[0.98] shadow-green-200">
                            Get Started Quiz
                        </Link>
                    </div>
                
                </div>
            </div>

            {/* Bottom Nav */}
            <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t flex justify-center py-4 z-50">
                <div className="flex justify-around items-center w-full max-w-md">
                    <NavItem active icon={<Smartphone size={24} />} label="Home" />
                    <NavItem icon={<Trophy size={24} />} label="Learn" />
                    <NavItem icon={<Phone size={24} />} label="Call" />
                    <NavItem icon={<MoreHorizontal size={24} />} label="Profile" />
                </div>
            </nav>
        </div>
    );
};

const NavItem = ({ icon, label, active = false }) => (
    <div className="flex flex-col items-center gap-1 cursor-pointer">
        <div className={`${active ? 'text-green-600' : 'text-gray-400'} p-2`}>{icon}</div>
        <span className={`text-[10px] font-bold ${active ? 'text-green-600' : 'text-gray-400'}`}>{label}</span>
    </div>
);

export default Home;