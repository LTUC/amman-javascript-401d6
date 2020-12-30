'use strict';

const food = require('../models/food-collection');

// add supergoose to avoid test data saved into our DB
// supergoose is built using mongoose;
// require it and it will take of not saving into DB;

describe('Food Model', () => {

    it('can create() a new food item' , async ()=> {
        let obj = { name: 'test food 1', calories: 40, type: 'FRUIT' };
        food.create(obj).then(result => {
            console.log("result : ", result)
            //compare result obj with obj by name, calories, type
            Object.keys(obj).forEach( key => {
                expect(result[key]).toEqual(obj[key]);
            });
        });
    });

    
    // it('can get() a new food item' , async ()=> {
    //     const id = "5fec48467921c498828208b7";
    //     // const item = await food.get(id);
    //     // console.log("item : ", item);
    //     // expect(item._id).toEqual(id);
        
    //     let item = await food.get(id);
    //      console.log("item : ", item)
    //      expect(1).toEqual(1);
             
    // });

});


