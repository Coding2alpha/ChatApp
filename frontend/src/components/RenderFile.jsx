import { transFormImage } from "../lib/features";
import { MdFileOpen } from "react-icons/md";

const RenderFile = (file,url) => {
  switch (file) {
    case "video":
      return <video src={url} preload="none" width={"200px"} controls />;
    case "audio":
      return <audio src={url} preload="none" controls />;
    case "image":
      return <img src={transFormImage(url,200)} alt="Attachment" width={"200px"} height={'150px'} style={{objectFit:'contain'}} />;
    default : <MdFileOpen />;
  }
}
export default RenderFile