import "./home.css";
import SegmentModel from "../components/Model/Segment_Model";
import { useState } from "react";

function HomePage() {
  const [showModel, setShowModel] = useState(false);

  const onClickHandler = () => setShowModel(true);
  return (
    <div className="home-page-container">
      {showModel && <SegmentModel toggleModel={setShowModel} />}
      <button className="seg-btn" onClick={onClickHandler}>
        Save Segment
      </button>
    </div>
  );
}

export default HomePage;
