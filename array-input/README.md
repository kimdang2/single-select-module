## Description
Created a single-select React component that can select from a given list of <b>array</b> strings


## Usage
- Change the input in data.js file located in the src folder to a list of array strings
```javascript
  <SingleSelect options={data}/>
```

- Allow user to exit dropdown menu by clicking outside menu
  ```javascript
  const wrapperRef = useRef(null);
  .
  .
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutSide);

    return () => {
      document.removeEventListener("mousedown", handleClickOutSide)
    }
  }, []);

  const handleClickOutSide = event => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };

  .
  .
  return (
    <div className="single-select">
      <div ref={wrapperRef} >


## Install Dependencies
npm install

## Development
### Run
$ npm start
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Demo
![Demo](https://media.giphy.com/media/PgKreWGGxY2yodhmLh/giphy.gif)
