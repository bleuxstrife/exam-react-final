import styled from 'styled-components';
import { Link } from 'react-router-dom';
import baseColor from '../../utils/base-color';

const H2Label = styled.h2`
    text-align: ${(props) => props.textAlign};
    color: ${(props) => props.color};
`;

H2Label.defaultProps = {
  color: baseColor.onBackground,
  textAlign: 'left',
};

const PLabel = styled.p`
    text-align: ${(props) => props.textAlign};
    color: ${(props) => props.color};
    flex: ${(props) => props.flex};
    font-size: ${(props) => props.fontSize};
    font-weight" ${(props) => props.fontWeight};
`;

PLabel.defaultProps = {
  color: baseColor.onBackground,
  textAlign: 'left',
  flex: 'none',
  fontSize: '16px',
  fontWeight: 'normal',
};

const CategoryLabel = styled.p`
    border: 1px solid ${(props) => props.borderColor};
    border-radius: 4px;
    color: ${(props) => props.textColor};
    display: inline-block;
    font-size: 12px;
    padding: 4px 8px
`;

CategoryLabel.defaultProps = {
  borderColor: baseColor.onBackground,
  textColor: baseColor.onBackground,
};

const CustomLink = styled(Link)`
    text-decoration: ${(props) => props.textDecoration};
    color: ${(props) => props.textColor}
`;

CustomLink.defaultProps = {
  textDecoration: 'underline',
  textColor: baseColor.onBackground,
};

export {
  H2Label,
  PLabel,
  CategoryLabel,
  CustomLink,
};
