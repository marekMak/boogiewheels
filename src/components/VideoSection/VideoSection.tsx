type Props = {};

const VideoSection = (props: Props) => {
  return (
    <section className="h-screen w-full relative bg-video-section p-10 md:py-20 md:px-32 flex justify-center items-center">
      <div className="w-full h-full  md:max-w-[60vw] relative">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="
      h-full w-full object-cover
      [mask-image:url('/images/video-mask.png')]
      [mask-repeat:no-repeat] [mask-size:100%_100%] [mask-position:center]
      [-webkit-mask-image:url('/images/video-mask.png')]
      [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:100%_100%] [-webkit-mask-position:center]
    "
        >
          <source src="/videos/2.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default VideoSection;
