import "./App.css";
import Book from "./components/Book";

function App() {
  return (
    <>
      <Book name="사피엔스" totalPage="600" />
      <Book name="공간으로 만든 공간" totalPage="340" />
      <Book name="전생슬 19권" totalPage="468" />
    </>
  );
}

export default App;
