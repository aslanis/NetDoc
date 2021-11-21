import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button';
import styled from 'styled-components';

const CustomButton: React.FC<ButtonProps> = styled(Button)
`
    width: 200px;
    border: 1px solid black;
    border-radius: 3px;
    margin-top: 6px;
`
;

export default CustomButton;