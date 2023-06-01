import CodeMirror from '@uiw/react-codemirror';

export const Code = (props : {}) => {
  return (
    <div>
     <CodeMirror
      value="console.log('hello world!');"
      height="200px"
    />
    </div>
  )
}
