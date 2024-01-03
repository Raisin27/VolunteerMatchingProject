const ListBtn=()=>{
    const showList=()=>{
        document.getElementsByClassName(".map");
    }
    return(
        <>
        <Button variant="success" className="list-btn" onClick={showList()}>목록</Button>
        </>
    )
}
export default ListBtn;