import css from './NotFoundPage.module.css';

export default function NotFoundPage() {
  return (
    <div className={css.notFound}>
      <h1 className={css.title}>404 - Page Not Found</h1>
      <p className={css.text}>
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
}
