import "./Seg_Styles.css";
import { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import SegmentDropDown from "../DropDown/drop_down";
import UnSelectedDropDownList from "../List/dropDownList";
import useSegmentContext from "../../hooks/use-seg-context";

function SegmentModel({ toggleModel }) {
  const [inputValue, setInputValue] = useState("");
  const {
    segmentOptions,
    selectedOptions,
    setSelectedOptions,
    unSelectedOptions,
    setUnSelectedOptions,
    saveSegmentData,
  } = useSegmentContext();
  let showUnselectedDropDown = "";
  if (unSelectedOptions.length !== 0) {
    showUnselectedDropDown = (
      <UnSelectedDropDownList
        placeHolder="un-Selected-options"
        values={unSelectedOptions}
      />
    );
  }

  const onChangeHandler = (event) => setInputValue(event.target.value);

  const addSchemaClickHandler = () => {
    const mainDropDown =
      document.getElementById("segment-dropdown").firstChild.lastChild;
    console.log(
      "🚀 ~ file: Segment_Model.js:29 ~ addSchemaClickHandler ~ mainDropDown",
      mainDropDown
    );
    mainDropDown.classList.add("hide");
    const unSelectedValues = segmentOptions.filter((option) => {
      if (!selectedOptions.includes(option.value)) {
        return option;
      }
    });
    const updatedValues = [...unSelectedOptions, unSelectedValues];
    setUnSelectedOptions(updatedValues);
    const listItems = mainDropDown.childNodes;
    console.log(
      "🚀 ~ file: Segment_Model.js:38 ~ addSchemaClickHandler ~ listItems",
      listItems
    );
    for (let i = 0; i < listItems.length; i++) {
      console.log("coming 1414");
      listItems[i].classList.remove("active");
    }
  };

  // ? Submit
  const segmentClickHandler = () => {
    let formattedValue = selectedOptions.map((option) => {
      const orderedKey = option;
      if (option.includes("_")) {
        let orderedValue = option.split("_");
        return (orderedValue = `${orderedKey}:${
          orderedValue[0].charAt(0).toUpperCase() + orderedValue[0].slice(1)
        } ${orderedValue[1]}`);
      } else {
        return `${orderedKey}:${
          option.charAt(0).toUpperCase() + option.slice(1)
        }`;
      }
    });

    if (inputValue.length !== 0 && selectedOptions.length !== 0) {
      setInputValue("");
      setSelectedOptions("");
      const segmentData = { segment_name: inputValue, schema: formattedValue };
      saveSegmentData(segmentData);
      toggleModel(false);
      setUnSelectedOptions("");
    }
  };

  // todo cancel
  const cancelClickHandler = () => {
    setInputValue("");
    setSelectedOptions("");
    setUnSelectedOptions("");
    toggleModel(false);
  };

  return (
    <div className="model-main-container">
      <div className="header-container">
        <MdKeyboardArrowLeft className="left-arrow " />
        Saving Segment
      </div>
      <div className="main-container">
        <div className="input-container">
          <p>Enter the Name of the Segment</p>
          <input
            value={inputValue}
            className="form-imput"
            onChange={onChangeHandler}
            type="text"
            placeholder="Name of the segment"
          />
          <p className="input-para-2nd ">
            To Save Your Segment, You need to add the schemas to build the query
          </p>
          <ul>
            <li className="user">User Traits </li>
            <li className="group">Group Traits</li>
          </ul>
        </div>
        {showUnselectedDropDown}
        <div className="main-drop-container">
          <SegmentDropDown
            id="segment-dropdown"
            values={segmentOptions}
            placeHolder="Add schema to segment"
          />
        </div>
        <p className="link-container" onClick={addSchemaClickHandler}>
          + <span className="link-text">add new schema</span>
        </p>
      </div>
      <div className="footer-container">
        <button className="submit-btn" onClick={segmentClickHandler}>
          Save the Segment
        </button>
        <button onClick={cancelClickHandler} className="cancel-btn">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default SegmentModel;
