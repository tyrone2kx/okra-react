
const PrimaryButton = (props) => {
    const {children, ...rest} = props
  return (
    <button
        className='primary-button'
        {...rest}
    >
        {children}
    </button>
  )
}

export default PrimaryButton