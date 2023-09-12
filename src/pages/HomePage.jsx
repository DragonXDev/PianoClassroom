import React from 'react';

function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col pt-20 px-6 md:px-12 lg:px-24 overflow-x-hidden">
      <div>
        <h1 className="text-6xl font-bold text-black text-center mb-12 shadow-text">
          Welcome to My Piano World
        </h1>

        <div className="flex justify-center mb-12">
    {/* Profile picture */}
    <img src="../../public/pfp.png" alt="Your Name" className="w-48 h-48 rounded-full shadow-lg mb-6 md:w-64 md:h-64 object-cover"/>
</div>

      </div>

      <div>
        <div className="mx-auto w-full max-w-2xl md:max-w-3xl lg:max-w-4xl bg-white p-6 md:p-8 rounded-lg shadow-2xl mb-12">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-lg">
            I am a professional piano player and instructor. With almost 7 years of experience, I have studied and played a wide variety of pieces, as well as even composed my own. My passion for piano drives me forward to teach other people.
          </p>
        </div>

        {/* You can replicate the below div for more content sections */}
        <div className="mx-auto w-full max-w-2xl md:max-w-3xl lg:max-w-4xl bg-white p-6 md:p-8 rounded-lg shadow-2xl mb-12">
          <h2 className="text-2xl font-bold mb-4">My Journey</h2>
          <p className="text-lg">
            My journey began when...
          </p>
        </div>

        <div className="mx-auto w-full max-w-2xl md:max-w-3xl lg:max-w-4xl bg-white p-6 md:p-8 rounded-lg shadow-2xl mb-12">
          <h2 className="text-2xl font-bold mb-4">My Achievements</h2>
          <p className="text-lg">
            Over the years, I've achieved...
          </p>
        </div>

        {/* Add more sections as needed */}
      </div>

      {/* Extra content to make the page scrollable */}
      <div className="mb-32">
        <h3 className="text-4xl font-bold mb-12">More about me</h3>
        <p className="text-lg mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tincidunt, mauris ut luctus cursus, quam urna pulvinar enim, nec fermentum nunc augue id nulla. Sed iaculis, arcu id lacinia cursus, nisl leo volutpat nunc, vitae efficitur justo nulla eu velit. Mauris egestas ligula in augue pulvinar, in pharetra purus gravida. Integer id tellus tortor. Sed lacinia, magna eu luctus ornare, libero nisl scelerisque magna, non tristique quam risus ac nulla. Vivamus a tincidunt dui.
        </p>
        {/* Add more content if needed */}
      </div>
    </div>
  );
}

export default HomePage;
