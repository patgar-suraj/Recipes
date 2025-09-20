const About = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="aboutBox w-full md:w-[80%] xl:w-[50%] mb-6">
        <p>
          Welcome to your personal digital cookbook! 🍳✨ <br />
          At <span className="font-semibold text-amber-300">Dishcraft</span>, we're more than an app—we're a community of food lovers. We’re here to help you discover new flavors, master classic techniques, and share your own creations with a supportive network. Welcome to the family!
        </p>
      </div>

      <div className="aboutBox w-full md:w-[80%] xl:w-[50%] mb-6">
        <ul className="list-disc list-inside space-y-2">
          <li>📌 Create your own recipes and keep them safe in one place.</li>
          <li>🔍 Search by title and category to find what you need fast.</li>
          <li>📝 Update recipes anytime with new twists or adjustments.</li>
          <li>❌ Delete old recipes you no longer use.</li>
          <li>🌗 Switch between light & dark themes for comfortable viewing.</li>
        </ul>
      </div>

      <div className="aboutBox w-full md:w-[80%] xl:w-[50%] my-16 flex items-center justify-center">
        <p>Ready to get cooking? Download <span className="text-amber-300 hover:underline hover:cursor-pointer hover:text-amber-400">Dishcraft</span> and start your culinary journey today!</p>
      </div>
      
      <div className="aboutBox my-20 flex items-center justify-center">
        <span className="text-amber-300 text-[12px] ">Developed by ☄️ MAGNETAR</span>
      </div>
    </div>
  );
};

export default About;
