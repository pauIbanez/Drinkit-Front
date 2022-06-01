import { BaseSyntheticEvent, useState } from "react";
import styled from "styled-components";
import { lightBlack, lightWhite, mainTeal } from "../../../styles/colors";
import { globalRadius } from "../../../styles/variables";
import NormalButton from "../../Buttons/NormalButton/NormalButton";

const HiddenLabel = styled.label`
  display: none;
`;

const RoomIdFormElement = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 13px;
  margin-bottom: 20px;
`;

const Wrapper = styled.div`
  margin: 30px 0 6px;
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
    <RoomIdFormElement>
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
        size={{ height: 35 }}
        onClick={onJoinClick}
        disabled={!validRoomId}
      />
    </RoomIdFormElement>
  );
};

export default RoomIdForm;
