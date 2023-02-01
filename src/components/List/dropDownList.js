import "./list.css";
import SegmentDropDown from "../DropDown/drop_down";

function UnSelectedDropDownList(props) {
  const { placeHolder, values } = props;

  const renderedDropDowns = values.map((value, ind) => {
    return (
      <SegmentDropDown
        id={`unselected-value-dropown-${ind}`}
        key={ind}
        placeHolder={placeHolder}
        values={value}
      />
    );
  });

  return (
    <div className="unselected-dropdown-cotntainer">{renderedDropDowns}</div>
  );
}

export default UnSelectedDropDownList;
