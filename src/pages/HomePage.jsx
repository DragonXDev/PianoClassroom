import React from 'react';
import AnimatedCard from '../components/AnimatedCard';

function HomePage() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col pt-20 px-6 md:px-12 lg:px-24 overflow-x-hidden">
      <div>
      <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-red-purple-gradient text-center mb-12 shadow-text">
      Amaar's Piano Lessons
      </h1>



        <div className="flex justify-center mb-12">
          {/* Profile picture */}
          <img src="/pfp.png" alt="Your Name" className="w-48 h-48 rounded-full shadow-2xl mb-6 md:w-64 md:h-64 object-cover"/>
        </div>
      </div>

      <div>
        <AnimatedCard 
          title="About Me" 
          content="I am a professional piano player and instructor. With almost 7 years of experience, I have studied and played a wide variety of pieces, as well as even composed my own. My passion for piano drives me forward to teach other people."
        />

        <AnimatedCard 
          title="My Journey" 
          content="My journey began when..."
        />

        <AnimatedCard 
          title="My Achievements" 
          content="Over the years, I've achieved..."
        />

        {/* Add more AnimatedCard components as needed */}
      </div>

      {/* Extra content to make the page scrollable */}
      <div className="mb-32">
        <h3 className="text-4xl font-bold mb-12">More about me</h3>
        <p className="text-lg mb-6">
          Lorem ipsum...
        </p>
        {/* Add more content if needed */}
      </div>
    </div>
  );
}

export default HomePage;
