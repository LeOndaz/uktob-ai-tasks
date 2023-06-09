import './App.css';
import {useState} from "react";

function App() {
  const [str, setStr] = useState("");
  const [repeats, setRepeats] = useState(1);
  const [output, setOutput] = useState("");

  const handleOnKeyDown = (e) => {
    if (e.code === "Minus" || e.code === "Period") {
      e.preventDefault();
      e.stopPropagation();
    }
  }
  const handleSetRepeats = (e) => {
    const value = e.target.value;

    // it will be parsable as int because onKeyDown will allow only ints
    setRepeats(parseInt(value));
  };
  const handleSubmit = () => {
    setOutput(str.repeat(repeats))
  }

  const labelStyles = {
    fontSize: 12,
    marginBottom: 2
  }

  const inputStyles = {
    border: "1px solid #C5C6d0",
    borderRadius: 5,
    padding: 5,
  }

  const formControlStyles = {
    display: "flex",
    flexDirection: "column",
    marginBottom: 5,
  }

  return (
    <div
      style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: 400}}>
      <form style={{display: "flex", flexDirection: "column", maxWidth: 300}}>
        <div style={{display: "flex", flexDirection: "column"}}>
          <div style={formControlStyles}>
            <label
              htmlFor="str"
              style={labelStyles}
            >String to repeat</label>
            <input
              type="text"
              id="str"
              name="str"
              value={str}
              style={inputStyles}
              onChange={(e) => setStr(e.target.value)}
            />
          </div>

          <div style={formControlStyles}>
            <label style={labelStyles}>Repeats</label>
            <input
              id="repeats"
              name="repeats"
              type="number"
              value={repeats}
              min={1}
              style={inputStyles}
              onChange={handleSetRepeats}
              onKeyDown={handleOnKeyDown}
            />
          </div>
        </div>

        <button className="submit-button" type="button" onClick={handleSubmit} style={{}}>Submit
        </button>
      </form>

      <div style={{marginTop: 20, padding: 20, backgroundColor: "#4d4c5c", color: "white", borderRadius: 5}}>
        Output: {output}
      </div>
    </div>
  )
}

export default App;
