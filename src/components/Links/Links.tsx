import styles from "./Links.module.css";

interface LinksProps {
  iconName: string;
  children: React.ReactNode;
  href: string;
  className?: string;
}

export const Links = ({
  iconName,
  children,
  href,
  className = "",
}: LinksProps) => {
  return (
    <a href={href} className={`${styles.link} ${styles.gitLink} ${className}`}>
      <i className={`${iconName} ${styles.icon}`}></i> {children}
    </a>
  );
};
