import { Form} from 'antd';
import styled from 'styled-components';
import {FormItemInputProps} from "antd/lib/form/FormItemInput";


const CustomForm: React.FC<FormItemInputProps> = styled(Form)
    `
    width: 75%;
    border: 2px solid black;
    border-radius: 3px;
`
;

export default CustomForm;