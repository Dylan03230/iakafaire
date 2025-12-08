import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  icon,
  onClick,
  className = "",
}: ButtonProps) {
  const baseStyles = "font-medium transition-colors";

  const variants = {
    primary: "px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full",
    secondary: "flex items-center gap-2 text-blue-600 hover:text-blue-700",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {icon && icon}
      {children}
    </button>
  );
}
