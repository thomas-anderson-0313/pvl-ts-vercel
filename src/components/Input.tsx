

const Input = ({src, alt, placeholder, type, value, onChange}:any) => {
  return(
    <div className="input-prefix">
      <img className='acc-form-icon' src = {src} alt = {alt} />
      <input 
            className='account-type-form'
            placeholder={placeholder}
            type = {type}
            value = {value}
            onChange = {onChange}
            required = {true}
      />
    </div>
  )
}

export default Input;