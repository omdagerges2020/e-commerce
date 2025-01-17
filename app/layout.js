import { Montserrat} from "next/font/google";
import "./globals.css";
import MainLayout from "./MainLayout";
import ScrollToTop from "./components/ButtomTop";

const montserrat = Montserrat({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "DETAYLAR",
  description: "detaylar e-commerce",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head></head>
      <body className={`${montserrat.className}`} suppressHydrationWarning={true}>
        <MainLayout>
          {children}
          <ScrollToTop/>
          {/* <ChatModal/> */}
        </MainLayout>
      </body>
    </html>
  );
}
