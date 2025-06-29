"use client";

import { MeetingTypeList } from "@/components/meeting-type-list";
import { useGetCalls } from "@/hooks/use-get-calls";

const HomePage = () => {
  const now = new Date();
  const { upcomingCalls } = useGetCalls();

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      {/* Time + Right Video Row */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Time Section with its own background video */}
        <div className="relative h-[200px] lg:h-[300px] w-full lg:w-1/2 overflow-hidden rounded-[20px] shadow-lg">
  {/* Background Video without blur */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 h-full w-full object-cover"
  >
    <source src="/videos/video1.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Foreground Content (no blur) */}
  <div className="relative z-10 flex h-full flex-col justify-between bg-black/20 max-md:px-5 max-md:py-5 lg:p-8">
    <h2 className="glassmorphism max-w-[300px] rounded py-2 text-center text-base font-normal">
      {upcomingCalls?.length === 0
        ? "No upcoming meeting"
        : upcomingCalls?.length &&
          `Upcoming meeting at: 
          ${upcomingCalls[
            upcomingCalls.length - 1
          ].state?.startsAt?.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}`}
    </h2>

    <div className="flex flex-col gap-1">
      <h1 className="text-3xl font-extrabold lg:text-5xl">{time}</h1>
      <p className="text-md font-medium text-sky-1 lg:text-xl">{date}</p>
    </div>
  </div>
</div>

        {/* Right Static Video (remains same) */}
        <div className="w-full lg:w-1/2 h-[200px] lg:h-[300px] rounded-[20px] overflow-hidden shadow-lg">
          <video
            src="/videos/demo1.mp4"
            className="w-full h-full object-cover rounded-[20px]"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>

      {/* Meeting cards */}
      <MeetingTypeList />
    </section>
  );
};

export default HomePage;
