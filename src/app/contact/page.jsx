'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useLanguageStore } from '../stores/languageStore';
import arrowRight from '../assets/images/homePage/arrowRight.svg';
import content from '../content.json';
import emailjs from 'emailjs-com';
import './contact.css';

export default function Contact() {
  const language = useLanguageStore((state) => state.language);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [recaptchaError, setRecaptchaError] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    const loadRecaptcha = () => {
      const existingScript = document.querySelector(
        'script[src*="recaptcha/api.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?hl=${language.toLowerCase()}`;

      script.async = true;
      script.defer = true;
      script.onload = () => {
        if (window.grecaptcha) {
          window.grecaptcha.ready(() => {
            const recaptchaContainer = document.getElementById(
              'recaptcha-container'
            );
            if (
              recaptchaContainer &&
              recaptchaContainer.children.length === 0
            ) {
              window.grecaptcha.render('recaptcha-container', {
                sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
              });
            } else {
              window.grecaptcha.reset();
            }
          });
        }
      };
      document.body.appendChild(script);
    };

    loadRecaptcha();
  }, [language]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) errors.name = content[language].Contact.required;
    if (!formData.company.trim())
      errors.company = content[language].Contact.required;
    if (!formData.email.trim())
      errors.email = content[language].Contact.required;
    if (!formData.phone.trim())
      errors.phone = content[language].Contact.required;
    if (!formData.message.trim())
      errors.message = content[language].Contact.required;

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      const recaptchaResponse = grecaptcha.getResponse();

      if (recaptchaResponse.length === 0) {
        setRecaptchaError(content[language].Contact.captcha);
      } else {
        setRecaptchaError('');
        setIsSending(true);

        const templateParams = {
          from_name: formData.name,
          from_companyname: formData.company,
          from_email: formData.email,
          from_phonenumber: formData.phone,
          message: formData.message,
        };

        emailjs
          .send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            templateParams,
            process.env.NEXT_PUBLIC_EMAILJS_USER_ID
          )
          .then((response) => {
            setFormData({
              name: '',
              company: '',
              email: '',
              phone: '',
              message: '',
            });
            grecaptcha.reset();
            setIsSending(false);
            setIsSent(true);
          })
          .catch((err) => {
            setIsSending(false);
          });
      }
    }
  };

  return (
    <>
      <main className="contact-main">
        <h1 className="h1-contact">
          {content[language].Contact.firstH1}
          <br />
          {content[language].Contact.secondH1}
        </h1>
        <div className="separator-container">
          <div className="small-separator">
            <div className="adress-container">
              <p>
                {content[language].Contact.company}
                <br />
                {content[language].Contact.address1}
                <br />
                {content[language].Contact.address2}
                <br />
                {content[language].Contact.address3}
              </p>
              <div className="phone-container">
                {content[language].Contact.telephone}
              </div>
            </div>
          </div>
          <div className="large-separator">
            <div className="form-container">
              <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="label-container" htmlFor="name">
                    {content[language].Contact.inputName}*
                  </label>
                  <input
                    className="input-container"
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {formErrors.name && (
                    <span className="error-message">{formErrors.name}</span>
                  )}
                </div>

                <div className="form-group">
                  <label className="label-container" htmlFor="company">
                    {content[language].Contact.inputCompany}*
                  </label>
                  <input
                    className="input-container"
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                  {formErrors.company && (
                    <span className="error-message">{formErrors.company}</span>
                  )}
                </div>

                <div className="form-group">
                  <label className="label-container" htmlFor="email">
                    {content[language].Contact.inputEmail}*
                  </label>
                  <input
                    className="input-container"
                    type="text"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {formErrors.email && (
                    <span className="error-message">{formErrors.email}</span>
                  )}
                </div>

                <div className="form-group">
                  <label className="label-container" htmlFor="phone">
                    {content[language].Contact.inputPhone}*
                  </label>
                  <input
                    className="input-container"
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {formErrors.phone && (
                    <span className="error-message">{formErrors.phone}</span>
                  )}
                </div>

                <div className="message-group">
                  <label className="label-container" htmlFor="message">
                    {content[language].Contact.inputMessage}*
                  </label>
                  <textarea
                    className="textarea-container-message"
                    id="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    spellCheck="false"
                  ></textarea>
                  {formErrors.message && (
                    <span className="error-message-message">
                      {formErrors.message}
                    </span>
                  )}
                </div>

                <div className="captcha-container">
                  <p className="captcha-title">CAPTCHA</p>
                  {recaptchaError && (
                    <span className="error-recaptcha">{recaptchaError}</span>
                  )}
                </div>

                <div className="captcha-submit-container">
                  <div id="recaptcha-container"></div>

                  <div className="button-container">
                    {isSent && (
                      <div className="success-message">
                        {content[language].Contact.success}
                      </div>
                    )}

                    <button className="button-form">
                      {isSending ? (
                        `${content[language].Contact.send}`
                      ) : (
                        <>
                          {content[language].Contact.button}
                          <Image
                            src={arrowRight}
                            width={24}
                            height={24}
                            alt="Right arrow"
                            className="bounce"
                          />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
