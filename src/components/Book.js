import styled from "styled-components";

function Book(props) {
  const Container = styled.div`
    display: flex;
    border: 1px black solid;
    flex-direction: column;
  `;
  const Title = styled.div`
    font-size: 24px;
    font-weight: 500;
    margin-left: 15px;
    margin-top: 30px;
  `;
  const Description = styled.span`
    margin-top: 20px;
    font-size: 18px;
    margin-left: 15px;
    margin-bottom: 5px;
  `;
  return (
    <Container>
      <Title className="title">이 책의 이름은 {props.name}이고,</Title>
      <Description className="totalPage">
        총 {props.totalPage} 페이지 입니다.
      </Description>
    </Container>
  );
}

export default Book;
