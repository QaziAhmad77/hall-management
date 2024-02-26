import React from "react";
import img1 from "../../assets/images/Img - Avatar photo for JanJ.png";
import ReactStars from "react-stars";
import img2 from "../../assets/images/Button - Save restaurant to favorites → SVG.png";
const Messages = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className=" w-[90%] mx-auto mt-32 ">
      <h1 className=" text-[21px] font-bold">
        See what locals rave about in Peshawar Bay Area
      </h1>
      <p className=" text-[#2D333F] text-[15px] font-normal pt-2 pb-12">
        From verified diners like you
      </p>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
        <div className=" shadow-lg rounded-md">
          <div className=" w-[90%] mx-auto">
            <div className=" flex items-center gap-2">
              <img src={img1} alt="" />
              <div>
                <h1 className=" text-[22px] font-medium">Jan J</h1>
                <p className=" text-[18px] font-normal">Subrina Hall</p>
              </div>
            </div>

            <div>
              <span className=" flex gap-4 items-center">
                {" "}
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  color2={"#ffd700"}
                />{" "}
                1492 reviews
              </span>
              <p className=" text-[15px] font-normal pt-3">
                Haven't been here for awhile, and they have gone waaay upscale.
                Perfect craft cocktails, impeccable AND friendly service, and
                the food was sublime. It was a lot more $$ than I expected to
                pay, but it was worth it for a special celebration.
              </p>
              <p className=" text-[#F39D12] text-[15px] font-normal pt-4">
                More Info
              </p>
            </div>
          </div>
          <div className=" flex items-center gap-16 bg-[#e8e8e8] rounded-md mt-3">
            <dir>
              <p className=" text-[13px] font-normal">
                $$$.Italian.MountainViews
              </p>
              <p className=" text-[15px] font-normal">Cuccina Venti</p>
            </dir>
            <img src={img2} alt="" />
          </div>
        </div>

        <div className=" shadow-lg rounded-md">
          <div className=" w-[90%] mx-auto">
            <div className=" flex items-center gap-2">
              <img src={img1} alt="" />
              <div>
                <h1 className=" text-[22px] font-medium">Jan J</h1>
                <p className=" text-[18px] font-normal">Subrina Hall</p>
              </div>
            </div>

            <div>
              <span className=" flex gap-4 items-center">
                {" "}
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  color2={"#ffd700"}
                />{" "}
                1492 reviews
              </span>
              <p className=" text-[15px] font-normal pt-3">
                Haven't been here for awhile, and they have gone waaay upscale.
                Perfect craft cocktails, impeccable AND friendly service, and
                the food was sublime. It was a lot more $$ than I expected to
                pay, but it was worth it for a special celebration.
              </p>
              <p className=" text-[#F39D12] text-[15px] font-normal pt-4">
                More Info
              </p>
            </div>
          </div>
          <div className=" flex items-center gap-16 bg-[#e8e8e8] rounded-md mt-3">
            <dir>
              <p className=" text-[13px] font-normal">
                $$$.Italian.MountainViews
              </p>
              <p className=" text-[15px] font-normal">Cuccina Venti</p>
            </dir>
            <img src={img2} alt="" />
          </div>
        </div>

        <div className=" shadow-lg rounded-md">
          <div className=" w-[90%] mx-auto">
            <div className=" flex items-center gap-2">
              <img src={img1} alt="" />
              <div>
                <h1 className=" text-[22px] font-medium">Jan J</h1>
                <p className=" text-[18px] font-normal">Subrina Hall</p>
              </div>
            </div>

            <div>
              <span className=" flex gap-4 items-center">
                {" "}
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  color2={"#ffd700"}
                />{" "}
                1492 reviews
              </span>
              <p className=" text-[15px] font-normal pt-3">
                Haven't been here for awhile, and they have gone waaay upscale.
                Perfect craft cocktails, impeccable AND friendly service, and
                the food was sublime. It was a lot more $$ than I expected to
                pay, but it was worth it for a special celebration.
              </p>
              <p className=" text-[#F39D12] text-[15px] font-normal pt-4">
                More Info
              </p>
            </div>
          </div>
          <div className=" flex items-center gap-16 bg-[#e8e8e8] rounded-md mt-3">
            <dir>
              <p className=" text-[13px] font-normal">
                $$$.Italian.MountainViews
              </p>
              <p className=" text-[15px] font-normal">Cuccina Venti</p>
            </dir>
            <img src={img2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
