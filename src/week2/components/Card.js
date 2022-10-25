import styled from "styled-components";
import IDK from "/Users/romuru/Desktop/project/react-study/src/week2/image/IDK.png";

function Card(props) {
  const CardContainer = styled.div`
    width: 20rem;
    height: 200px;
    margin: 10px;
    background-color: ${(props) => props.theme.pointColor1};
    border-radius: 10px;
  `;

  const ImgContainer = styled.div`
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
  `;

  const Image = styled.img`
    width: 220px;
    height: 160px;
    margin-top: -10px;
  `;

  const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    width: auto;
    height: auto;
  `;

  const Text = styled.span`
    font-size: 30px;
    font-weight: 400;
    color: ${(props) => props.theme.textColor};
  `;

  return (
    <CardContainer>
      <ImgContainer>
        <Image src={IDK} />
      </ImgContainer>
      <TextContainer>
        <Text>{props.item}</Text>
      </TextContainer>
    </CardContainer>
  );
}

export default Card;
