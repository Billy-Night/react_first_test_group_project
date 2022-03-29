import logo from './logo.svg';
import './App.css';

let day1 = new Date("03/29/2022"); 
let day2 = new Date("07/12/2022");

let days;

let difference = Math.abs(day2-day1);
days = difference/(1000 * 3600 * 24);

console.log(days);

// let endDate =  new Date ("07/03/2022"); 
// let currentDate = new Date ();
// console.log(currentDate);

// let timer = (endDate.getDay() - currentDate.getDay());
// console.log(timer);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>
            <div>
              <nav>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                </ul>
              </nav>
            </div>
            <main>
            <h1>The Wild Code School</h1>
            <p>The wildest place you'll ever code</p>
            <div>
              <img className='wildlogo' src="https://www.wildcodeschool.com/assets/wildcodeschool-logo-meta-image-f6f2f7f52b82bfc419f031f6a989020a8b094d7a4e6676ab6f0dff0b0f470da9.png" alt="wildimage"></img>
            </div>
            <div>
              <button className='btn'>Agenda</button>
              <button className='btn'>Quests</button>
              <button className='brn'>GitHub Marc</button>
            </div>
            <div>
              <p>This is the time left in the course:</p>
              <div className='counter'>
                <p className="text_shadow">{days}</p>
              </div>
            </div>
            </main>
</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
