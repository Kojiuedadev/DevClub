import styled from "styled-components";

export const Container = styled.div`
  background-color: #181f36;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  height: 100vh;
`;
export const TopBackground = styled.div`
  background: linear-gradient(to right, #fe7e5d, #7f3841);
  height: 30vh;
  width: 90vw;
  max-width: 800px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 500px;
`;
export const Title = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
`;
export const ContainerInputs = styled.div`
  display: flex;
  gap: 20px;
`;
export const Input = styled.input`
  border-radius: 10px;
  border: 1px solid #ccc;
  background-color: #fff;
  padding: 12px 20px;
  outline: none;
  width: 100%;
`;
export const InputLabel = styled.label`
  color: #fff;
  font-size: 12px;
  font-weight: 500;

  span {
    color: #bd5a4f;
    font-weight: bold;
  }
`;
export const Button = styled.button`
  border: none;
  background: linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%);
  font-size: 16px;
  color: #fff;
  padding: 16px 32px;
  width: fit-content;
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    background: linear-gradient(180deg, #ff6378 0%, #fe7e5d 100%);
    opacity: 0.8;
  }
  transition: background 0.3s ease;
  &:active {
    transform: scale(0.98);
    opacity: 0.9;
  }
`;
