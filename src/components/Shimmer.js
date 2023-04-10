const Shimmer=()=>{
    return(
        <div className="res-list">
            {Array(10).fill("").map((e,i)=><div key={i} className="shimmer-card"></div>)}
            <div className="shimmer-card"></div>
        </div>
    );
}
export default Shimmer;