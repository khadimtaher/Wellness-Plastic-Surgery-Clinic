import React from "react";
import style from "./TermsCondition.module.css";

function TermsCondition() {
  return (
    <div className={style.termsContainer}>
      <h1 className={style.heading}>Terms & Conditions</h1>
      <p className={style.intro}>
        Welcome to our website. By accessing or using our services, you agree to
        the following terms and conditions. Please read them carefully.
      </p>

      <section className={style.section}>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By using this website, you agree to comply with and be bound by these
          Terms and Conditions. If you do not agree, please do not use this
          website.
        </p>
      </section>

      <section className={style.section}>
        <h2>2. Use of Services</h2>
        <p>
          You agree to use our services only for lawful purposes and in a way
          that does not infringe the rights of others or restrict their use and
          enjoyment of the website.
        </p>
      </section>

      <section className={style.section}>
        <h2>3. Intellectual Property</h2>
        <p>
          All content, logos, images, and text on this website are the property
          of our organization and may not be reproduced without prior written
          permission.
        </p>
      </section>

      <section className={style.section}>
        <h2>4. Limitation of Liability</h2>
        <p>
          We are not liable for any damages arising from the use of this
          website, including technical issues or reliance on information
          provided.
        </p>
      </section>

      <section className={style.section}>
        <h2>5. Changes to Terms</h2>
        <p>
          We reserve the right to update these Terms & Conditions at any time.
          Please check this page periodically for updates.
        </p>
      </section>

      <section className={style.section}>
        <h2>6. Contact Us</h2>
        <p>
          If you have any questions about these Terms & Conditions, please
          contact us at <a href="mailto:info@example.com">info@example.com</a>.
        </p>
      </section>
    </div>
  );
}

export default TermsCondition;
