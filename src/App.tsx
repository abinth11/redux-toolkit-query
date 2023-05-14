import "./App.css";
import { useFetchBreedsQuery } from "./features/api/api-slice";
import DogCard from "./components/dogCard";

function App() {
  const {
    data = [],
    isFetching,
    isError,
    isLoading,
    isSuccess,
  } = useFetchBreedsQuery(20);
  return (
    <>
      <div className='card'></div>
      <div className='dog-parent'>
        {data.map((breeds) => {
          console.log(breeds);
          const dogInfo = {
            image: breeds.image.url,
            breed: breeds.name,
            lifespan: breeds?.life_span,
            temperament: breeds?.temperament,
          };
          return <DogCard {...dogInfo} key={breeds.id} />;
        })}
      </div>
    </>
  );
}

export default App;
