import './App.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdSearch } from 'react-icons/io';

export default function App() {
  return (
    <>
      <div className="the-top-wrapper-desktop">
        <hr></hr>
        <h1
          style={{
            fontSize: '2rem',
            width: 'fit-content',
            margin: '0 auto',
            backgroundColor: 'white',
            flex: 1,
            whiteSpace: 'nowrap'
          }}
        >
          Cincinnati State
        </h1>
        <hr></hr>
      </div>

      <div className="nav-wrapper">
        <nav>
          <div className="nav-mobile">
            <h1>Cincinnati State</h1>

            <div style={{ display: 'flex', gap: '20px' }}>
              <RxHamburgerMenu />
              <IoMdSearch />
            </div>
          </div>
          <div className="nav-desktop">
            <div className="nav-desktop-bottom">
              <div>Mock</div>
              <div>Mock</div>
              <div>Mock</div>
              <div>Mock</div>
              <div>Mock</div>
            </div>
          </div>
        </nav>
      </div>

      <div className="image-wrapper">
        <h2>You Can!</h2>
      </div>
      <main>
        <p className="degree-text">
          Degree, Certificate, or Workforce Training - whatever your next step
          is, you can achieve it here!
        </p>
        <button id="apply-btn">Apply</button>
      </main>

      <div className="the-top-wrapper">
        <hr></hr>
        <h1
          style={{
            fontSize: '2rem',
            width: 'fit-content',
            margin: '0 auto',
            backgroundColor: 'white',
            flex: 1,
            whiteSpace: 'nowrap'
          }}
        >
          Logo here
        </h1>
        <hr></hr>
      </div>
    </>
  );
}
