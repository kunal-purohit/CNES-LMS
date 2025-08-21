import React, { FC, useEffect, useState } from "react";
import axios from "axios";

type Props = {
  videoUrl: string;
  title: string;
};

const CoursePlayer: FC<Props> = ({ videoUrl }) => {
  const [videoData, setVideoData] = useState({
    otp: "20160313versASE323QteqZF8VvmFGqKz0F0UsaUAyFdcIzY2YaKhMKWSEGahgX7",
    playbackInfo: "eyJ2aWRlb0lkIjoiMzQ1MmFkNmQ4Y2NlNDc2N2E0YzVmNGVkZGFjY2Q4M2IifQ==",
  });

  const [isDataFresh, setIsDataFresh] = useState(false);

  useEffect(() => {
    axios
      .post(`${process.env.NEXT_PUBLIC_SERVER_URI}getVdoCipherOTP`, {
        videoId: videoUrl,
      })
      .then((res) => {
        setVideoData(res.data);
      });
  }, [videoUrl]);

  return (
    <div style={{position:"relative",paddingTop:"56.25%",overflow:"hidden"}}>
      {videoData.otp && videoData.playbackInfo !== "" && (
        <iframe
          src={`https://player.vdocipher.com/v2/?otp=${videoData?.otp}&playbackInfo=${videoData.playbackInfo}`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0
          }}
          allowFullScreen={true}
          allow="encrypted-media"
        ></iframe>

      // For youtube
      //   <iframe
      //   style={{
      //        position: "absolute",
      //        top: 0,
      //        left: 0,
      //        width: "100%",
      //        height: "100%",
      //        border: 0
      //      }}
      //    src={`https://www.youtube.com/embed/${videoUrl}`}
      //    frameBorder="0"
      //    allowFullScreen
      //    title="Embedded YouTube Video"
      //  ></iframe>
      )}
      <div>

      
      
      </div>
     
    </div>
  );
};

export default CoursePlayer;
