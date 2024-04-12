import Beer from "./Beer";

function Beers({ list }) {
  if (list)
    return (
      <>
        <h3>Beers</h3>
        <div className="accordion" id="beersList" data-testid="beersList">
          {list.map((item) => (
            <Beer {...item} />
          ))}
        </div>
      </>
    );
}

export default Beers;
