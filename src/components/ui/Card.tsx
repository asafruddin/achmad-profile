import { type ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export default function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <div
      className={`glass-card p-6 ${
        hover
          ? "transition-all duration-300 hover:border-accent/50 hover:-translate-y-1"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
