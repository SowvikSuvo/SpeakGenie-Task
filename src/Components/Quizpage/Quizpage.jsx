import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import ChallengeLevelPage from './ChallengeLevelPage';

const QuizPage = () => {
    const navigate = useNavigate();
    const [topic, setTopic] = useState('');

    const suggestedTopics = [
        "My Best Friend", "Cricket Basics", "Solar System",
        "Healthy Habits", "Animals & Birds", "School Picnic"
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans text-slate-800">
            {/* Back Button */}
            <div className='flex justify-between'>
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center text-green-700 font-semibold mb-6 hover:opacity-75 transition-all"
                >
                    <span className="mr-2">←</span> Back
                </button>
                <Link
                    to={'/'}
                    className="flex items-center text-green-700 font-semibold mb-6 hover:opacity-75 transition-all"
                >
                    Go Home
                </Link>

         </div>

            <div className="max-w-2xl mx-auto space-y-6">

                {/* Header Card */}
                <section className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                    <header>
                        <span className="text-green-500 font-bold tracking-widest text-xs uppercase">Learn Tab</span>
                        <h1 className="text-3xl font-bold mt-2 mb-4">Craft a custom quiz</h1>
                        <p className="text-slate-500 mb-6 leading-relaxed">
                            Pick a topic, choose difficulty, and we will build four fun questions instantly.
                        </p>
                    </header>

                    <div className="flex flex-wrap gap-3">
                        <span className="bg-green-50 text-green-600 px-4 py-1.5 rounded-full text-sm font-medium border border-green-100 flex items-center">
                            ✨ AI Powered
                        </span>
                        <span className="bg-slate-100 text-slate-500 px-4 py-1.5 rounded-full text-sm font-medium">
                            4 Questions
                        </span>
                        <span className="bg-slate-100 text-slate-500 px-4 py-1.5 rounded-full text-sm font-medium">
                            Instant play
                        </span>
                    </div>
                </section>

                {/* Step 1: Topic Selection */}
                <section className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                    <span className="text-green-500 font-bold tracking-widest text-xs uppercase">Step 1</span>
                    <h2 className="text-xl font-bold mt-1 mb-4">Choose a topic</h2>

                    <div className="relative mb-6">
                        <input
                            type="text"
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            placeholder='e.g. "My school day" or "Planets in space"'
                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
                            maxLength={60}
                        />
                        <span className="absolute right-4 top-4 text-slate-400 text-sm">
                            {topic.length}/60
                        </span>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {suggestedTopics.map((item) => (
                            <button
                                key={item}
                                onClick={() => setTopic(item)}
                                className={`px-5 py-2.5 rounded-full border text-sm font-medium transition-all ${topic === item
                                        ? 'bg-slate-800 text-white border-slate-800'
                                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-400'
                                    }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Step 2: Challenge Level Placeholder */}
                <section className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm opacity-60">
                    <span className="text-slate-400 font-bold tracking-widest text-xs uppercase">Step 2</span>
                    <h2 className="text-xl font-bold mt-1 text-slate-700">Pick a challenge level</h2>

                    <ChallengeLevelPage></ChallengeLevelPage>
                </section>

                {/* Generate Button */}
                <button
                    disabled={!topic}
                    className={`w-full py-5 rounded-2xl text-lg font-bold transition-all shadow-lg ${topic
                            ? 'bg-green-600 text-white hover:bg-green-700 active:scale-[0.98]'
                            : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                        }`}
                >
                    Generate Quiz
                </button>
            </div>
        </div>
    );
};

export default QuizPage;