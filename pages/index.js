import Head from "next/head";
import styles from "../styles/Home.module.css";
import styled from "@emotion/styled";

const Paragraph = styled.p`
  color: ${(props) => props.theme.colors[props.type]};
`;

export default function Home() {
  return (
    <div>
      <h1>Index</h1>
      <Paragraph type="primary">toto</Paragraph>
    </div>
  );
}
