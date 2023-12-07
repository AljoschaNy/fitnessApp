function SecuredComponent() {

    function logout(){
        const host = window.location.host === "localhost:5173" ? "http://localhost:8080" : window.location.origin;
        window.open(host + "/logout", "_self");
    }

    return (
        <>
            <p>secured</p>
            <button onClick={logout}>Logout</button>
        </>

    )
}

export default SecuredComponent;