
import { Link } from "react-router";


const Audioplayer = ({ scrollRef}) => {
 
    const storyData = [
        {
            id: 1,
            title: "Choosing the Right Path",
            subtitle: "A journey of decisions",
            image: "https://i.ibb.co.com/S7Dr7bhw/images1.jpg",
            xpReward: 50,
            category: "Adventure"
        },
        {
            id: 2,
            title: "The Fountain and the Mayor",
            subtitle: "Village tales and secrets",
            image: "https://picsum.photos/seed/mayor/400/500",
            xpReward: 40,
            category: "Story"
        },
        {
            id: 3,
            title: "The Lesson of the Sap",
            subtitle: "Wisdom from the forest",
            image: "https://i.ibb.co.com/0j8TS6Hj/images2.jpg",
            xpReward: 35,
            category: "Learning"
        },
        {
            id: 4,
            title: "The Hidden Forest",
            subtitle: "Explore the unknown",
            image: "https://i.ibb.co.com/MD62Wbzk/image3.jpg",
            xpReward: 60,
            category: "Adventure"
        },
        {
            id: 5,
            title: "Space Discovery",
            subtitle: "Beyond the stars",
            image: "https://i.ibb.co.com/6RHgGbjz/images5.jpg",
            xpReward: 70,
            category: "Science"
        },
        {
            id: 6,
            title: "Ocean's Secret",
            subtitle: "Life under the waves",
            image: "https://i.ibb.co.com/2YfDh92k/images.jpg",
            xpReward: 45,
            category: "Nature"
        },
        {
            id: 7,
            title: "The Brave Knight",
            subtitle: "A hero's tale",
            image: "https://i.ibb.co.com/R4tgQF93/6427a312c38d99001d8c275d.jpg",
            xpReward: 55,
            category: "History"
        },
        {
            id: 8,
            title: "Winter Magic",
            subtitle: "Snow and wonders",
            image: "https://i.ibb.co.com/TMNcM7Np/9781805462835-scaled.jpg",
            xpReward: 30,
            category: "Fable"
        },
        {
            id: 9,
            title: "The Golden Bird",
            subtitle: "Legendary treasures",
            image: "https://i.ibb.co.com/V0FmK3mC/images-1.jpg",
            xpReward: 80,
            category: "Myth"
        },
        {
            id: 10,
            title: "Robot Friend",
            subtitle: "The future is here",
            image: "https://i.ibb.co.com/tTGV2N4G/978180078991320250929-2-sa6q3h.jpg",
            xpReward: 65,
            category: "Tech"
        }
    ];




    return (
        <div>
            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {storyData.map((story) => (
                    <Link to={`story/${story.id}`} key={story.id} className="min-w-[160px] md:min-w-[220px] group">
                        <div className="relative overflow-hidden rounded-[32px] shadow-lg mb-3 aspect-[3/4]">
                            <img src={story.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={story.title} />
                        </div>
                        <p className="text-sm md:text-base font-bold text-gray-700 leading-tight px-2">{story.title}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Audioplayer;