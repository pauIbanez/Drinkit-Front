import ButtonTypes from "./ButtonTypes";

interface Button {
  type: ButtonTypes;
  color: string;
}

export interface ButtonNormal extends Button {
  text: string;
  onClick: Function;
}

export interface ButtonIcon extends Button {
  icon: string;
  onClick: Function;
}

export interface TextIconButton extends Button {
  text: string;
  icon: string;
  onClick: Function;
}

export type AnyButton = ButtonNormal | ButtonIcon | TextIconButton;
