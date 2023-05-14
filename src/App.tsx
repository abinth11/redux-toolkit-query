import "./App.css";
import { useFetchBreedsQuery } from "./features/api/api-slice";
import DogCard from "./components/dogCard";
import { useState, ChangeEvent } from "react";
function App() {
  const [limit, setLimit] = useState<number>(10);
  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const limit = Number(e.target.value);
    setLimit(limit);
  };
  const {
    data = [],
    isFetching,
    isError,
    isLoading,
    isSuccess,
  } = useFetchBreedsQuery(limit);
  return (
    <>
      {!isLoading && (
        <div>
          <h5>Select the number of dogs you want to display</h5>
          <select className="select-limit" name='' id='' onChange={handleSelect}>
            <option value='5'>5</option>
            <option value='10'>10</option>
            <option value='15'>15</option>
            <option value='20'>20</option>
            <option value='25'>25</option>
            <option value='30'>30</option>
            <option value='35'>35</option>
            <option value='40'>40</option>
          </select>
          <h6>Number of dogs displayed: {data.length}</h6>
        </div>
      )}
      <div className='dog-parent'>
        {isLoading ? (
          <h4>Loading...</h4>
        ) : (
          <>
            {data.map((breeds) => {
              const dogInfo = {
                image: breeds.image.url,
                breed: breeds.name,
                lifespan: breeds?.life_span,
                temperament: breeds?.temperament,
              };
              return <DogCard {...dogInfo} key={breeds.id} />;
            })}
          </>
        )}
      </div>
    </>
  );
}

export default App;
