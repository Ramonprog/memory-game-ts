import { Container } from "./styles";

type Props = {
  label: string;
  value: string;
};

const InfoItem = ({ label, value }: Props) => {
  return (
    <Container>
      <div className="label">{label}</div>

      <div className="value">{value}</div>
    </Container>
  );
};

export default InfoItem;
