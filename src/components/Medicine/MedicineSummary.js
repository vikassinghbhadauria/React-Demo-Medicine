import classes from './MedicineSummary.module.css';

const MedicineSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Original Medicine, Delivered To You</h2>
      <p>
        Choose your medicine from our broad selection of available Medicien
        and collect it from store.
      </p>
      <p>
        We received all the medicine directly from company and sales in discounted price!
      </p>
    </section>
  );
};

export default MedicineSummary;
