import CodeMirror from "@uiw/react-codemirror";
import { useDispatch } from "react-redux";
import { stackPush } from "../store/feature/stack/stackSlice";
import { Title } from "./ui/Title";

export const Code = () => {
  const dispatch = useDispatch();

  const push = ()=>{
    dispatch(stackPush({offset:1,value:"govinda"}));
  }

  return (
    <div>
      <Title> EVM Source Code </Title>
      <button onClick={push}> Push</button>
      <CodeMirror
        value="console.log('hello world!');"
        height="calc(100vh - 90px)"
      />
    </div>
  );
};
