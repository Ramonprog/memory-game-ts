import { Container } from "./style";
import { GridItemType } from "../../types/GridItemType";
import Rabbit from "../../assets/rabbit.png";
import { items } from "../../data/items";

type Props = {
  item: GridItemType;
  onClick: () => void;
};

const GridItem = ({ item, onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      {!item.permanentShown && !item.shown && (
        <img src={Rabbit} alt="card coelho" />
      )}

      {(item.permanentShown || item.shown) && item.item !== null && (
        <img src={items[item.item].icon} alt="carta virada" />
      )}
    </Container>
  );
};

export default GridItem;
