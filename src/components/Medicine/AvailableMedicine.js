import { useEffect, useState } from 'react';

import classes from './AvailableMedicine.module.css';
import MedicineItem from './MedicineItem/MedicineItem';
import Card from '../UI/Card';


  const AvailableMedicine =()=>{
    const [medicine, setMedicine]=useState([]);
    const [isLoading, setIsLoading] =useState(true);
    const [isError, setIsError] =useState();

    useEffect(()=>{
      const fetchMedicine = async ()=>{
        
        const response = await fetch('https://medicinedatamart-default-rtdb.firebaseio.com/medicine.json');
        
        if(!response.ok){
          throw new Error('something went wrong in fetch request');
        }
        const responseData = await response.json();

        const loadedMedicine = [];
        for (const key in responseData){
          loadedMedicine.push({
            id:key,
            name: responseData[key].name,
            description : responseData[key].description,
            price: responseData[key].price
          });
        }
        setMedicine(loadedMedicine);
        setIsLoading(false);
      };
     
      fetchMedicine().catch((error) => {
        setIsLoading(false);
       setIsError(error.message);
      });
      
    },[]);

    if (isLoading){
      return <section className={classes.medicineloading}>
        <p>....Loading</p>
      </section>
    }

    if (isError){
      return <section className={classes.medicineerror}>
        <p>{isError}</p>
        </section>
    }

      const medicineList = medicine.map(medicine => (
      <MedicineItem 
        id={medicine.id}
        key={medicine.id} 
        name={medicine.name} 
        description={medicine.description}
        price={medicine.price}
        />
        ));

      return(
          <section className={classes.medicine}>
              <Card>
              <ul>{medicineList}</ul>
              </Card>
          </section>
      );
  }

  export default AvailableMedicine;