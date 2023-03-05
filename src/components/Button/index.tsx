import { Container } from "./styles";

type Props = {
  label: string;
  icon?: any;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

const Button = ({ label, icon, onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      {icon && (
        <div className="icon-area">
          <img src={icon} alt="icone" />
        </div>
      )}

      <div className="label"> {label} </div>
    </Container>
  );
};

export default Button;
