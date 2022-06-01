import { BaseSyntheticEvent, useState } from "react";
import styled from "styled-components";
import { lightBlack, lightWhite, mainTeal } from "../../../styles/colors";
import { StyledForm } from "../../../styles/global";
import { globalRadius } from "../../../styles/variables";
import NormalButton from "../../Buttons/NormalButton/NormalButton";

const HiddenLabel = styled.label`
  display: none;
`;

const inputPadding = 15;

const Wrapper = styled.div`
  margin: ${inputPadding}px 0 ${inputPadding / 2}px;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
`;

const InputCheto = styled.input`
  position: absolute;
  inset: 0;
  font-weight: 600;
  padding: 10px;
  border-radius: ${globalRadius};
  outline: none;
  border: none;
  background-color: ${lightBlack};
  color: white;
  font-family: inherit;

  &::placeholder {
    color: ${lightWhite};
  }
`;

const RoomIdForm = () => {
  const [roomId, setRoomId] = useState("");
  const [validRoomId, setValidRoomId] = useState(false);

  const onRoomIdChange = (event: BaseSyntheticEvent) => {
    const roomId: string = event.target.value;

    if (roomId.length <= 4) {
      setRoomId(event.target.value.toUpperCase());

      if (roomId.length < 4) {
        setValidRoomId(false);
      } else {
        setValidRoomId(true);
      }
    }
  };

  const onJoinClick = () => {};

  return (
    <StyledForm>
      <Wrapper>
        <HiddenLabel htmlFor="roomId">Room Id</HiddenLabel>
        <InputCheto
          type="text"
          name="roomId"
          id="roomId"
          autoComplete="off"
          placeholder="Room Id"
          value={roomId}
          onChange={onRoomIdChange}
        />
      </Wrapper>
      <NormalButton
        color={mainTeal}
        text="Join"
        isSubmit
        size={{ height: 30 }}
        onClick={onJoinClick}
        disabled={!validRoomId}
      />
    </StyledForm>
  );
};

export default RoomIdForm;
