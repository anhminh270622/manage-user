import styled from 'styled-components';
import { Button } from 'antd';

const getButtonBackgroundColor = (type) => {
    switch (type) {
        case 'delete':
            return 'var(--background-button-delete)';
        case 'edit':
            return 'var(--background-button-edit)';
        case 'add':
            return 'var(--background-button-add)';
        default:
            return 'var(--background-button)'; // Màu mặc định
    }
};

export const ButtonStyled = styled(Button)`
  font-weight: bold;
  border: none;
  color: var(--color-white);
  background-color: ${({ type }) => getButtonBackgroundColor(type)};

  &:hover { 
    background-color: ${({ type }) => getButtonBackgroundColor(type)} !important;
    opacity: 0.7;
  }
  
`;


