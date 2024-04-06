import storeInfo from "./storeInfo";
import styles from "./page.module.css";
import ListingCard from "./components/ListingCard";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.store_header}>Pirate Marketplace!</h1>
      <div className={styles.store_cards}>
      <ListingCard 
        image = {'./assets/item2.jpg'}
        name = {'Parrot'}
        price = {'$110'}
      />
      <ListingCard 
        image = {'./assets/item2.jpg'}
        name = {'Parrot'}
        price = {'$110'}
      />
      </div>
    </main>
  );
}
