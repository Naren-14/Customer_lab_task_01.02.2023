import { createContext, useState } from "react";
import axios from "axios";

const SegmentContext = createContext();

const segmentOptions = [
  { label: "First Name", value: "first_name" },
  { label: "Last Name", value: "last_name" },
  { label: "Age", value: "age" },
  { label: "Account Name", value: "account_name" },
  { label: "City", value: "city" },
  { label: "State", value: "state" },
];
function Provider({ children }) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [unSelectedOptions, setUnSelectedOptions] = useState([]);

  const getSelectedValues = (selVal) => {
    const selectedValues = [...selectedOptions, selVal];
    setSelectedOptions(selectedValues);
  };

  const saveSegmentData = async (data) => {
    console.log("coming 1111");
    const header = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
    };
    console.log("🚀 ~ file: Segment.js:38 ~ saveSegmentData ~ header", header);

    const jsonData = JSON.stringify(data);
    console.log("🚀 ~ file: Segment.js:40 ~ saveSegmentData ~ data ", jsonData);
    const response = await axios.post(
      "83fec357-ca47-4724-9c0d-fb8aa8cf13e6",
      jsonData,
      {
        header: header,
      }
    );
  };

  const segmentFormSubmit = () => {};

  const valueToShare = {
    saveSegmentData,
    segmentFormSubmit,
    setSelectedOptions,
    selectedOptions,
    segmentOptions,
    getSelectedValues,
    unSelectedOptions,
    setUnSelectedOptions,
  };

  return (
    <SegmentContext.Provider value={valueToShare}>
      {children}
    </SegmentContext.Provider>
  );
}

export { Provider };
export default SegmentContext;
