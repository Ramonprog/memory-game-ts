import { useEffect, useState } from "react";
import * as C from "./App.styles";
import ReturnIcon from "./assets/returnIcon.svg";
import Button from "./components/Button";
import InfoItem from "./components/IndoItem";
import { items } from "./data/items";
import { GridItemType } from "./types/GridItemType";
import GridItem from "./components/GridItem";
import { formatTime } from "./helpers/formatTime";

const App = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [shownCount, setShownCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);

  const reset = () => {
    setTimeElapsed(0);
    setMoveCount(0);
    setShownCount(0);
  };

  const createGrid = () => {
    let tempGrid: GridItemType[] = [];

    for (let i = 0; i < items.length * 2; i++) {
      tempGrid.push({
        item: null,
        shown: false,
        permanentShown: false,
      });
    }

    for (let w = 0; w < 2; w++) {
      for (let i = 0; i < items.length; i++) {
        let pos = -1;

        while (pos < 0 || tempGrid[pos].item !== null) {
          pos = Math.floor(Math.random() * (items.length * 2));
        }

        tempGrid[pos].item = i;
      }
    }

    setGridItems(tempGrid);

    setPlaying(true);
  };

  const resetAndCreateGrid = () => {
    reset();
    createGrid();
  };

  const handleItemClick = (index: number) => {
    if (playing && index !== null && shownCount < 2) {
      let tempGrid = [...gridItems];
      if (
        tempGrid[index].permanentShown === false &&
        tempGrid[index].shown === false
      ) {
        tempGrid[index].shown = true;
        console.log(tempGrid[index]);
        setShownCount((prev) => prev + 1);
      }

      setGridItems(tempGrid);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (playing) {
        setTimeElapsed(timeElapsed + 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [playing, timeElapsed]);

  useEffect(() => {
    resetAndCreateGrid();
  }, []);

  useEffect(() => {
    if (shownCount === 2) {
      setMoveCount((prev) => prev + 1);
      let opned = gridItems.filter((item) => item.shown === true);
      let tmpGrid = [...gridItems];
      if (opned.length === 2) {
        if (opned[0].item === opned[1].item) {
          for (let i in tmpGrid) {
            if (tmpGrid[i].shown) {
              tmpGrid[i].permanentShown = true;
              tmpGrid[i].shown = false;
            }
          }
          setGridItems(tmpGrid);
          setShownCount(0);
        } else {
          for (let i in tmpGrid) {
            if (tmpGrid[i].shown) {
              setTimeout(() => {
                tmpGrid[i].shown = false;
              }, 800);
            }
          }
          setGridItems(tmpGrid);
          setShownCount(0);
        }
      }
    }
  }, [shownCount, gridItems]);

  useEffect(() => {
    if (
      moveCount > 0 &&
      gridItems.every((item) => item.permanentShown === true)
    ) {
      setPlaying(false);
    }
  }, [moveCount]);

  return (
    <C.Container>
      <div className="info">
        <div className="logo">
          <a href="">
            <h1>
              Dev<span>Memory</span>
            </h1>
          </a>
        </div>
        <div className="info-area">
          <InfoItem label="Tempo" value={formatTime(timeElapsed)} />
          <InfoItem label="Movimentos" value={moveCount.toString()} />
        </div>

        <Button
          label="Reiniciar"
          icon={ReturnIcon}
          onClick={resetAndCreateGrid}
        />
      </div>
      <div className="grid-area">
        <div className="grid">
          {gridItems.map((item, index) => (
            <GridItem
              key={index}
              item={item}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </div>
    </C.Container>
  );
};

export default App;
