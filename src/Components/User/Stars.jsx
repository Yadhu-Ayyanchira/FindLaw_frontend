import {FaStar,FaStarHalfAlt,FaRegStar} from "react-icons/fa"

function Stars({stars,count}) {
console.log("ratingggg",stars);
    const ratingStar = Array.from({length:5},(elem, index) => {
        let number = index+0.5;
        return (
          <span key={index}>
            {stars >= index + 1 ? (
              <FaStar className="text-yellow-600 w-5 h-5" />
            ) : stars >= number ? (
              <FaStarHalfAlt className="text-yellow-600 w-5 h-5" />
            ) : (
              <FaRegStar className="text-yellow-600 w-5 h-5" />
            )}
          </span>
        );
    })

  return (
    <div className=" flex flex-row self-center items-center pt-2">
      {ratingStar}

      {count==0?(null):(<p className="ms-2">
        <span className="font-bold text-black">{count}</span>
        <span className="text-xs ps-1">Reviews</span>
      </p>)}
    </div>
  );
}

export default Stars