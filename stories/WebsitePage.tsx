import { Header } from "./Header";
import { Main } from "./Main";
import { About } from "./About";
import { PastPatrons } from "./PastPatrons";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export const WebsitePage = () => {
  return (
    <>
      <Header />
      <Main />
      <About />
      <PastPatrons />
      <Contact />
      <Footer />
    </>
  );
};
