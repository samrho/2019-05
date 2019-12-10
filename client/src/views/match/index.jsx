import React from 'react';
import {
  Header,
  Footer,
  ViewTitle,
  DateTimeFilter,
  AreaFilter,
} from '../../components/common';
import {
  MatchList,
  MatchMap,
  MatchRegist,
  MatchRegistModal,
} from '../../components/match';
import { MatchProvider } from '../../contexts/Match/Context';
import { SideBar } from '../../components/common/';
import './index.scss';

const match = () => (
  <MatchProvider>
    <SideBar />
    <div className="match">
      <Header />
      <div className="grid-container">
        <ViewTitle title="match" />
        <AreaFilter />
        <DateTimeFilter />
        <div className="match-container">
          <div className="match-board">
            <MatchRegist />
            <MatchList />
          </div>
          <MatchMap />
        </div>
      </div>
      <Footer />
      <MatchRegistModal />
    </div>
  </MatchProvider>
);

export default match;
