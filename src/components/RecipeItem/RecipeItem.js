import styled from "styled-components";

export const DifficultyBox = styled.div`
  padding: 15px;
`;

export const DifficultyItem = styled.li`
  padding: 5px 5px;
  font-size: 16px;
  border-radius: 5px;
`;

export const Item = styled.li`
  border: ${(props) =>
      props.$difficulty === 3
        ? "red"
        : props.$difficulty === 1
        ? "yellow"
        : props.$difficulty === 0
        ? "green"
        : ""}
    3px solid;
  border-radius: 20px;
  padding: 30px 30px;
  width: 300px;



  ${DifficultyItem}:nth-child(${(props) =>
    props.$difficulty === 3
      ? "3"
      : props.$difficulty === 1
      ? "2"
      : props.$difficulty === 0
      ? "1"
      : ""}) {
    background-color:  ${(props) =>
      props.$difficulty === 3
        ? "red"
        : props.$difficulty === 1
        ? "yellow"
        : props.$difficulty === 0
        ? "green"
        : ""};
  }
`;

export const Title = styled.h3`
  font-size: 20px;
  text-align: center;
  margin-bottom: 30px;
`;

export const ParamList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const ParamItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const ParamText = styled.p`
  font-size: 14px;
  text-align: center;
  gap: 5px;
`;

export const ParamSpan = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

export const DifficultyTitle = styled.h4`
  font-size: 16px;
  text-align: center;
  margin-bottom: 10px;
`;

export const DifficultyList = styled.ul`
  display: flex;
  justify-content: space-between;
`;
