import './bt5.css'

let divStyle1 = {
    display: "flex",
    alignItems: "center", 
    gap: "20px", 
    marginTop:"20px"
};

let divStyle2 = {
    height: "200px",
    width: "200px",
    color: "white",
    textAlign: "center",
    lineHeight: "200px",
    backgroundColor: "red",
};

export default function bt5() {
    return (
        <>
            <div style={divStyle1}>
                <div style={{ ...divStyle2, backgroundColor: "orange" }}>red</div>
                <div style={{ ...divStyle2, backgroundColor:  "pink"}}>blue</div>
                <div style={{ ...divStyle2, backgroundColor:"gray"  }}>green</div>
            </div>
        </>
    );
}
