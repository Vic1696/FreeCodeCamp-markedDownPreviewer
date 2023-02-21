import { useState } from "react";
import { marked } from 'marked'
import "./App.css";

function App() {
  //useStates
  const [text, setText] = useState(
    `# H1 
## H2
[title](https://www.example.com)
\`code\`
\`\`\`
{
  "firstName": "",
  "lastName" : "",
  "age" :
}
 \`\`\`
- First item
- Second item
- Third item
> blockQuote
![alt text](image.jpg)
**bold text**
   ` );

   marked.setOptions({
    breaks:true
   })
  return (
    <div className="App">
      <h1>MarkDown Previewer</h1>
      <textarea
        name="text"
        id="editor"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      ></textarea>
      <div id="preview"
       dangerouslySetInnerHTML={{
         __html: marked(text), 
         }}
       ></div>
    </div>
  );
}

export default App;
