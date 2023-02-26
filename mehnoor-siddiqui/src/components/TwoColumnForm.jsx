import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';



// Component for a single tab in the tab navigation
function Tab(props) {
  return (
    <li className="nav-item">
      <button
        className={`nav-link ${props.isActive ? "active bg-primary text-dark" : ""}`}
        onClick={props.onClick}
        style={{ margin: '0.25rem' }}
      >
        {props.title}
      </button>
    </li>
  );
}

// Component for the form fields for Plots page 
function Page1Form(props) {
  const generateIdea = (event) => {
    // Your code to generate an idea for this field goes here
    // You can use a library or write your own logic to generate the idea
  };

  return (
    <form>
    <div className="form-group">
      <div className="input-group" style={{display: 'flex', alignItems: 'center'}}>
        <label style={{marginRight: '10px'}}>Title</label>
        <button
          type="button"
          className="btn"
          onClick={generateIdea}
        >
          <FontAwesomeIcon icon={faPlay} style={{fontSize: '0.75em', color: 'black', backgroundColor: 'transparent', borderWidth: '0.5px'}} />
        </button>
        <div className="input-group">
          <input type="text" className="form-control" />
        </div>
      </div>
    </div>
      <div className="form-group">
        <div className="input-group" style={{display: 'flex', alignItems: 'center'}}>
        <label style={{marginRight: '10px'}}>Logline</label>
          <button
            type="button"
            className="btn"
            onClick={generateIdea}
          >
            <FontAwesomeIcon icon={faPlay} style={{fontSize: '0.75em', color: 'black', backgroundColor: 'transparent', borderWidth: '0.5px'}} />
          </button>
        </div>
        <div className="input-group">
          <input type="text" className="form-control" />
        </div>
      </div>
      <div className="form-group">
        <div className="input-group" style={{display: 'flex', alignItems: 'center'}}>
        <label style={{marginRight: '10px'}}>Themes</label>
          <button
            type="button"
            className="btn"
            onClick={generateIdea}
          >
            <FontAwesomeIcon icon={faPlay} style={{fontSize: '0.75em', color: 'black', backgroundColor: 'transparent', borderWidth: '0.5px'}} />
          </button>
        </div>
        <div className="input-group">
          <input type="text" className="form-control" />
        </div>
      </div>
      <div className="form-group">
        <div className="input-group" style={{display: 'flex', alignItems: 'center'}}>
        <label style={{marginRight: '10px'}}>Story Types</label>
          <button
            type="button"
            className="btn"
            onClick={generateIdea}
          >
            <FontAwesomeIcon icon={faPlay} style={{fontSize: '0.75em', color: 'black', backgroundColor: 'transparent', borderWidth: '0.5px'}} />
          </button>
        </div>
        <div className="input-group">
          <input type="text" className="form-control" />
        </div>
      </div>
      <div className="form-group">
        <div className="input-group" style={{display: 'flex', alignItems: 'center'}}>
        <label style={{marginRight: '10px'}}>Genres</label>
          <button
            type="button"
            className="btn"
            onClick={generateIdea}
          >
            <FontAwesomeIcon icon={faPlay} style={{fontSize: '0.75em', color: 'black', backgroundColor: 'transparent', borderWidth: '0.5px'}} />
          </button>
        </div>
        <div className="input-group">
          <input type="text" className="form-control" />
        </div>
      </div>
      <div className="form-group">
        <div className="input-group" style={{display: 'flex', alignItems: 'center'}}>
        <label style={{marginRight: '10px'}}>Tone</label>
          <button
            type="button"
            className="btn"
            onClick={generateIdea}
          >
            <FontAwesomeIcon icon={faPlay} style={{fontSize: '0.75em', color: 'black', backgroundColor: 'transparent', borderWidth: '0.5px'}} />
          </button>
        </div>
        <div className="input-group">
          <input type="text" className="form-control" />
        </div>
      </div>
      <div className="form-group">
        <div className="input-group" style={{display: 'flex', alignItems: 'center'}}>
        <label style={{marginRight: '10px'}}>Audience</label>
          <button
            type="button"
            className="btn"
            onClick={generateIdea}
          >
            <FontAwesomeIcon icon={faPlay} style={{fontSize: '0.75em', color: 'black', backgroundColor: 'transparent', borderWidth: '0.5px'}} />
          </button>
        </div>
        <div className="input-group">
          <input type="text" className="form-control" />
        </div>
      </div>
      <div className="form-group">
        <div className="input-group" style={{display: 'flex', alignItems: 'center'}}>
        <label style={{marginRight: '10px'}}>B-Story</label>
          <button
            type="button"
            className="btn"
            onClick={generateIdea}
          >
            <FontAwesomeIcon icon={faPlay} style={{fontSize: '0.75em', color: 'black', backgroundColor: 'transparent', borderWidth: '0.5px'}} />
          </button>
        </div> 
        <div className="input-group">
          <input type="text" className="form-control" />
        </div>
      </div>
      <div className="form-group">
        <div className="input-group" style={{display: 'flex', alignItems: 'center'}}>
        <label style={{marginRight: '10px'}}>Setting</label>
          <button
            type="button"
            className="btn"
            onClick={generateIdea}
          >
            <FontAwesomeIcon icon={faPlay} style={{fontSize: '0.75em', color: 'black', backgroundColor: 'transparent', borderWidth: '0.5px'}} />
          </button>
        </div>
        <div className="input-group">
          <input type="text" className="form-control" />
        </div>
      </div>
      <button type="button" className="btn btn-primary" onClick={props.onNext}>
        Next Page
      </button>
    </form>
  );
}

// Component for the form fields for Characters page
function Page2Form(props) {
  const generateIdea2 = (event) => {
    // Your code to generate an idea for this field goes here
    // You can use a library or write your own logic to generate the idea
  };

  return (
    <form>
      <div className="form-group">
      <div className="input-group" style={{display: 'flex', alignItems: 'center'}}>
        <label style={{marginRight: '10px'}}>Name</label>
        <button
            type="button"
            className="btn"
            onClick={generateIdea2}
          >
            <FontAwesomeIcon icon={faPlay} style={{fontSize: '0.75em', color: 'black', backgroundColor: 'transparent', borderWidth: '0.5px'}} />
          </button>
        </div>
        <div className="input-group">
          <input type="text" className="form-control" />
        </div>
      </div>

      <div className="form-group">
      <div className="input-group" style={{display: 'flex', alignItems: 'center'}}>
        <label style={{marginRight: '10px'}}>Character Arc</label>
        <button
            type="button"
            className="btn"
            onClick={generateIdea2}
          >
            <FontAwesomeIcon icon={faPlay} style={{fontSize: '0.75em', color: 'black', backgroundColor: 'transparent', borderWidth: '0.5px'}} />
          </button>
        </div>
        <div className="input-group">
          <input type="text" className="form-control" />
        </div>
      </div>

      <div className="form-group">
        <div className="input-group" style={{display: 'flex', alignItems: 'center'}}>
          <label style={{marginRight: '10px'}}>Description</label>
          <button
            type="button"
            className="btn"
            onClick={generateIdea2}
            >
              <FontAwesomeIcon icon={faPlay} style={{fontSize: '0.75em', color: 'black', backgroundColor: 'transparent', borderWidth: '0.5px'}} />
          </button>
        </div>
        <div className="input-group">
          <input type="text" className="form-control" />
        </div>
      </div>
      
      <div className="form-group">
        <div className="input-group" style={{display: 'flex', alignItems: 'center'}}></div>
        <label style={{marginRight: '10px'}}>Personality</label>
        <button
            type="button"
            className="btn"
            onClick={generateIdea2}
          >
            <FontAwesomeIcon icon={faPlay} style={{fontSize: '0.75em', color: 'black', backgroundColor: 'transparent', borderWidth: '0.5px'}} />
          </button>
        </div>
        <div className="input-group">
          <input type="text" className="form-control" />
        </div>

      <div className="form-group">
        <div className="input-group" style={{display: 'flex', alignItems: 'center'}}>
        <label style={{marginRight: '10px'}}>Archetypes</label>
        <button
            type="button"
            className="btn"
            onClick={generateIdea2}
          >
            <FontAwesomeIcon icon={faPlay} style={{fontSize: '0.75em', color: 'black', backgroundColor: 'transparent', borderWidth: '0.5px'}} />
          </button>
        </div>
        <div className="input-group">
          <input type="text" className="form-control" />
        </div>
      </div>

      <div className="form-group">
        <div className="input-group" style={{display: 'flex', alignItems: 'center'}}></div>
        <label style={{marginRight: '10px'}}>Want</label>
        <button
            type="button"
            className="btn"
            onClick={generateIdea2}
          >
            <FontAwesomeIcon icon={faPlay} style={{fontSize: '0.75em', color: 'black', backgroundColor: 'transparent', borderWidth: '0.5px'}} />
          </button>
        </div>
        <div className="input-group">
          <input type="text" className="form-control" />
        </div>

      <div className="form-group">
        <div className="input-group" style={{display: 'flex', alignItems: 'center'}}>
        <label style={{marginRight: '10px'}}>Need</label>
        <button
            type="button"
            className="btn"
            onClick={generateIdea2}
          >
            <FontAwesomeIcon icon={faPlay} style={{fontSize: '0.75em', color: 'black', backgroundColor: 'transparent', borderWidth: '0.5px'}} />
          </button>
        </div>
        <div className="input-group">
          <input type="text" className="form-control" />
        </div>

      <div className="form-group">
        <div className="input-group" style={{display: 'flex', alignItems: 'center'}}>
        <label style={{marginRight: '10px'}}>Flaw</label>
        <button
            type="button"
            className="btn"
            onClick={generateIdea2}
          >
            <FontAwesomeIcon icon={faPlay} style={{fontSize: '0.75em', color: 'black', backgroundColor: 'transparent', borderWidth: '0.5px'}} />
          </button>
        </div>
        <div className="input-group">
          <input type="text" className="form-control" />
        </div>
      </div>

      <div className="form-group">
        <div className="input-group" style={{display: 'flex', alignItems: 'center'}}></div>
        <label style={{marginRight: '10px'}}>Strength</label>
        <button
            type="button"
            className="btn"
            onClick={generateIdea2}
          >
            <FontAwesomeIcon icon={faPlay} style={{fontSize: '0.75em', color: 'black', backgroundColor: 'transparent', borderWidth: '0.5px'}} />
          </button>
        </div>
        <div className="input-group">
          <input type="text" className="form-control" />
        </div>
      </div>

      <div className="form-group">
        <div className="input-group" style={{display: 'flex', alignItems: 'center'}}> 
        <label style={{marginRight: '10px'}}>Skills</label>
        <button
            type="button"
            className="btn"
            onClick={generateIdea2}
          >
            <FontAwesomeIcon icon={faPlay} style={{fontSize: '0.75em', color: 'black', backgroundColor: 'transparent', borderWidth: '0.5px'}} />
          </button>
        </div>
        <div className="input-group">
          <input type="text" className="form-control" />
        </div>
      </div>
      
      <button type="button" className="btn btn-primary" onClick={props.onNext}>
        Next Page
      </button>
    </form>
  );    
}

// Component for the form fields for Acts page 
function Page3Form(props) {
  return (
    <form>
      <div className="form-group">
        <label>Act 1</label>
        <textarea className="form-control" rows="5"></textarea>
      </div>
      <div className="form-group">
        <label>Act 2</label>
        <textarea className="form-control" rows="5"></textarea>
      </div>
      <div className="form-group">
        <label>Act 3</label>
        <textarea className="form-control" rows="5"></textarea>
      </div><button type="button" className="btn btn-primary" onClick={props.onNext}>
        Next Page
      </button>
    </form>
  );
}

// Component for the form fields for Storyboards page 
function Page4Form(props) {
  const [scenes, setScenes] = useState([]);

  const handleGenerateScenes = () => {
    // Generate scenes based on user input
    // ...

    // Update state with generated scenes
    // setScenes(generatedScenes);
  };

  return (
    <div>
      <form>
        <div className="form-group">
          <label>Plot Points</label>
          <div>
            <textarea className="form-control" rows="5"></textarea>
            <button onClick={handleGenerateScenes}>Generate Scenes</button>
          </div>
        </div>
        <div className="form-group">
          <label>Plot Twists</label>
          <div>
            <textarea className="form-control" rows="5"></textarea>
            <button onClick={handleGenerateScenes}>Generate Scenes</button>
          </div>
        </div>
        <div className="form-group">
          <label>Plot Holes</label>
          <div>
            <textarea className="form-control" rows="5"></textarea>
            <button onClick={handleGenerateScenes}>Generate Scenes</button>
          </div>
        </div>
        <button type="button" className="btn btn-primary" onClick={props.onNext}>
        Next Page
      </button>
      </form>

      {scenes.length > 0 && <SceneBreakdown scenes={scenes} />}
    </div>
  );
}

// Component for displaying scene breakdown
function SceneBreakdown(props) {
  return (
    <div>
      <h2>Scene Breakdown</h2>
      <table>
        <thead>
          <tr>
            <th>Scene Number</th>
            <th>Short Type</th>
            <th>Scene Image</th>
            <th>Scene Description</th>
          </tr>
        </thead>
        <tbody>
          {props.scenes.map((scene, index) => (
            <tr key={index}>
              <td>{scene.sceneNumber}</td>
              <td>{scene.shortType}</td>
              <td>
                <img src={scene.image} alt={`Scene ${scene.sceneNumber}`} />
              </td>
              <td>{scene.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Components for the Main app
function TwoColumnForm() {
  const [activeTab, setActiveTab] = useState(0);

  // define a function to handle "Next" button clicks
  const handleNextButtonClick = () => {
    // increment the active tab index and wrap around if it exceeds the number of tabs
    setActiveTab((activeTab + 1) % 4);
  };

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <Tab
              title="Plots"
              isActive={activeTab === 0}
              onClick={() => setActiveTab(0)}
            />
            <Tab
              title="Characters"
              isActive={activeTab === 1}
              onClick={() => setActiveTab(1)}
            />
            <Tab
              title="Acts"
              isActive={activeTab === 2}
              onClick={() => setActiveTab(2)}
            />
            <Tab
              title="Storyboards"
              isActive={activeTab === 3}
              onClick={() => setActiveTab(3)}
            />
          </ul>
        </div>
      </nav>
      <div className="row">
        <div className="col-9">
          {activeTab === 0 && <Page1Form onNext={handleNextButtonClick} />}
          {activeTab === 1 && <Page2Form onNext={handleNextButtonClick} />}
          {activeTab === 2 && <Page3Form onNext={handleNextButtonClick} />}
          {activeTab === 3 && <Page4Form onNext={handleNextButtonClick} />}
        </div>
      </div>
    </div>
  );
}

export default TwoColumnForm;