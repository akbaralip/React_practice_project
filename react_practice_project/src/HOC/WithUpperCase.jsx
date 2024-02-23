
const WithUpperCase = (WrappedComponent)=>{
    return(props)=>{
        const upperCaseText = props.name.toUpperCase();
        return <WrappedComponent {...props} name={upperCaseText} />
    }

}
export default WithUpperCase;