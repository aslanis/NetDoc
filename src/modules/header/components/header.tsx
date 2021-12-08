import React, {useEffect} from "react";
import CustomButton from '../../../components/button'
import "antd/dist/antd.css";
import styled from 'styled-components';
import {Button} from "antd";
import { UserOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';


interface HeaderProps {
    infoLoading: boolean;
}

const HeaderContainer = styled.div
    `
    display: grid;
`
;

export const Header = (props: HeaderProps) => {

    useEffect(() => {
        console.log('useEffect')
    }, []);

    return (
        <HeaderContainer>
            <br/>
            <Row>
                <Col span={20} push={3} flex={3} >
                        NetDoc
                </Col>
                <Col flex ={7}>
                </Col>
            </Row>
            <Row>
                <Col span={20} push={2} flex={3}>
                    <Row>
                        <Col span={5} push={1}  flex={8} >
                            <CustomButton
                                type="primary"
                            >Хранилище
                            </CustomButton>
                        </Col>
                        <Col push={1} flex={1}>
                            <CustomButton
                                type="primary"
                            >Чат
                            </CustomButton>
                        </Col>
                        <Col  flex={5}>
                            <CustomButton
                                type="primary"
                            >Календарь
                            </CustomButton>
                        </Col>
                    </Row>
                </Col>
                <Col flex={4}>
                </Col>
                <Col flex={2}>
                    <Row >
                        <Col span={10} push={4} >
                            Личный кабинет
                        </Col>
                        <Col span={3} push={2} >
                            <Button
                                type="primary" shape="circle" size="large"
                            ><UserOutlined />
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </HeaderContainer>
    );
}