interface Button {
  type: ButtonTypes;
  color: string;
}

interface ButtonNormal extends Button {
  text: string;
  onClick: Function;
}

interface ButtonIcon extends Button {
  icon: string;
  onClick: Function;
}

interface TextIconButton extends Button {
  text: string;
  icon: string;
  onClick: Function;
}

const Popup = ({ ...props }): JSX.Element => {
  return <></>;
};

export default Popup;
