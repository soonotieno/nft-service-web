import React from "react";
import { Input, Menu } from "antd"; // Input, Menu
import "./AppLayout.scss"
import StoryList from "./StoryList";
import SuggestionList from "./SuggestionList";
import LogoImage from "assets/logo.png";


function AppLayout({children}){
    const items = [
        { label: '메뉴1', key: 'item-1' }, // remember to pass the key prop
        { label: '메뉴2', key: 'item-2' }, // which is required
        {
          label: '메뉴3',
          key: 'item-3',
          children: [{ label: 'item 3', key: 'submenu-item-1' }],
        },
      ]

    return (
        <div className="app">
            <div className="header">
                <h1 className="page-title">
                    <img src={LogoImage} alt="logo" />
                </h1>
                <div className="search"><Input.Search placeholder="검색어 입력" /></div>
                <div className="topnav">
                    <Menu mode = "horizontal" items={items} />
                </div>
            </div>
            <div className="contents">{children}</div>
            <div className="sidebar">
                <StoryList style={{ marginBottom: "1rem"}} />
                <SuggestionList />
            </div>
            <div className="footer">
                &copy; 2022. Ask, We Are The World, WATO
            </div>
        </div>
    );
}

export default AppLayout;