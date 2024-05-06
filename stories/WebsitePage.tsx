import { Header } from "./Header";
import { Main } from "./Main";
import {About} from './About';
import {PastPatrons} from './PastPatrons';

export const WebsitePage = () => {
  return (
    <>
      <Header />
      <Main />
      <About />
      <PastPatrons/>
    </>
  );
};
