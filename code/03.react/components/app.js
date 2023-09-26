import navValues from '@/helpers/navValues';
import Banner from './banner';
import React, { useCallback, useState } from "react";
import ComponentPicker from './componentPicker';

const navigationContext = React.createContext(navValues.home);

const App = () => {

    const navigate = useCallback((navTo, params) => {
        setNav({ current: navTo, params, navigate})
    }, []);
    
    const [nav, setNav] = useState({ current: navValues.home, navigate});

    return (
        <navigationContext.Provider value={nav}>
            <Banner>
                <div>Providing houses all over the world.</div>
            </Banner>
            <ComponentPicker currentNavigation={nav.current} />            
        </navigationContext.Provider>
    );
}

export { navigationContext };
export default App;