import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
};

const base =
  "inline-flex items-center justify-center px-6 py-3 font-semibold transition-colors " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-dark " +
  "active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50";

const variants = {
  primary: "bg-gold text-graphite hover:bg-gold-dark",
  secondary:
    "border-2 border-graphite text-graphite hover:bg-graphite hover:text-white",
};

export default function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  disabled,
  className = "",
}: ButtonProps) {
  const styles = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} className={styles}>
      {children}
    </button>
  );
}