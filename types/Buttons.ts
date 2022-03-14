import { BaseSyntheticEvent } from "react";

interface Button {
  color: string;
}

export interface ButtonNormal extends Button {
  text: string;
  onClick(event: BaseSyntheticEvent): void;
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
