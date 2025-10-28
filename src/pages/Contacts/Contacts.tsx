import styles from "./Contacts.module.css";

export const Contacts = () => {
  return (
    <div className={styles.centerBox}>
      <form className={styles.form}>
        {/* Личная информация */}
        <input
          className={styles.input}
          type="text"
          placeholder="Ваше имя *"
          required
        />
        <input type="text" placeholder="Должность" />
        <input type="text" placeholder="Компания *" required />
        <input type="email" placeholder="Email *" required />
        <input type="tel" placeholder="Телефон" />

        {/* Контекст для HR */}
        <select required>
          <option value="">Цель обращения *</option>
          <option value="job-offer">Предложение о работе</option>
          <option value="collaboration">Сотрудничество</option>
          <option value="consultation">Консультация</option>
        </select>

        <select>
          <option value="">Тип вакансии</option>
          <option value="full-time">Полная занятость</option>
          <option value="part-time">Частичная занятость</option>
        </select>

        <input type="text" placeholder="Стек технологий" />
        <input type="url" placeholder="Ссылка на вакансию" />

        {/* Сообщение */}
        <textarea
          placeholder="Сообщение *"
          required
          rows={5}
          className={styles.messageTextarea}
        />

        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};
