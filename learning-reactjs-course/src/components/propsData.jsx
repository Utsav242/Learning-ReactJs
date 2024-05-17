const PropsData =(props)=>{
    return(
        <>

        <div className="propsComponent">
            <h1>{props.heading}</h1>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
        </>
    )
}

export default PropsData;