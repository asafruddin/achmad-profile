import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = ButtonBaseProps & {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit";
  download?: string;
};

type ButtonAsLink = ButtonBaseProps & {
  href: string;
  onClick?: () => void;
  download?: string;
  target?: string;
  rel?: string;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent hover:bg-accent-light text-black font-bold",
  secondary:
    "bg-transparent border border-neutral-700 text-white hover:border-accent hover:text-accent-light",
  ghost:
    "bg-white/5 text-neutral-300 hover:bg-white/10 hover:text-white",
};

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300";

  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, onClick, download, target, rel } = props;
    return (
      <Link
        href={href}
        className={styles}
        onClick={onClick}
        download={download}
        target={target}
        rel={rel}
      >
        {children}
      </Link>
    );
  }

  const { onClick, type = "button" } = props as ButtonAsButton;
  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
