import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from 'react-router-dom';
import './room.css'
import LawyerRequest from "../../Utils/LawyerRequests";

function Room() {
    const {roomId} = useParams()
    const handleLeave = async ()=>{
    await LawyerRequest.put(`/callupdate/${roomId}`);
      
    }


    const myMeeting = async (element) => {

     

      const appID = 1358125877;
      const serverSecret = "ccc28b75e1983c1b0cd40d12174f3f4e";
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId,  Date.now().toString(),  "name");

      const zc = ZegoUIKitPrebuilt.create(kitToken);

      zc.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: "Personal link",
            url:
              window.location.protocol +
              "//" +
              window.location.host +
              window.location.pathname +
              "?roomID=" +
              roomId,
              
          },
        ],
        
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
        onLeaveRoom:()=>handleLeave()
      });

    }
  return <div className="meeting-container" ref={myMeeting}></div>;
}

export default Room