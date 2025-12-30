import Header from './Components/Header';
import Proyectos from './Components/Proyectos';
import SobreMi from './Components/SobreMi';
import FormacionAcademica from './Components/FormacionAcademica';
import CursosHabilidades from './Components/CursosHabilidades';

function App() {
  return (
    <>
      <Header/>
      <SobreMi/>
      <Proyectos/>
      <FormacionAcademica/>
      <CursosHabilidades/>
      <Header/>
    </>
  );
}

export default App;
