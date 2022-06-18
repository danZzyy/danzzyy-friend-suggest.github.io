import './menu.css';
import React, {useState, useEffect} from 'react';

const Menu = function({tabsProp, selectEvent}) {
    const [tabs, setTabs] = useState(tabsProp);
    const [activeTab, setActiveTab] = useState(0);
    return (
        <nav>
            <ul>
                {
                    tabs.map((t, index)  =>  
                        (<li 
                        className={`tab ${index === activeTab ? 'active' : 'inactive'}`} 
                        onClick={
                            () => {
                                selectEvent(index);
                                setActiveTab(index);
                            }
                        }>{t}</li>)
                    )
                }
            </ul>
        </nav>
    )

}

export default Menu;