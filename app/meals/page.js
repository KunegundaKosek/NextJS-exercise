import classes from './page.module.css';

const MealsPage = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>Delicious meals, created{' '}
          <span>by you</span>
        </h1>
      </header>
    </>
  );
};

export default MealsPage;
