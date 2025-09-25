import styles from "./Links.module.css";

interface LinksProps {
  iconName: string;
  children: React.ReactNode;
  href: string;
  className?: string;
  target?: string;
  rel?: string;
}

export const Links = ({
  iconName,
  children,
  href,
  className = "",
  target,
  rel,
}: LinksProps) => {
  return (
    <a
      href={href}
      className={`${styles.link} ${styles.gitLink} ${className}`}
      target={target}
      rel={rel}
    >
      <i className={`${iconName} ${styles.icon}`}></i> {children}
    </a>
  );
};
