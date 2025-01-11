"use client";
import { ThemeProvider } from "@material-tailwind/react";
import Header from "./components/Header";
import { usePathname } from "next/navigation";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import {store, mainStore } from "./redux-system/store";
import { PersistGate } from "redux-persist/integration/react";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const isLoginPage =
    pathname === "/login" ||
    pathname === "/cart" ||
    pathname === "/register" ||
    pathname === "/profile" ||
    pathname === "/checkout"


  return (
    <ThemeProvider>
      <Provider store={store}>
        <PersistGate persistor={mainStore}>
          {!isLoginPage && <Header />}
          {children}
          {!isLoginPage && <Footer />}
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}
