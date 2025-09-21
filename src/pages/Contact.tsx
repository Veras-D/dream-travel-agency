import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">{t('contact_us')}</h1>
      <p className="text-center mb-5 fs-5">
        {t('contact_text')}
      </p>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">{t('name')}</label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">{t('email')}</label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">{t('message')}</label>
              <textarea className="form-control" id="message" rows={5} required></textarea>
            </div>
            <button type="submit" className="btn btn-custom">{t('send_message')}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
