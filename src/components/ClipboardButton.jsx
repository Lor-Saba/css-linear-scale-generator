import svgClipboard from '../assets/clipboard.svg';
import svgCheck from '../assets/check.svg';
import svgCross from '../assets/cross.svg';
import { useState, useEffect, isValidElement } from 'react';

import './ClipboardButton.css';

export default function ClipboardButton({content}) {
  const [clipboardResult, setClipboardResult] = useState(null);

  useEffect(() => {
    if (clipboardResult !== null) {
      setTimeout(() => setClipboardResult(null), 1000);
    }
  }); 
  
  function copyToClipboard() {
    try {
      navigator.clipboard.writeText(content.current.textContent);
      setClipboardResult('ok');
    } catch(err) {
      console.error(err);
      setClipboardResult('ko');
    }
  } 

  return (
    <button className='clipboardButton' onClick={copyToClipboard} data-clipboard-result={clipboardResult}>
      <img src={svgClipboard} alt='Clipboard' title='Copy to clipboard' />
      <img data-type='ok' src={svgCheck} alt='Clipboard' title='Copy to clipboard' />
      <img data-type='ko' src={svgCross} alt='Clipboard' title='Copy to clipboard' />
    </button>
  )
}