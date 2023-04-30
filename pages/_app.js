import '@component/styles/globals.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css' 

export default function App({ Component, pageProps }) {
  useEffect(() => {
		AOS.init({
			delay: 400,
			duration: 800,
		});
   });
  return <Component {...pageProps} />
}
