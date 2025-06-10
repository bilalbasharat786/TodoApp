import telegram from "../assets/telegram.jpg";
function Card() {
  return (
    <div className="col-lg-3">
      <div className="card productcard">
        <img src={telegram} className="card-img-top" alt="..."/>
        <a href="#" className="btn btn-primary mt-4">Add To Card</a>
          <div className="card-body text-center ">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">PKR.780</p>
            <span>⭐⭐⭐⭐⭐</span>
          </div>
      </div>
    </div>
  );
}

export default Card;