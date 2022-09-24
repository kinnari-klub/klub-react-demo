import React, { useEffect, useState } from "react";

function Slides(props) {
  const [index, setIndex] = useState(0);
  const [slideData, setSlideData] = useState(props.slides[index]);

  const prev = () => {
    setIndex(index - 1);
  };

  const next = () => {
    setIndex(index + 1);
  };

  const restart = () => {
    if (index > 0) {
      setIndex(0);
    }
  };

  useEffect(() => {
    setSlideData(props.slides[index]);
  }, [index]);

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          disabled={index == 0}
          onClick={restart}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          onClick={prev}
          disabled={index == 0}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          onClick={next}
          disabled={index === props.slides.length - 1}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slideData.title}</h1>
        <p data-testid="text">{slideData.text}</p>
      </div>
    </div>
  );
}

export default Slides;
