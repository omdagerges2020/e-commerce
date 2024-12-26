"use client";
import { ThemeProvider } from "@material-tailwind/react";
import Header from "./components/Header";
import { usePathname } from "next/navigation";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./redux-system/store";

export default function RootLayout({ children }) {
  const pathname = usePathname();


  const isLoginPage = pathname === "/login" || pathname === "/cart" || pathname === "/register" ||pathname === "/profile" ;

   

  return (
    <ThemeProvider>
      <Provider store={store}>
        {!isLoginPage && <Header />}
        {children}
        {!isLoginPage && <Footer />}
      </Provider>
    </ThemeProvider>
  );
}
