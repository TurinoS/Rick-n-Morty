import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function ReturnToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`bg-[var(--orange)] hover:bg-[var(--dark-gray)] p-2 text-2xl md:text-3xl rounded fixed bottom-2 right-2 md:bottom-8 md:right-28 hover:scale-110 hover:text-[var(--orange)] hover:border border-[var(--orange)] transition duration-300 z-10 ${
        isVisible ? "block" : "hidden"
      }`}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </button>
  );
}
