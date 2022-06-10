import "../styles/global.css";
import { Provider } from "next-auth/client";
import Navbar from "./navbar";

export default function App({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  );
}
