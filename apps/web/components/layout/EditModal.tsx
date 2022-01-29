import styled from "styled-components";

import { Polaroid } from "../editor/PolaroidHTML";
import { Options } from "../editor/Options";

// const Wrapper = styled.div`
//   z-index: 150;

//   display: flex;
//   flex-direction: column;

//   justify-content: center;
//   align-items: center;

//   position: absolute;

//   width: 100vw;
//   height: 100vh;
// `;

type Props = {
  setEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const EditModal = ({ setEditOpen }: Props) => {
  const closeModal = () => {
    setEditOpen(false);
  };

  return <Options close={closeModal} />;
};

export default EditModal;