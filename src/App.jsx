import { useState } from "react";
import star from "../images/icon-star.svg";
import thankyou from "../images/illustration-thank-you.svg";

function App() {
  const [isSubmited, setIsSubmited] = useState(false);
  const [clickedValue, setClickedValue] = useState(0);

  function handleSubmit() {
    clickedValue && setIsSubmited(true);
  }

  return (
    <div className="bg-VeryDarkBlue h-screen flex items-center justify-center font-overpass">
      {!isSubmited ? (
        <div>
          <div className="card">
            <div className="back-round">
              {" "}
              <img src={star} alt="star svg" />
            </div>{" "}
            <div className="text-White font-bold text-2xl">How did we do? </div>
            <p className="text-MediumGrey">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
            <div className="flex justify-around">
              <p className="starRating" onClick={() => setClickedValue(1)}>
                1
              </p>
              <p className="starRating" onClick={() => setClickedValue(2)}>
                2
              </p>
              <p className="starRating" onClick={() => setClickedValue(3)}>
                3
              </p>
              <p className="starRating" onClick={() => setClickedValue(4)}>
                4
              </p>
              <p className="starRating" onClick={() => setClickedValue(5)}>
                5
              </p>
            </div>
            <button onClick={handleSubmit} className="btn">
              Submit
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="card rounded-xl text-center ">
            <div className="flex justify-center">
              <img src={thankyou} alt="thank you illustration" />
            </div>
            <div className="text-Orange bg-gray-700 mx-auto w-fit p-2 px-4 rounded-3xl ">
              You selected {clickedValue} out of 5
            </div>

            <div className="text-White font-bold text-2xl">Thank you!</div>
            <p className="text-LightGrey">
              We appreciate you taking the time to give a rating. If you ever
              need more support, don’t hesitate to get in touch!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
