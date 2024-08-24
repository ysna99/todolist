import './Editor.css'
import { useState, useRef } from 'react'
const Editor = ({ onCreate }) => {
    const [content, setContent] = useState("");
    const contentRef = useRef();

    const onChangeInput = (e) => {
        setContent(e.target.value);
    }
    const onClickButton = () => {
        if (content === "") {
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    }
    const onkeydown = (e) => {
        // enter key
        if (e.keyCode === 13) {
            onClickButton();
        }
    }
    return <div className='Editor'>
        <input value={content} ref={contentRef} onChange={onChangeInput} onKeyDown={onkeydown}placeholder='To do...' />
        <button onClick={onClickButton} >add</button>
    </div>
}

export default Editor;