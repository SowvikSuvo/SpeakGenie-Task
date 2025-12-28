import  { useState } from 'react';

import { Lightbulb, Sparkles, Target } from 'lucide-react'; // Standard icons

const ChallengeLevelPage = () => {

    const [selectedLevel, setSelectedLevel] = useState('medium');

    const levels = [
        {
            id: 'easy',
            title: 'Easy',
            desc: 'Short sentences & gentle vocabulary.',
            icon: <Lightbulb size={20} />,
            color: 'text-green-500',
            
            activeBorder: 'border-green-400',
            
        },
        {
            id: 'medium',
            title: 'Medium',
            desc: 'Everyday situations with detail.',
            icon: <Sparkles size={20} />,
            color: 'text-orange-500',
            
            activeBorder: 'border-green-400', // Reference shows green border even for medium
       
        },
        {
            id: 'hard',
            title: 'Hard',
            desc: 'Longer thinking and tricky choices.',
            icon: <Target size={20} />,
            color: 'text-purple-500',
            
            activeBorder: 'border-green-400',
        
        }
    ];

    return (
        <div className="min-h-screen  flex justify-center p-4 md:p-8 lg:p-12 font-sans">
            <div className="w-full space-y-6">

                {/* Back Button */}
              

                {/* Step Container */}
                <div className=" rounded-[2.5rem] p-6 md:p-8 shadow-sm border border-gray-100">
                   

                    <div className="space-y-4">
                        {levels.map((level) => (
                            <button
                                key={level.id}
                                onClick={() => setSelectedLevel(level.id)}
                                className={` lg:w-full text-left p-5 rounded-3xl border-2 transition-all relative overflow-hidden ${selectedLevel === level.id
                                        ? `${level.activeBorder} shadow-md `
                                        : `${level.borderColor}  hover:border-gray-200`
                                    }`}
                            >
                                <div className="flex justify-between items-start mb-1">
                                    <span className={`font-bold text-lg ${level.color}`}>{level.title}</span>
                                    <span className={level.color}>{level.icon}</span>
                                </div>
                                <p className="text-slate-400 text-sm md:text-base pr-8">
                                    {level.desc}
                                </p>

                                {selectedLevel === level.id && (
                                    <div className="mt-3 inline-block text-green-600 px-3 py-1 rounded-full text-xs font-bold border border-green-100">
                                        Selected
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Info Banner */}
                <div className="bg-[#10B981] rounded-[2.5rem] p-8 text-white ">
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-80">What you'll get</span>
                    <h3 className="text-xl md:text-2xl font-bold mt-2 mb-6 leading-tight">
                        Friendly quiz with instant feedback
                    </h3>

                    <ul className="space-y-4">
                        <li className="flex items-start gap-3 text-sm md:text-base font-medium leading-relaxed">
                            <div className="w-2 h-2 rounded-full mt-2 shrink-0" />
                            Bite-sized explanations for every answer.
                        </li>
                        <li className="flex items-start gap-3 text-sm md:text-base font-medium leading-relaxed">
                            <div className="w-2 h-2 rounded-full  mt-2 shrink-0" />
                            Tone automatically matches the learner profile.
                        </li>
                    </ul>
                </div>

          
            </div>
        </div>
    );
};

export default ChallengeLevelPage;