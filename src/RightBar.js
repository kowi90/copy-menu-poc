import React, {useEffect, useState} from 'react';
import './RightBar.css';

function RightBar () {
  const barRef = React.createRef();
  const copyRef = React.createRef();
  const [isCopyVisible, setIsCopyVisible] = useState(false);
  const [selection, setSelection] = useState({});
  const [copyStyle, setCopyStyle] = useState({});

  useEffect(() => {
    const mouseListener  = window.addEventListener('mouseup', (e) => {
      const currentSelection = window.getSelection();
      const range = currentSelection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      setIsCopyVisible(false);
      if (range.startOffset === range.endOffset) {
        return;
      }
      setSelection(rect);
      setIsCopyVisible(true);
    });

    return () => {
      window.removeEventListener(mouseListener);
    }
  }, []);

  useEffect(() => {
    const barRect = barRef.current.getBoundingClientRect();
    const copyRect = copyRef.current.getBoundingClientRect();

    if (!selection.left) {
      return;
    }

    setCopyStyle({
      left: (selection.left - barRect.left) + (selection.width / 2) - (copyRect.width / 2),
      top: selection.top - barRect.top - copyRect.height
    });
  }, [selection]);

  const copyVisibleClass = isCopyVisible ? 'visible' : '';
  return (
    <div style={{position: 'relative'}}>
      <div className={`copy ${copyVisibleClass}`} style={copyStyle} ref={copyRef}>
        COPY ME
      </div>
      <div ref={barRef}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate ratione at aspernatur, aliquid tempora totam exercitationem temporibus culpa autem, dolores quasi dolore quod a rem sequi. Illo natus quasi accusantium?
      </div>
    </div>
  );
}

export default RightBar;