import styles from "./SocialLinks.module.css";

export const SocialLinks = () => {
  const contactBtnInfo = [
    {
      link: "https://vk.com/kalachinskii_vl",
      imgClass: "fa-brands fa-vk",
      label: "VKontakte",
    },
    {
      link: "https://github.com/Kalachinskii",
      imgClass: "fa-brands fa-github",
      label: "GitHub",
    },
    {
      link: "https://t.me/Kalachinskii_vl",
      imgClass: "fa-brands fa-telegram",
      label: "Telegram",
    },
  ];

  return (
    <div className={styles.buttonsBox}>
      {contactBtnInfo.map((btn, index) => (
        <a
          key={index}
          className={styles.link}
          href={btn.link}
          target="_blank"
          rel="noreferrer"
          aria-label={btn.label}
        >
          <span></span>
          <i className={btn.imgClass}></i>
        </a>
      ))}
    </div>
  );
};
