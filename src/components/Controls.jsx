import InputNumber from "./InputNumber";
import InputToggle from "./InputToggle";

import './Controls.css';
import { useDispatch, useSelector } from "react-redux";
import { controlsActions } from "../store";

export default function Controls(){
  const dispatch = useDispatch();
  const { 
    rootFontSize,
    leftValue,
    leftViewportWidth,
    rightValue,
    rightViewportWidth,
    convertToRem
  } = useSelector(state => state.controls);

  return (
    <>
      <div className="controls">
        <InputNumber 
          label='Root font size' 
          value={rootFontSize.value} 
          unitEditable={false}
          onChange={value => dispatch(controlsActions.update({ key: 'rootFontSize', value }))}
        />
        <InputToggle 
          label='Use REM in result box' 
          checked={convertToRem.value} 
          onChange={value => dispatch(controlsActions.update({ key: 'convertToRem', value }))}
        />
      </div>
      <div className="controls">
        <InputNumber 
          label='Left value' 
          value={leftValue.value} 
          onChange={value => dispatch(controlsActions.update({ key: 'leftValue', value }))}
          onChangeUnit={unit => dispatch(controlsActions.changeUnit({ key: 'leftValue', unit }))}
        />
        <InputNumber 
          label='Right value' 
          value={rightValue.value} 
          onChange={value => dispatch(controlsActions.update({ key: 'rightValue', value }))}
          onChangeUnit={unit => dispatch(controlsActions.changeUnit({ key: 'rightValue', unit }))}
        />
        <InputNumber 
          label='Left viewport width' 
          value={leftViewportWidth.value} 
          onChange={value => dispatch(controlsActions.update({ key: 'leftViewportWidth', value }))}
          onChangeUnit={unit => dispatch(controlsActions.changeUnit({ key: 'leftViewportWidth', unit }))}
        />
        <InputNumber 
          label='Right viewport width' 
          value={rightViewportWidth.value} 
          onChange={value => dispatch(controlsActions.update({ key: 'rightViewportWidth', value }))}
          onChangeUnit={unit => dispatch(controlsActions.changeUnit({ key: 'rightViewportWidth', unit }))}
        />
      </div>
    </>
  )
}