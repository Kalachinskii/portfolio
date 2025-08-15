import styles from "./Links.module.css";

export function Links({
  links,
}: {
  links: {
    site: string;
    git: string;
  };
}) {
  return (
    <div className={styles.linkBox}>
      <a className={`${styles.link} ${styles.siteLink}`} href={links.site}>
        Открыть сайт
      </a>
      <a className={`${styles.link} ${styles.gitLink}`} href={links.git}>
        Открыть гит
      </a>
    </div>
  );
}
