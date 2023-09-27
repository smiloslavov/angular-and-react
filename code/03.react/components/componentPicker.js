import navValues from '@/helpers/navValues';
import HouseList from './houseList';
import House from './house';

const ComponentPicker = ({currentNavigation}) => {
    switch(currentNavigation) {
        case navValues.home:
            return <HouseList />;
        case navValues.house:
            return <House />;
        default:
            return (
                <h3>
                    No component navigation value for {currentNavigation}.
                </h3>
            );
    }
}

export default ComponentPicker;