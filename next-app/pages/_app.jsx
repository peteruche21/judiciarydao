import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
function MyApp(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    return (<MoralisProvider initializeOnMount={false}>
      <Component {...pageProps}/>
    </MoralisProvider>);
}
export default MyApp;
