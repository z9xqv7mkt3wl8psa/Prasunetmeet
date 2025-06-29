"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleMeetingClick = (type: string) => {
    const event = new CustomEvent("openMeetingModal", { detail: type });
    window.dispatchEvent(event);
  };

  const sidebarItems = [
    {
      label: "Home",
      route: "/",
      imgUrl: "/icons/home.svg",
    },
    {
      label: "Upcoming",
      route: "/upcoming",
      imgUrl: "/icons/upcoming.svg",
    },
    {
      label: "Previous",
      route: "/previous",
      imgUrl: "/icons/previous.svg",
    },
    {
      label: "Recordings",
      route: "/recordings",
      imgUrl: "/icons/video.svg",
    },
    {
      label: "New Meeting",
      action: () => handleMeetingClick("isInstantMeeting"),
      imgUrl: "/icons/add-meeting.svg",
    },
    {
      label: "Schedule Meeting",
      action: () => handleMeetingClick("isScheduleMeeting"),
      imgUrl: "/icons/schedule.svg",
    },
    
    {
      label: "Join Meeting",
      action: () => handleMeetingClick("isJoiningMeeting"),
      imgUrl: "/icons/join-meeting.svg",
    },
    {
      label: "Personal Room",
      route: "/personal-room",
      imgUrl: "/icons/add-personal.svg",
    },
  ];

  return (
    <aside className="sticky top-0 left-0 h-screen w-fit bg-dark-1 px-4 pt-8 text-white shadow-lg max-sm:hidden lg:w-64">
      <div className="mb-10 px-2">
        <h1 className="text-2xl font-bold text-white">📹 Meetup</h1>
      </div>

      <nav className="flex flex-col gap-2">
        {sidebarItems.map((item) => {
          const isActive =
            item.route && (pathname === item.route || pathname.startsWith(`${item.route}/`));

          const content = (
            <div
              className={cn(
                "flex items-center gap-4 rounded-md px-4 py-3 transition-all duration-200 hover:bg-dark-3",
                {
                  "bg-blue-1 text-white": isActive,
                }
              )}
            >
              <Image
                src={item.imgUrl}
                alt={item.label}
                width={24}
                height={24}
              />
              <span className="text-base font-medium max-lg:hidden">{item.label}</span>
            </div>
          );

          return item.route ? (
            <Link key={item.label} href={item.route} className="w-full">
              {content}
            </Link>
          ) : (
            <button
              key={item.label}
              onClick={item.action}
              className="w-full text-left"
            >
              {content}
            </button>
          );
        })}
      </nav>
    </aside>
  );
};
