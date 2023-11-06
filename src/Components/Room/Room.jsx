import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from 'react-router-dom';
import './room.css'
import { useSelector } from 'react-redux';
import logo from '../../Assets/Images/logo.svg'

function Room() {
    const {roomId} = useParams()
    const { id,name } = useSelector((state) => state.lawyer);


    const myMeeting = async (element) => {
      const appID = 1358125877;
      const serverSecret = import.meta.env.VITE_ZEGO_SECRET;
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId,  id,  name);

      const zp = ZegoUIKitPrebuilt.create(kitToken);

      zp.joinRoom({
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
        branding:{
            logoURL:{logo}
        }
      });

    }
  return <div className="meeting-container" ref={myMeeting}></div>;
}

export default Room