
import React from 'react';
import '../index.css';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;



const nav_labels = {
    '1': 'Home',
    '2': 'Start a Dinner',
    '3': 'Search', 
}
const subnav_labels = {
    '1': 'Profile',
    '2': 'Manage Events', 
    '3': 'Social Media', 
}
const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: nav_labels[key],
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: subnav_labels[key],
    children: new Array(3).fill(null).map((_, j) => {
      const subKey = index * 3 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

const HomePage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={items1} />
      </Header>
      <Content
        style={{
          padding: '0 50px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          {/* <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item> */}
        </Breadcrumb>
        <Layout
          style={{
            padding: '24px 0',
            background: colorBgContainer,
          }}
        >
          <Sider
            style={{
              background: colorBgContainer,
            }}
            width={200}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{
                height: '100%',
              }}
              items={items2}
            />
          </Sider>
          <Content
            style={{
              padding: '0 24px',
              minHeight: 280,
            }}
          >
            <h3>Name: </h3>
          </Content>
        </Layout>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default HomePage;





// function HomePage() {


    // // define handlers
    // const handleLogin = (event) => {
    //     console.log('Login successfully~');
    // }


    // const handleSignup = (event) => {
    //     console.log('Sign up successfully~');
    // }


    // // return page:
    // return (
    //     <div>
    //         <h1>Welcome to our website</h1>
    //         <button onClick={handleLogin}>Login</button>
    //         <button onClick={handleSignup}>Sign Up</button>
    //     </div>
    // )
// }

// export default HomePage;













