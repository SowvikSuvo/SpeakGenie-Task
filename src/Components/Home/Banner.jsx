import { Gem, Moon, MoreHorizontal } from "lucide-react";

const Banner = () => {
  return (
    <div>
      <div className="bg-[#22C55E] p-6 md:p-10 rounded-b-[40px] text-white relative shadow-lg">
        <div className=" lg:flex justify-between items-center mb-8 max-w-5xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 md:w-20 md:h-20 rounded-full border-2 border-white/50 overflow-hidden">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Lorenzo"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm md:text-lg opacity-90">Good Night</p>
              <h2 className="text-2xl md:text-4xl font-bold">Lorenzo</h2>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 md:p-3 rounded-full cursor-pointer hover:bg-white/30">
              <Moon size={24} />
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-full flex items-center gap-2">
              <Gem size={20} className="text-orange-400 fill-orange-400" />
              <span className="font-bold text-lg">30</span>
            </div>
            <button className="bg-orange-400 text-white px-4 py-2 rounded-xl font-black text-xs uppercase shadow-md">
              Pro
            </button>
          </div>
        </div>

        <div className="max-w-2xl mx-auto bg-white/20 backdrop-blur-md rounded-3xl p-6 border border-white/30">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-3">
              <div className="bg-green-400 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border border-white">
                L3
              </div>
              <span className="text-xs font-bold uppercase tracking-widest">
                XP Progress
              </span>
            </div>
            <span className="text-xs opacity-80 italic font-semibold">
              Next: L4
            </span>
          </div>
          <div className="w-full bg-white/30 h-3 rounded-full mb-2">
            <div
              className="bg-white h-full rounded-full"
              style={{ width: "42%" }}
            ></div>
          </div>
          <div className="flex justify-between text-xs font-bold opacity-90 mb-5">
            <span>42/100 XP</span>
          </div>
          <div className="flex justify-between items-center pt-4 border-t border-white/20">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-md">
                <MoreHorizontal size={18} />
              </div>
              <span className="font-bold text-xl md:text-2xl">242 XP</span>
            </div>
            <MoreHorizontal size={24} className="opacity-60" />
          </div>
        </div>
        <div className="text-center pt-8"></div>
      </div>
    </div>
  );
};

export default Banner;
