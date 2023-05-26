import styles from './styles.module.css';
export default function Home({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <section className={styles.login}>{children}</section>;
}
