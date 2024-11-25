import './InputToggle.css';

export default function InputToggle({ label, checked, onChange }){
  return (
    <label className="input-checkbox">
      <div>
        <input type="checkbox" checked={checked} onChange={event => onChange(event.target.checked)} />
      </div>
      <span>{label}</span>
    </label>
  )
}