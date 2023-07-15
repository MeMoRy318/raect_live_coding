import React, {useContext, useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carsService} from "../../services/carsService";
import {CarContext} from "../../hok/CarContext";

const CarForm = () => {

    const {register,handleSubmit,setValue,reset,formState:{errors}} = useForm()
    const {car,setCar} = useContext(CarContext)


    useEffect(()=>{
        if (car){
            setValue('brand', car.brand, { shouldDirty: true })
            setValue('year', car.year, { shouldDirty: true })
            setValue('price', car.price, { shouldDirty: true })
        }
    },[car])

    const submit = async (data) => {
     const response = await carsService.createCar(data)
        reset()
    }

    const update = async (data) =>{
        console.log(data)
       const {data:_data} = await carsService.updateCar(car.id,data)

        await car.setCars(prew => {
            console.log(prew)
            const index = prew.findIndex(value => value.id === car.id);
            prew.splice(index,1,_data)
            return prew
        })




        reset()
        setCar(false)
    }

    return (
        <form onSubmit={handleSubmit(!car ?  submit : update) }>
            <label>
                <input type="text" placeholder='brand' {...register('brand')}/>
            </label>
            <br/>
            <label>
                <input type="number"  placeholder='year' {...register('year',{max:new Date().getFullYear(), min:1939, valueAsNumber:true})}/>
                {errors?.year && <span>asdasdasd</span>}
            </label>
            <br/>
            <label>
                <input type="number"  placeholder='price' {...register('price')}/>
                {errors?.year && <span>{errors?.year?.message}</span>}
            </label>
            <br/>
            <button> {car ? 'update': "create"} </button>
        </form>
    );
};

export {CarForm};
