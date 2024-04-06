import styles from "./style.module.css";

const ListingCard = ({image, name, price}) => {
  return (
    <div className={styles.card}>
      <img className={styles.card_img}  src = {image}/>
      <h1 className={styles.card_title}> {name} </h1>
      <p className={styles.card_price}> {price} </p>
      <button className={styles.card_button}> Add to Cart </button>
    </div>
  );
};

export default ListingCard;
