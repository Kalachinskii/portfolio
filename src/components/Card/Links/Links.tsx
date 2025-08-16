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
        <i className={`${styles.icon} fa-solid fa-globe`}></i> сайт
      </a>
      <a className={`${styles.link} ${styles.gitLink}`} href={links.git}>
        <i className={`${styles.icon} fa-brands fa-github`}></i> гит
      </a>
    </div>
  );
}
