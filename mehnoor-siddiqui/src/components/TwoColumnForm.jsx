import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Component for a single tab in the tab navigation
function Tab(props) {
  return (
    <li className="nav-item">
      <button
        className={`nav-link ${props.isActive ? "active" : ""}`}
        onClick={props.onClick}
        style={{ margin: '0.25rem' }}
      >
        {props.title}
      </button>
    </li>
  );
}

function TabNavigation(props) {
  const [activeTab, setActiveTab] = useState(0);

  const handleNextClick = () => {
    setActiveTab(activeTab + 1);
    const nextTab = document.getElementById(`tab${activeTab + 1}`);
    nextTab.scrollIntoView({ behavior: "smooth" });
  };

  const tabs = props.tabs.map((tab, index) => (
    <Tab
      key={index}
      id={`tab${index}`}
      title={tab.title}
      isActive={index === activeTab}
      onClick={() => setActiveTab(index)}
    />
  ));

  return (
    <div>
      <ul className="nav nav-tabs">{tabs}</ul>
      {activeTab < props.tabs.length - 1 && (
        <button onClick={handleNextClick}>Next Page</button>
      )}
    </div>
  );
}


// Component for the form fields for Plots page 
function Page1Form(props) {
  return (
    <form>
      <div className="form-group">
        <label>Title</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label>Logline</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label>Themes</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label>Story Types</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label>Genres</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label>Tone</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label>Audience</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label>B-Story</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label>Setting</label>
        <input type="text" className="form-control" />
      </div>
      <button type="button" className="btn btn-primary" onClick={props.onNext}>
        Next Page
      </button>
    </form>
  );
}

// Component for the form fields for Characters page
function Page2Form(props) {
  return (
    <form>
      <div className="form-group">
        <label>Name</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label>Character Arc</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label>Description</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label>Personality</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label>Archetypes</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label>Want</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label>Need</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label>Flaw</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label>Strength</label>
        <input type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label>Skills</label>
        <input type="text" className="form-control" />
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

  return (
    <div className="container">
      <div className="row">
        <div className="nav navbar">
          <ul className="nav navbar justify-content-between">
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
        <div className="col-9">
          {activeTab === 0 && <Page1Form />}
          {activeTab === 1 && <Page2Form />}
          {activeTab === 2 && <Page3Form />}
          {activeTab === 3 && <Page4Form />}
        </div>
      </div>
    </div>
  );
}

export default TwoColumnForm;
