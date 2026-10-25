import Header from "../layout/Header";
import Footer from "../layout/Footer";
import styles from './Layout.module.css';
import { Outlet } from "react-router-dom";

export function Layout({ image }) {
    return (
        <div>
            <Header image={image} />
            <main className={styles.main}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

{/*
export function Layout({ children, image }) {
    return (
        <div>
            <Header image={image} />
            <main className={styles.main}>
                {children}
            </main>
            <Footer />
        </div>
    );
}
*/}