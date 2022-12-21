import { useDispatch } from "react-redux";
import { AppDispatch } from "../state/store";

export default () => useDispatch<AppDispatch>();
