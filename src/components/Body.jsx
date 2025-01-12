import React from "react";

const Body = ({ text, setText, convertTextToSpeech, voice, setVoice }) => {
  return (
    <main className="py-8">
      <div className="max-w-3xl mx-auto bg-slate-100 rounded-lg shadow-md p-6">
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
          Choose a Voice
        </h2>


        <div className="flex justify-center gap-6 mb-6">
        <label className="flex items-center gap-2">
            <input
              type="radio"
              name="voice"
              value="Ivy"
              checked={voice === "Ivy"}
              onChange={(e) => setVoice(e.target.value)}
              className="form-radio h-5 w-5 text-orange-500 border-gray-300 focus:ring-orange-400"
            />
            <span className="text-gray-600">Ivy-Female</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="voice"
              value="Matthew"
              checked={voice === "Matthew"}
              onChange={(e) => setVoice(e.target.value)}
              className="form-radio h-5 w-5 text-orange-500 border-gray-300 focus:ring-orange-400"
            />
            <span className="text-gray-600">Matthew-Male</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="voice"
              value="Salli"
              checked={voice === "Salli"}
              onChange={(e) => setVoice(e.target.value)}
              className="form-radio h-5 w-5 text-orange-500 border-gray-300 focus:ring-orange-400"
            />
            <span className="text-gray-600">Salli-Female</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="voice"
              value="Joey"
              checked={voice === "Joey"}
              onChange={(e) => setVoice(e.target.value)}
              className="form-radio h-5 w-5 text-orange-500 border-gray-300 focus:ring-orange-400"
            />
            <span className="text-gray-600">Joey-Male</span>
          </label>
        </div>

       
        <p className="text-center text-gray-700 mb-4">
          Selected Voice: <span className="font-semibold">{voice}</span>
        </p>

      
        <textarea
          className="p-3 border border-gray-300 rounded w-full h-[100px] focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-500 mb-4"
          placeholder="Type something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          className="w-full py-2 bg-gradient-to-r from-orange-400 to-pink-600 text-white font-semibold rounded-lg shadow hover:from-orange-500 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
          onClick={convertTextToSpeech}
        >
          Text To Speech
        </button>
      </div>
    </main>
  );
};

export default Body;
