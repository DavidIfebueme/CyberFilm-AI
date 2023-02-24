import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function TwoColumnForm() {
  const [activeTab, setActiveTab] = useState("page1");
  const [loading, setLoading] = useState(false);


  function handleTabClick(tab) {
    setActiveTab(tab);
  }

  function loadTextnImage() {
    setLoading(true);
    loading &&
    setTimeout(() => {  
      setLoading(false);
    }, 1000);
    
  }


  return (
    <div className="container">
      <ul className="nav nav-tabs col-md-6">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "page1" ? "active" : ""}`}
            onClick={() => handleTabClick("page1")}
          >
            Plot
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "page2" ? "active" : ""}`}
            onClick={() => handleTabClick("page2")}
          >
            Characters
          </button>
        </li>
      </ul>
      <div className="row">
        <div className="col-md-6">
        <div className={`${activeTab === "page1" ? "" : "d-none"}`}>
          <form >
            <div className="form-group">
              <label >Title</label>
              <input type="text" className="form-control"/>
            </div>
            <div className="form-group">
              <label >Logline</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label >Themes</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label >Story Types</label>
              <input type="text" className="form-control"/>
            </div>
            <div className="form-group">
              <label >Genres</label>
              <input type="text" className="form-control"/>
            </div>
            <div className="form-group">
              <label >Tone</label>
              <input type="text" className="form-control"/>
            </div>
            <div className="form-group">
              <label >Audience</label>
              <input type="text" className="form-control"/>
            </div>
            <div className="form-group">
              <label >B-Story</label>
              <input type="text" className="form-control"/>
            </div>
            <div className="form-group">
              <label >Setting</label>
              <input type="text" className="form-control"/>
            </div>
          </form>
        </div>
        <div className={` ${activeTab === "page2" ? "" : "d-none"}`}>
        <form >
            <div className="form-group">
              <label >Name</label>
              <input type="text" className="form-control"/>
            </div>
            <div className="form-group">
              <label >Character Arc</label>
              <input type="text" className="form-control"/>
            </div>
            <div className="form-group">
              <label >Description</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label >Personality</label>
              <input type="text" className="form-control"/>
            </div>
            <div className="form-group">
              <label >Archetypes</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label >Want</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label >Need</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label >Flaw</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label >Challenges</label>
              <input type="text" className="form-control"  />
            </div>
          </form>
        </div>
        </div>
        <div className="col-md-6 bg-dark text-white">
        <form className="" >
            <div className="form-group">
              <label >1. ACT 1</label>
              <input type="text" className="form-control"/>
              <button class="btn btn-outline-secondary" type="button" onClick={loadTextnImage}>Next</button>
            </div>
            <div className="form-group">
              <label >2. ACT 2</label>
              <input type="text" className="form-control"/>
              <button class="btn btn-outline-secondary" type="button" onClick={loadTextnImage}>Next</button>
            </div>
            <div className="form-group">
              <label >3. MIDPOINT</label>
              <input type="text" className="form-control"/>
              <button class="btn btn-outline-secondary" type="button" onClick={loadTextnImage}>Next</button>
            </div>
            <div className="form-group">
              <label >4. ACT 2 PART 2</label>
              <input type="text" className="form-control"/>
              <button class="btn btn-outline-secondary" type="button" onClick={loadTextnImage}>Next</button>
            </div>
            <div className="form-group">
              <label >5. ACT 3</label>
              <input type="text" className="form-control"/>
              <button class="btn btn-outline-secondary" type="button" onClick={loadTextnImage}>Next</button>
            </div>           
          </form>
        
        </div>
      </div>
    </div>
  );
}

export default TwoColumnForm;
