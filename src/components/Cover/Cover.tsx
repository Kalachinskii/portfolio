import styles from "./Cover.module.css";

export default function Cover() {
  return (
    <video
      className={styles.video}
      autoPlay
      muted
      loop
      playsInline
      poster="preview.jpg"
    >
      <source src="Cover.mp4" type="video/mp4"></source>
    </video>
  );
}
