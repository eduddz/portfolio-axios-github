import { Route, Routes} from "react-router-dom";
import { Profile } from "./Page/Profile";
import { Search } from "./Page/Search";

import "./App.scss";

function App() {

  return (
    <>
      <Search />
      <Routes>
        <Route path="/" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App;
