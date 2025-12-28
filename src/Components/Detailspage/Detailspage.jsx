import { useParams, useNavigate } from "react-router";
import {
    ChevronDown,
    FileText,
    CheckSquare,
    Heart,
    Volume2,
    RotateCcw,
    SkipBack,
    Play,
    SkipForward,
    Repeat,
    Gauge,
    
} from "lucide-react";
import {Link} from "react-router"

const Detailspage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const storyData = [
        { id: 1, title: "Choosing the Right Path", subtitle: "A journey of decisions", image: "https://i.ibb.co.com/S7Dr7bhw/images1.jpg", xpReward: 50, category: "Adventure" },
        { id: 2, title: "The Fountain and the Mayor", subtitle: "Village tales and secrets", image: "https://picsum.photos/seed/mayor/400/500", xpReward: 40, category: "Story" },
        { id: 3, title: "The Lesson of the Sap", subtitle: "Wisdom from the forest", image: "https://i.ibb.co.com/0j8TS6Hj/images2.jpg", xpReward: 35, category: "Learning" },
        { id: 4, title: "The Hidden Forest", subtitle: "Explore the unknown", image: "https://i.ibb.co.com/MD62Wbzk/image3.jpg", xpReward: 60, category: "Adventure" },
        { id: 5, title: "Space Discovery", subtitle: "Beyond the stars", image: "https://i.ibb.co.com/6RHgGbjz/images5.jpg", xpReward: 70, category: "Science" },
        { id: 6, title: "Ocean's Secret", subtitle: "Life under the waves", image: "https://i.ibb.co.com/2YfDh92k/images.jpg", xpReward: 45, category: "Nature" },
        { id: 7, title: "The Brave Knight", subtitle: "A hero's tale", image: "https://i.ibb.co.com/R4tgQF93/6427a312c38d99001d8c275d.jpg", xpReward: 55, category: "History" },
        { id: 8, title: "Winter Magic", subtitle: "Snow and wonders", image: "https://i.ibb.co.com/TMNcM7Np/9781805462835-scaled.jpg", xpReward: 30, category: "Fable" },
        { id: 9, title: "The Golden Bird", subtitle: "Legendary treasures", image: "https://i.ibb.co.com/V0FmK3mC/images-1.jpg", xpReward: 80, category: "Myth" },
        { id: 10, title: "Robot Friend", subtitle: "The future is here", image: "https://i.ibb.co.com/tTGV2N4G/978180078991320250929-2-sa6q3h.jpg", xpReward: 65, category: "Tech" },
    ];

    const story = storyData.find((item) => item.id === Number(id));
    if (!story) return <div className="p-10 text-center">Story not found</div>;

    return (
        <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white px-4 py-6 md:px-8 lg:px-12">

            {/* Header */}
            <header className="max-w-6xl mx-auto flex items-center justify-between mb-6">
                <button
                    onClick={() => navigate(-1)}
                    className="p-2 rounded-full bg-white shadow hover:bg-gray-50"
                >
                    <ChevronDown />
                </button>

                <h1 className="text-xs md:text-sm tracking-widest text-gray-500 font-semibold uppercase">
                    Now Playing
                </h1>

                <div className="flex gap-2">
                    <button className="p-2 bg-white rounded-lg shadow hover:bg-gray-50">
                        <FileText size={18} />
                    </button>
                    <button className="relative p-2 bg-emerald-500 text-white rounded-lg shadow">
                        <CheckSquare size={18} />
                        <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                            7
                        </span>
                    </button>
                </div>
            </header>

            {/* Content */}
            <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* Image */}
                <div className="flex justify-center">
                    <div className="w-full max-w-sm aspect-square bg-white p-3 rounded-[28px] shadow-xl">
                        <img
                            src={story.image}
                            alt={story.title}
                            className="w-full h-full object-cover rounded-[22px]"
                        />
                    </div>
                </div>

                {/* Details */}
                <div className="flex flex-col gap-6">
                    <div className="flex justify-between items-start">
                        <div>
                            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
                                {story.title}
                            </h2>
                            <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                                {story.subtitle}. A heartwarming story about{" "}
                                {story.category.toLowerCase()}.
                            </p>
                        </div>
                        <button className="text-gray-400 hover:text-red-500">
                            <Heart />
                        </button>
                    </div>

                    {/* CTA */}
                    <Link to={'/quiz'} className="bg-emerald-500 hover:bg-emerald-600 text-white py-4 px-6 rounded-2xl flex justify-between items-center shadow-lg transition">
                        <div className="flex items-center gap-3">
                            <CheckSquare />
                            <span className="font-semibold">Test Your Understanding</span>
                        </div>
                        <span className="text-xs bg-white/20 px-3 py-1 rounded-full">
                            7 Questions
                        </span>
                    </Link>

                    {/* Audio Player */}
                    <div>
                        <div className="h-1.5 bg-gray-200 rounded-full mb-2">
                            <div className="h-full w-1/4 bg-emerald-400 rounded-full"></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-400 mb-6">
                            <span>0:00</span>
                            <span>2:18</span>
                        </div>

                        <div className="flex justify-between items-center text-gray-500">
                            <Volume2 />
                            <RotateCcw />
                            <SkipBack size={26} />
                            <button className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition">
                                <Play fill="white" />
                            </button>
                            <SkipForward size={26} />
                            <Repeat />
                            <Gauge />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Detailspage;
