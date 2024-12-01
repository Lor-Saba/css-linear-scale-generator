import { useSelector } from 'react-redux';
import ClipboardButton from './ClipboardButton';
import { Tooltip } from 'react-tooltip'

import './ResultBox.css';
import { useRef } from 'react';

export default function ResultBox(){
  const codeRef = useRef();
  const { 
    rootFontSize,
    leftValue,
    leftViewportWidth,
    rightValue,
    rightViewportWidth,
    convertToRem
  } = useSelector(state => state.controls);

  function getStateValue(state, convertUnit) {
    let value = +state.value;
    let unit = state.unit;

    if (convertUnit) {
      if (state.unit === 'px' && convertUnit === 'rem') {
        value = value / +rootFontSize.value
        unit = 'rem';
      }
  
      if (state.unit === 'rem' && convertUnit === 'px') {
        value = value * +rootFontSize.value
        unit = 'px';
      }
    }

    return [ value, unit ];
  }

  function Value({ children, title }) {
    return (
      <span 
        data-style="var" 
        data-tooltip-id="custom-tooltip" 
        data-tooltip-place="bottom" 
        data-tooltip-delay-show="200"
        data-tooltip-content={title}
      >
        {children}
      </span>
    );
  }

  function StateValue({ state, appendUnit = true, convertUnit, title }) {
    const [ value, unit ] = getStateValue(state, convertUnit ? convertUnit : convertToRem.value ? 'rem' : 'px');

    return <Value title={title}>{value}{appendUnit ? unit : ''}</Value>;
  }
  function SimpleValue({ value, title }) {
    return <Value title={title}>{value}</Value>;
  }


  function MinBlock({ children }){
    const [ leftValuePx ] = getStateValue(leftValue, 'px');
    const [ rightValuePx ] = getStateValue(rightValue, 'px');
    const cssFunctionName = +leftValuePx < +rightValuePx ? 'max' : 'min';

    return (
      <>{cssFunctionName}(<StateValue state={leftValue} title='Left value' />, {children})</>
    );
  }

  function MaxBlock({ children }){
    const [ leftValuePx ] = getStateValue(leftValue, 'px');
    const [ rightValuePx ] = getStateValue(rightValue, 'px');
    const cssFunctionName = +leftValuePx < +rightValuePx ? 'min' : 'max';

    return (
      <>{cssFunctionName}(<StateValue state={rightValue} title='Right value' />, {children});</>
    );
  }

  function ScaleBlock(){
    const [ leftValuePx ] = getStateValue(leftValue, 'px');
    const [ rightValuePx ] = getStateValue(rightValue, 'px');
    const [ leftViewportWidthPx ] = getStateValue(leftViewportWidth, 'px');
    const [ rightViewportWidthPx ] = getStateValue(rightViewportWidth, 'px');

    return (
      <>
        calc(<StateValue state={leftValue} title='Left value' /> + calc(<SimpleValue value={rightValuePx - leftValuePx} title='Right value (px) - Left value (px)'/> * calc(calc(100vw - <StateValue state={leftViewportWidth} title='Left viewport width' />) / <SimpleValue value={rightViewportWidthPx - leftViewportWidthPx} title='Right viewport width (px) - Left viewport width (px)'/>)))
      </>
    )
  }

  const code = <>
    <span data-style="prop">font-size:</span> 
    <MaxBlock>
      <MinBlock>
        <ScaleBlock/> 
      </MinBlock> 
    </MaxBlock>
  </>;

  return (
    <>
      <pre>
        <code ref={codeRef}>{code}</code>
        <ClipboardButton content={codeRef}/>
      </pre>
      <Tooltip id="custom-tooltip" />
    </>
  )
}