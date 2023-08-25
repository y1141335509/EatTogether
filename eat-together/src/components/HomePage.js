
import React, { Component } from 'react';
import '../index.css';
import { useState } from "react";
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Switch, theme } from 'antd';
import UserProfile from './UserProfile';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FoodPreference from './FoodPreference';


const { Header, Content, Footer, Sider } = Layout;


// Define the Main Navigation Page names (on the header bar)
const nav_labels = {
    '1': 'Home',
    '2': 'Start a Dinner',
    '3': 'Search', 
}
// Assign the Main Navigation Page names
const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: nav_labels[key],
}));


// Define the Sub Navigation Page names (on the left-side bar)
const subnav_labels = {
    '1': 'Profile',
    '2': 'Manage Events', 
    '3': 'Social Media', 
}
const subnav_profile_options = {
    '1': 'User Profile',
    '2': 'Food Preference',
    '3': 'Saved Restaurants',
}

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: key,
    icon: React.createElement(icon),
    label: subnav_labels[key],
    // label: (
    //     <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
    //         {subnav_labels[key]}
    //     </a>
    // ),
    component: <UserProfile />, 
  };
});


const items = [{
        key: '1',
        icon: React.createElement(UserOutlined), 
        label: (
                <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                    {subnav_labels['1']}
                </a>
            ),
    },     
    {
        key: '2',
        icon: React.createElement(LaptopOutlined), 
        label: (
                <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                    {subnav_labels['2']}
                </a>
            ),
    },     
    {
        key: '3',
        icon: React.createElement(NotificationOutlined), 
        label: (
                <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                    {subnav_labels['3']}
                </a>
            ),
    }
];


// Define the functional component
const HomePage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [activeMenuItem, setActiveMenuItem] = useState('1');


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
              onClick={(e) => setActiveMenuItem(e.key)}
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{
                height: '100%',
              }}
            //   items={items}
              items={items2}
            />
          </Sider>

          {/* Content on the right hand side of the main page */}
          <Content
            style={{
              padding: '0 24px',
              minHeight: 280,
            }}
          >
            
            {activeMenuItem === '1' && <UserProfile /> }
            {activeMenuItem === '2' && <FoodPreference /> }
            {/* {activeMenuItem === '3' && <SocialMedia /> } */}

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


















