import './InputNumber.css';

const UNITS = [
  { name: 'PX', value: 'px', default: true },
  { name: 'REM', value: 'rem', default: false }
];

export default function InputNumber({ label, value, onChange, onChangeUnit, unitEditable = true }){
  return (
    <label className="input-number">
      <span>{label}</span>
      <input type="number" value={value} onChange={event => onChange(event.target.value)} />
      <select className={!unitEditable ? 'disabled' : null} defaultValue={UNITS.find(unit => unit.default).value} onChange={event => onChangeUnit(event.target.value)}>
        {UNITS.map((unit, index) => 
          (!unitEditable && unit.default) || unitEditable ? (
            <option key={index} value={unit.value} >{unit.name}</option>
          ) : null
        )}
      </select>
    </label>
  )
}