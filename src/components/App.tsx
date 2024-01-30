import {useEffect, useState} from 'react';
import '../styling/App.css';
import Header from './Header';
import Loader from './Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 5500);
    }

    fakeDataFetch();
  }, [])
  return (
    <div className="App">
      {isLoading ? <Loader></Loader> : <Header></Header>}
    </div>
  );
}

export default App;
