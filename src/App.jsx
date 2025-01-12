import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import AWS from "aws-sdk";
import "./App.css";
import AudioPlayer from "./AudioPlayer";

AWS.config.update({
  accessKeyId: process.env.REACT_APP_CLIENTID,
  secretAccessKey: process.env.REACT_APP_SECRETKEY,
  region: process.env.REACT_APP_REGION,
});

const polly = new AWS.Polly();

function App() {
  const [text, setText] = useState("");
  const [voice, setVoice] = useState("Salli");
  const [audioFile,setAudioFile]= useState();
//   console.log(text);

  const convertTextToSpeech = () => {
    polly.synthesizeSpeech(
      {
        Text: text,
        OutputFormat: "mp3",
        VoiceId: voice,
      },
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
          setAudioFile(data);
        }
      }
    );
  };

  return (
    <>
      <Header />
      <div className="bg-gradient-to-r from-orange-400 to-pink-500 h-[92vh]">
      <Body
        text={text}
        setText={setText}
        convertTextToSpeech={convertTextToSpeech}
        voice={voice}
        setVoice={setVoice}
      />
      <AudioPlayer audioFile={audioFile} /> 
      <Footer/> 
      </div>
      
    </>
  );
}

export default App;
