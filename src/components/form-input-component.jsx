const FormInput = ({label, value, name, ...otherProps}) => {
    return (
        <>
            <input id={name} name={name} className="border-b border-secondary outline-0 mt-8 bg-transparent" {...otherProps} />
            <label htmlFor={name} className={`${value.length?'relative h-0 text-secondary mt-3 transition-all -top-16 text-xs':'relative h-0 -top-12 text-secondary mt-3 transition-all input-focused:-top-16  input-focused:text-xs'}`} value={value}>{label}</label>
        </>
    )  
}

export default FormInput;