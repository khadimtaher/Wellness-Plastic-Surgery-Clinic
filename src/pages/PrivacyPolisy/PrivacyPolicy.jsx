import React from "react";
import style from "./PrivacyPolisy.module.css";

function PrivacyPolicy() {
  const lastUpdated = "24 Aug 2025";

  return (
    <main className={style.page} role="main">
      <header className={style.header}>
        <h1 className={style.title}>Privacy Policy</h1>
        <p className={style.updated}>Last updated: {lastUpdated}</p>
      </header>

      <section className={style.card}>
        <p className={style.lead}>
          This website is owned and managed by Dr. [Your Name]. We respect your
          privacy and are committed to protecting any information you choose to
          share with us. This policy explains what information is collected and
          how it is used.
        </p>
      </section>

      <section className={style.card}>
        <h2 className={style.subTitle}>Information We Collect</h2>
        <p className={style.text}>
          Our website is static and does not actively collect personal data. The
          only information we may receive is:
        </p>
        <ul className={style.list}>
          <li className={style.listItem}>
            Details you provide voluntarily through contact forms (such as name,
            email, or phone number).
          </li>
          <li className={style.listItem}>
            Basic technical information automatically provided by your browser
            (e.g., device type or pages visited). This is standard for all
            websites and not used for marketing.
          </li>
        </ul>
      </section>

      <section className={style.card}>
        <h2 className={style.subTitle}>How We Use Information</h2>
        <ul className={style.list}>
          <li className={style.listItem}>To respond to inquiries or appointment requests.</li>
          <li className={style.listItem}>To improve website content and patient communication.</li>
          <li className={style.listItem}>To maintain the security and functionality of this site.</li>
        </ul>
      </section>

      <section className={style.card}>
        <h2 className={style.subTitle}>Data Sharing</h2>
        <p className={style.text}>
          We do not sell, trade, or rent your personal information. Any details
          you provide are used solely to respond to you or provide requested
          services. Information may be shared only if required by law.
        </p>
      </section>

      <section className={style.card}>
        <h2 className={style.subTitle}>Security</h2>
        <p className={style.text}>
          Reasonable technical measures are taken to keep any data you provide
          safe. However, no method of online transmission is fully secure.
        </p>
      </section>

      <section className={style.card}>
        <h2 className={style.subTitle}>Your Control</h2>
        <p className={style.text}>
          If you have shared personal details (for example via a contact form),
          you may request that we update or delete this information at any time.
        </p>
      </section>

      <section className={style.card}>
        <h2 className={style.subTitle}>Contact</h2>
        <p className={style.text}>
          For any questions about this Privacy Policy, please contact:
        </p>
        <address className={style.contact}>
          <span className={style.contactItem}>Dr. Sumit Sudhir Hadgaonkar</span> <br />
          <span className={style.contactItem}>Email: wellnesssupport@example.com</span> <br />
          <span className={style.contactItem}>Phone: +919322901735</span> <br />
          <span className={style.contactItem}>Ambajogai Rd, near Prayagbai Patil college, Mayurban colony, Sawe Wadi, Latur, Maharashtra 413512</span>
        </address>
      </section>

     
    </main>
  );
}

export default PrivacyPolicy;
