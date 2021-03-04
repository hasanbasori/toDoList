import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="header__h">
          <div>
            {" "}
            <h1 className="logo">TO DO LIST</h1>{" "}
          </div>
          <div className="search_area">
            <form action="">
              <input
                className="input_search"
                type="text"
                placeholder="Search"
              />

              <button className="bt-i">Search</button>

              <button className="bt-i">Add</button>
            </form>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="Box-area">
          <div className="box">
            <div className="box-header">
              <h3>TO DO</h3>
            </div>
            {/* <div className="box-body"> */}
            <p>
              <strong> Requirement</strong>
            </p>
            {/* </div> */}
            <div className="box-footer">
              <button>&#9999;</button>
              <button>&#9940;</button>
              <button>Doing</button>
              <button>Done</button>
            </div>
          </div>
          <div className="box">
            <div className="box-header">
              <h3>DOING</h3>
            </div>
            {/* <div className="box-body"> */}
            <p>
              <strong>Prototype</strong>
            </p>
            {/* </div> */}
            <div className="box-footer">
              <button>&#9999;</button>
              <button>&#9940;</button>
              <button>Doing</button>
              <button>Done</button>
            </div>
          </div>
          <div className="box">
            <div className="box-header">
              <h3>DONE</h3>
            </div>
            {/* <div className="box-body"> */}
            <p>
              <strong>Wireframe</strong>
            </p>
            {/* </div> */}
            <div className="box-footer">
              <button>&#9999;</button>
              <button>&#9940;</button>
              <button>Doing</button>
              <button>Done</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
