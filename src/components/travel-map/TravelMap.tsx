import { REGIONS } from './defines';
import { Region, RegionStatuses } from './types';
import { createLocalStore } from './hooks';

import './TravelMap.scss';

function TravelMap() {
    const [statuses, setStatuses] = createLocalStore<RegionStatuses>('travel-map-statuses', {});

    const handleRegionClick = (region: Region) => {
        switch (statuses()[region.name]) {
            case undefined: {
                setStatuses({
                    ...statuses(),
                    [region.name]: 'passing',
                });
                break;
            }
            case 'passing': {
                setStatuses({
                    ...statuses(),
                    [region.name]: 'visited',
                });
                break;
            }
            case 'visited': {
                setStatuses({
                    ...statuses(),
                    [region.name]: undefined,
                });
                break;
            }
        }
    };

    return (
        <svg class="map" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680.489 386.6169">
            {REGIONS.map((region) => (
                <path id={region.name} class={statuses()[region.name]} d={region.path} transform="translate(-1.0437 -8.2168)"
                    onClick={() => handleRegionClick(region)} />
            ))}
        </svg>
    );
}

export default TravelMap;