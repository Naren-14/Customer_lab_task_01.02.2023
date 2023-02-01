import { useContext } from "react";
import SegmentContext from "../context/Segment";

function useSegmentContext() {
  return useContext(SegmentContext);
}

export default useSegmentContext;
