"use client";

import Image from "next/image";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer"; 
import { useState } from "react";
import dynamic from "next/dynamic";

const MapboxMap = dynamic(() => import("@/app/components/MapboxMap"), {
  ssr: false, // La carte ne sera pas rendue côté serveur
  loading: () => <div className="w-full h-[450px] bg-gray-200 rounded-lg flex items-center justify-center"><p>Chargement de la carte...</p></div>,
});
 
export default function FirstPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = [
    {
      name: "Art",
      icon: "🎨",
      color: "bg-blue-200",
      textColor: "text-blue-800",
    },
    {
      name: "Musique",
      icon: "🎵",
      color: "bg-orange-200",
      textColor: "text-orange-800",
    },
    {
      name: "Festival",
      icon: "🎪",
      color: "bg-pink-200",
      textColor: "text-pink-800",
    },
    {
      name: "Visites",
      icon: "🏛️",
      color: "bg-purple-200",
      textColor: "text-purple-800",
    },
    {
      name: "Repas",
      icon: "🍽️",
      color: "bg-yellow-500",
      textColor: "text-yellow-900",
    },
  ];

  const events = [
    {
      id: 1,
      category: "Art",
      title: "Doctor",
      description: "America Chavez\nthe space",
      price: "lorem $",
    },
    {
      id: 2,
      category: "Musique",
      title: "Guardians Of The Galaxy",
      description:
        "A group of intergalactic criminals must pull together to stop a fanatical\nwarrior with plans to purge the universe.",
      price: "lorem $",
    },
    {
      id: 3,
      category: "Festival",
      title: "Batman",
      description: "With plans to recruit a team of...",
      price: "lorem $",
    },
    {
      id: 4,
      category: "Visites",
      title: "Event 4",
      description: "Description",
      price: "lorem $",
    },
    {
      id: 5,
      category: "Repas",
      title: "Event 5",
      description: "Description",
      price: "lorem $",
    },
  ];

  const filteredEvents = selectedCategory
    ? events.filter((e) => e.category === selectedCategory)
    : events;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredEvents.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + filteredEvents.length) % filteredEvents.length
    );
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="relative flex-grow flex items-center justify-center overflow-visible min-h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            src="/concert_up.jpg"
            alt="Concert"
            fill
            className="object-cover object-bottom"
            priority
          />
        </div>

        <div className="relative z-10 text-center px-8 max-w-6xl mx-auto w-full py-12 flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold text-white mb-6 whitespace-nowrap text-center">
            Vivez les meilleurs évènement autour de vous
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-16">
            Concerts, festivals, expos, spectacles dans votre région
          </p>

          <div className="flex flex-col md:flex-row gap-2 max-w-4xl mx-auto bg-white rounded-full p-1.5 shadow-2xl w-full">
            <div className="flex items-center gap-3 px-6 py-4 flex-1 border-r border-gray-200">
              <svg
                className="w-5 h-5 text-gray-500 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Moulins"
                className="flex-1 outline-none text-gray-700 bg-transparent placeholder-gray-400 text-sm"
              />
            </div>

            <div className="flex items-center gap-3 px-6 py-4 flex-1">
              <input
                type="text"
                placeholder="Qu'elles est le festival le plus proche se samedi"
                className="flex-1 outline-none text-gray-700 bg-transparent placeholder-gray-400 text-sm"
              />
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 transition-colors flex-shrink-0 m-1">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </main>

      <div className="w-full bg-gradient-to-b from-pink-100 to-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Explorer par types
          </h2>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`flex items-center gap-3 px-8 py-4 rounded-full font-semibold transition-all ${
                selectedCategory === null
                  ? "bg-blue-600 text-white scale-105 shadow-lg"
                  : "bg-gray-200 text-gray-900 hover:shadow-md"
              }`}
            >
              <span className="text-2xl">✓</span>
              <span>Tout</span>
            </button>
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() =>
                  setSelectedCategory(
                    selectedCategory === category.name ? null : category.name
                  )
                }
                className={`flex items-center gap-3 px-8 py-4 rounded-full font-semibold transition-all ${
                  selectedCategory === category.name
                    ? `${category.color} ${category.textColor} scale-105 shadow-lg`
                    : `${category.color} ${category.textColor} hover:shadow-md`
                }`}
              >
                <span className="text-2xl">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Évènement récent
          </h3>

          <div
            className="relative overflow-hidden -mx-8 w-screen ml-[calc(-50vw+50%)]"
            onWheel={handleWheel}
          >
            <div
              className="flex gap-6 px-8 transition-transform duration-500"
              style={{
                transform: `translateX(calc(-${currentIndex * (400 + 24)}px))`,
              }}
            >
              {filteredEvents.map((event) => {
                const categoryData = categories.find(
                  (c) => c.name === event.category
                );

                return (
                  <div
                    key={event.id}
                    className={`flex-shrink-0 w-96 h-96 ${categoryData?.color} rounded-2xl p-8 flex flex-col justify-between cursor-pointer hover:shadow-xl transition-shadow`}
                  >
                    <div className="relative z-10">
                      <div className="flex items-start gap-4 mb-6">
                        <span className="text-5xl">{categoryData?.icon}</span>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900">
                        {event.title}
                      </h3>
                    </div>
                    <div className="relative z-10">
                      <p className="text-sm text-gray-800 mb-4 whitespace-pre-line">
                        {event.description}
                      </p>
                      <p className="text-xl font-bold text-gray-900">
                        {event.price}
                      </p>
                      <p className="text-xs text-gray-600 mt-2">
                        Lorem upsum lorem upsum lorem upsum lorem upsum
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-900 font-bold py-3 px-4 rounded-full transition-all shadow-lg"
              aria-label="Previous event"
            >
              ◀
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-900 font-bold py-3 px-4 rounded-full transition-all shadow-lg"
              aria-label="Next event"
            >
              ▶
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-7xl mx-auto px-8 py-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Recherche par ville
          </h2>
          <div className="flex flex-col md:flex-row gap-2 max-w-4xl mx-auto bg-white rounded-full p-1.5 shadow-2xl w-full">
            <div className="flex items-center gap-3 px-6 py-4 flex-1">
              <svg
                className="w-5 h-5 text-gray-500 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Moulins"
                className="flex-1 outline-none text-gray-700 bg-transparent placeholder-gray-400 text-sm"
              />
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 transition-colors flex-shrink-0 m-1">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
          <div className="mt-8 w-full max-w-4xl mx-auto">
            <MapboxMap longitude={3.3335} latitude={46.5644} zoom={12} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
