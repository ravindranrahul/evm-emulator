import CodeMirror from '@uiw/react-codemirror';
import { Title } from './ui/Title';

export const Code = (props : {}) => {
  return (
    <div>
     <Title> EVM Source Code </Title> 
     <CodeMirror
      value="console.log('hello world!');"
      height="calc(100vh - 90px)"
    />
    </div>
  )
}
