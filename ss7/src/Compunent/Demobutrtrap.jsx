import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd'


function Demobutrtrap() {
  const { Header, Content, Footer } = Layout;
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { Meta } = Card;
  return (
    <div>
      <Layout className="layout">
        <Header
            style={{
                display: "flex",
                alignItems: "center",
            }}
            >
            <div className="demo-logo" />
            <h3 style={{color:"white"}}>home</h3>
            <Menu
                theme="dark"
                mode="horizontal"
            />  
                  
        </Header>
        <Content
          style={{
            padding: "0 50px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-content"
            style={{
                background: colorBgContainer,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around"
                
            }}
          >
            <Card
                style={{ width: 300  }}
                cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
                }
                actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
                ]}
            >
                <Meta
                avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                title="Card title"
                description="This is the description"
                />
            </Card>
            <Card
                style={{ width: 300 }}
                cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
                }
                actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
                ]}
            >
                <Meta
                avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                title="Card title"
                description="This is the description"
                />
            </Card>
            <Card
                style={{ width: 300 }}
                cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
                }
                actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
                ]}
            >
                <Meta
                avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                title="Card title"
                description="This is the description"
                />
            </Card>
            <Card
                style={{ width: 300 }}
                cover={
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
                }
                actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
                ]}
            >
                <Meta
                avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                title="Card title"
                description="This is the description"
                />
            </Card>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
      
    </div>
  );
}

export default Demobutrtrap;
