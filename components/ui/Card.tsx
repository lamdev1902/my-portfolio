import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: Props) {
  return (
    <div
      className={`
        p-5 rounded-2xl
        border border-purple-500/15
        bg-gradient-to-br from-[#0b0b10] via-[#0f0a1a] to-[#0b0b10]
        shadow-[0_0_30px_rgba(168,85,247,0.08)]
        transition-all duration-300

        hover:shadow-[0_10px_40px_rgba(168,85,247,0.18)]
        hover:border-purple-400/40

        ${className}
      `}
    >
      {children}
    </div>
  );
}