import { Fragment } from 'react';
import MedicineSummary from './MedicineSummary';
import AvailableMedicine from './AvailableMedicine';

const Medicine =() =>{

    return(
        <Fragment>
        <MedicineSummary />
        <AvailableMedicine />
        </Fragment>
    );
};

export default Medicine;