import Header from './comonLayout/Heder';
import Baneer from './components/Banner/Baneer';
import COINPORT from './components/Coniport';
import Leage from './components/League';
import Remining from './components/Remining';

const App = () => {
  return (
    <div>
      <div>
        <Header></Header>
        <Baneer></Baneer>
        <COINPORT></COINPORT>
        <Remining></Remining>
        <Leage></Leage>
      </div>
    </div>
  );
};

export default App;
