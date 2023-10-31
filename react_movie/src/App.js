import {dummy} from './movieDummy'
import Movie from "./components/Movie";

function App() {
  return (
    <div>
      <div className="app-container">
          {
              // movieDummy 의 results 돌며 영화 컴포넌트 사용
              dummy.results.map((item) => {
                  return (
                      <Movie
                        title={item.title}
                        poster_path={item.poster_path}
                        vote_average={item.vote_average}
                      />
                  )
              })
          }
      </div>
    </div>
  );
}

export default App;
