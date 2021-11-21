import React, {useEffect, useState} from "react";
import CustomButton from '../../../components/button'
import "antd/dist/antd.css";
import styled from 'styled-components';
import {profileConfig} from "../configs/profile-config";
import CustomForm from "../../../components/form";
import photo from "../../../icons/avatar.png";
import CustomAvatar from "../../../components/avatar";
import { UserOutlined } from '@ant-design/icons';
import { Row, Col, Divider } from 'antd';
import Input from "../../../components/input";
import {InputNumber} from "antd";
import CustomFormItem from "../../../components/form-item";

interface InfoItem {
    email: string;
    name: string;
    phone: string;
    username: string;
    website: string;
}

interface ProfileProps {
    infos: InfoItem;
    modalIsVisible: boolean;
    infoLoading: boolean;
    showModal: () => void;
    hideModal: () => void;
    getInfo: () => void;
}

const ProfileContainer = styled.div
    `
    display: grid;
`
;

const Profile = (props: ProfileProps) => {

    const {
        infos,
        modalIsVisible,
        infoLoading,
        showModal,
        hideModal,
        getInfo
    } = props;

    useEffect(() => {
        getInfo();
    }, [getInfo]);


    const [componentSize, setComponentSize] = useState('default');

    const onFormLayoutChange = ({size}:{size: any}) => {
        setComponentSize(size);
    };
    const onChange = ({e}:{e:any}) => {
        console.log(e);
    };

    const sharedProps = {
        labelCol: {span: 4,},
    wrapperCol: {span: 14,},
    layout: 'horizontal',
    initialValues: {size: componentSize,},
    onValuesChange: {onFormLayoutChange},
    size: {componentSize}
    };

    return (
        <ProfileContainer>
            <Divider orientation="center">Profile</Divider>
            <Row>
                <Col span={20} push={1}>
                    <CustomForm {...sharedProps}
                    >
                        <CustomFormItem label="Name">
                            <Input/>
                        </CustomFormItem>
                        <CustomFormItem label="Surname">
                            <Input />
                        </CustomFormItem>
                        <CustomFormItem label="InputNumber">
                            <InputNumber />
                        </CustomFormItem>
                    </CustomForm>
                    <CustomButton
                        type="primary"
                        onClick = {showModal}
                    >{profileConfig.buttonText}
                    </CustomButton>
                </Col>
                <Col span={1} pull = {2}>
                    <CustomAvatar src={photo} icon={<UserOutlined />} shape={"square"} size={200} />
                </Col>
            </Row>
        </ProfileContainer>
    );
}

export default Profile;