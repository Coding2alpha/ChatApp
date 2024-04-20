const fileFormat = (url) => {
  const fileExtension = url.split(".").pop();
  if (
    fileExtension === "mp4" ||
    fileExtension === "webm" ||
    fileExtension === "ogg"
  )
    return "video";
  if (
    fileExtension === "mp3" ||
    fileExtension === "wav" ||
    fileExtension === "audio"
  )
    return "audio";
  if (
    fileExtension === "png" ||
    fileExtension === "jpg" ||
    fileExtension === "jpeg" ||
    fileExtension === "gif"
  )
    return "image";
  return "file";
};

const transFormImage=(url='',width=100)=>url

export { fileFormat ,transFormImage};
