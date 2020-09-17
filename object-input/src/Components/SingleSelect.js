import React, {useState} from "react";
import './SingleSelect.css';

const SingleSelect = ({options}) => {
  const [isVisible, setVisiblity] = useState(false);
  const [search, setSearch] = useState("");
  const [showLightArrowDownIcon , setArrowDownIcon] = useState(true);
  const [showLightXIcon , setXIcon] = useState(true);
  let [cursor, setCursor] = useState(-1)
  const [isHighlighted, setHighlight] = useState(false);

  // Display select value from given list of options
  const setOptions = item => {
    setSearch(item);
    setVisiblity(false);
  }

  const keyboardNavigation = (e) => {
    if (e.key === "ArrowDown") {
      setVisiblity(!isVisible);
      if (cursor <= options.length) setCursor(cursor + 1)
      if (cursor !== -1) setOptions(options[cursor].value)
    };

    if (e.key === "ArrowUp") {
      if (cursor > 0) setCursor(cursor - 1)
      setOptions(options[cursor].value)
      console.log(cursor)
    };

    if (e.key === "Escape") setVisiblity(!isVisible);
  };

  const lightXIcon = (<svg onClick={() => setSearch('')} height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" style={{fill:'rgb(173, 170, 170, 1)'}}><path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path></svg>);

  const boldXIcon = (<svg onClick={() => setSearch('')} height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" style={{fill:'rgb(64, 61, 61, 1)'}}><path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path></svg>);

  const lightArrowDownIcon = (<svg onClick={() => {setVisiblity(!isVisible);}} height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" style={{fill:'rgb(173, 170, 170, 1)'}}><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>);

  const boldArrowDownIcon = (<svg onClick={() => {setVisiblity(!isVisible);}} height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" style={{fill:'rgb(64, 61, 61, 1)'}}><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>);

  return (
    <div
    className="single-select"
    onClick={ () => {setVisiblity(!isVisible); setArrowDownIcon(!showLightArrowDownIcon); setXIcon(!showLightXIcon);} }
    >
      <div className="dropdown-container">
        <input
        className="dropdown-input"
        placeholder="Select..."
        onClick={() => {setVisiblity(!isVisible); setArrowDownIcon(!showLightArrowDownIcon); setXIcon(!showLightXIcon);}}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown = {e => keyboardNavigation(e)}
        />
        <div className="icon-selectors ">
          {showLightXIcon ? lightXIcon : boldXIcon}
          <span className="vertical-line-seperator"></span>
          {showLightArrowDownIcon ? lightArrowDownIcon : boldArrowDownIcon}
        </div>
      </div>

      {isVisible &&
      <div className="dropdown-menu">
        {options
          .filter(({value}, i) => (((value.slice(0,search.length)).toLowerCase()).indexOf(search.toLowerCase()) !== -1 ))
          .map((item, i) => {
          return (
            <div
            className={`dropdown-value`}
            key={i}
            onClick={() => setOptions(item.value)}
            >
              <span>{item.value}</span>
              <img src={item.logo} alt="logo"/>
            </div>
          );
          })
        }
      </div>}
    </div>

  );
};


export default SingleSelect;