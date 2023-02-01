import { MdKeyboardArrowDown } from "react-icons/md";
import useSegmentContext from "../../hooks/use-seg-context";
import "./dropdown.css";

function SegmentDropDown(props) {
  const { placeHolder, values, id } = props;
  const { getSelectedValues } = useSegmentContext();

  const dropDownClickHandler = (event) => {
    // console.log(event.target);
    const currentDropDown = event.target.parentNode.children;
    // console.log(
    //   "🚀 ~ file: drop_down.js:11 ~ dropDownClickHandler ~ currentDropDown ",
    //   currentDropDown[1]
    // );

    currentDropDown[1].classList.toggle("hide");
  };

  console.log("rendering 1");
  const listClickHandler = (event) => {
    getSelectedValues(event.target.getAttribute("value"));
    event.target.classList.add("active");
  };

  const listItems = values.map((option) => (
    <li
      className="list-item"
      key={option.value}
      value={option.value}
      onClick={listClickHandler}
    >
      {option.label}
    </li>
  ));

  return (
    <div id={id} className="dropdown-container">
      <div>
        <p className="placeholder-container" onClick={dropDownClickHandler}>
          {placeHolder} <MdKeyboardArrowDown className="down-arrow" />
        </p>
        <ul className="dropdown-list hide">{listItems}</ul>
      </div>
      <p className="delete-container">-</p>
    </div>
  );
}

export default SegmentDropDown;
