import './App.css';
import Image from './Image';

const url = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg'
const texto = 'Cute cat staring';

function App() {
  return (
    <>
      <Image source = {url} alternativeText = {texto}/>
    </>
  );
}

export default App;
