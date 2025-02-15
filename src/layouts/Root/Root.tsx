import { Outlet } from "react-router-dom";

import styles from "./Root.module.scss";
import { Footer } from "../../ui/Footer/Footer";
import { Header } from "../../ui/Header/Header";

export default function RootLayout() {
  return (
    <div className={styles.Wrapper}>
      <Header />
      <main className={styles.Main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
