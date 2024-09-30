import React, { useEffect, useRef, useState } from "react";
import "../index.css";

// asset
import bg from "../public/testimonailBg.png";
import userImg from "../public/imgUser.png";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  // Array of Indian names and titles
  const users = [
    { name: "Arjun Sharma", title: "5⭐ Trader" },
    { name: "Priya Patel", title: "Top Entrepreneur" },
    { name: "Ravi Singh", title: "Investor" },
    { name: "Sneha Verma", title: "Stock Expert" },
    { name: "Kiran Kumar", title: "Crypto Trader" },
    { name: "Ananya Gupta", title: "Market Analyst" },
    { name: "Rajesh Iyer", title: "Risk Manager" },
    { name: "Pooja Nair", title: "Financial Advisor" },
    { name: "Manish Joshi", title: "Portfolio Manager" },
    { name: "Suman Roy", title: "Technical Analyst" }
  ];

  // Function to handle scrolling
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    const itemWidth = container.firstChild.offsetWidth + 32; // 32 is the gap (gap-8 in Tailwind)
    const totalItems = container.children.length;

    // Scroll by one item
    setCurrentIndex(currentIndex + 1);
    container.scrollBy({ left: itemWidth, behavior: "smooth" });

    // If we've scrolled past the original items, reset to the start (after reaching the duplicates)
    if (currentIndex >= totalItems / 2 - 4) {
      // totalItems / 2 because of duplication
      setTimeout(() => {
        container.scrollTo({ left: 0, behavior: "auto" });
        setCurrentIndex(0);
      }, 500); // Timeout to let the last scroll finish
    }
  };

  // Use effect to scroll automatically every 2 seconds
  useEffect(() => {
    const intervalId = setInterval(handleScroll, 2000);
    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [currentIndex]);

  return (
    <div className="h-[24rem] w-full px-[6rem] mt-[19rem]">
      <div
        ref={scrollContainerRef}
        className="h-[24rem] flex overflow-hidden whitespace-nowrap gap-8"
      >
        {/* Render original items */}
        {users.map((user, index) => (
          <div
            key={index}
            className="item h-[23rem] w-[25rem] rounded-2xl flex-shrink-0 relative"
          >
            <img src={bg} alt={`testimonial ${index}`} />
            <div className="userImg absolute top-[2.9rem] left-9 flex items-center gap-8">
              <img
                src={userImg}
                className="w-[5rem] border-[1px] border-zinc-400 px-3 py-3 rounded-full bg-black opacity-30"
              />
              <h3 className="text-3xl text-white">
                {user.name}
                <p className="text-lg text-gray-400">{user.title}</p>
              </h3>
            </div>
            <div className="absolute top-[35%] left-[48%] text-gray-400 cursor-pointer">
              ↓
            </div>
          </div>
        ))}

        {/* Render duplicates of the first 4 items for seamless looping */}
        {users.slice(0, 4).map((user, index) => (
          <div
            key={`duplicate-${index}`}
            className="item h-[22rem] w-[25rem] rounded-2xl flex-shrink-0"
          >
            <img src={bg} alt={`testimonial duplicate ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
