import styled from "@emotion/styled";
import PropTypes from "prop-types";

const PrimaryParagraph = styled.p`
  cursor: pointer;
  text-align: center;
  border: solid 1px black;
  color: ${(props) => props.theme.colors[props.type]};
  background: ${(props) => props.theme.colors.background};
`;

function Paragraph(props) {
  return <PrimaryParagraph onClick={() => alert("hihi")} {...props} />;
}

Paragraph.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary", "toto"]),
  onClick: PropTypes.func,
};

Paragraph.defaultProps = {
  type: "primary",
  onClick: () => alert("you clicked me"),
};

export default Paragraph;
