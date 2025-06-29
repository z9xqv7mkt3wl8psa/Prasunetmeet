import Image from "next/image";
import React from "react";

interface Props {
  img: string;
  title: string;
  description: string;
  handleClick: () => void;
  className?: string;
}

export const HomeCard: React.FC<Props> = ({
  img,
  title,
  description,
  handleClick,
  className = "",
}) => {
  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer rounded-2xl p-5 shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl ${className}`}
    >
      <div className="flex flex-col items-start gap-4">
        <div className="rounded-full bg-white/20 p-3">
          <Image src={img} alt={title} width={32} height={32} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-sm text-white/80 mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
};
