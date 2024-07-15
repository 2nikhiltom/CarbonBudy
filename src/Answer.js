import { Tile, unstable__Slug as Slug } from "@carbon/react";

function Answer() {
  const slug = <Slug></Slug>;

  return (
    <div className="answer-wrapper">
      <Tile slug={slug} id="answer-1" className="answer-tile">
        {"Some Text"}
      </Tile>
    </div>
  );
}

export default Answer;
