import React from 'react'
import s from './Tabs.module.css'
import clsx from 'clsx';

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <>
      <div className={s.tabs}>
        <button 
        className={clsx(s.tab, activeTab === "features" && s.active)} onClick={() => setActiveTab("features")}>
          Features
        </button>
        <button
          className={clsx(s.tab, activeTab === "reviews" && s.active)}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>
      <hr className={s.divider} />
    </>
  );
};

export default Tabs