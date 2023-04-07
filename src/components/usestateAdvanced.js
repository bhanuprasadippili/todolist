import React, { useState } from "react";

function USESTATE() {

    // const details = {
    //     name : "KUMAR SAI",
    //     surName : "PEDIREDLA",
    //     age : 25,

    // }
    // const [data, setData] = useState(details);

    // const changeFirstname = ()=>{
    //     setData({
    //         ...data,
    //         name : "Vaidehi"
    //     });
    // }
    // const changeAge = () => {
    //     setData({
    //         ...data,
    //         age: 22
    //     })
    // }
    // const changeSurname = () => {
    //     setData({
    //         ...data,
    //         surName: "Yelisetty"
    //     })
    // }



    // const [firstName, setFirstName] = useState("Kumar Sai");
    // const changeFirstname = () => {
    //     setFirstName("Vaidehi");
    // }
    // const [age, setAge] = useState("25");
    // const changeAge = () => {
    //     setAge(22);
    // }
    // const [surName, setsurName] = useState("Pediredla");
    // const changeSurname = () => {
    //     setsurName("Yelisetty")
    // }

    const arr = [
        {
            id : "iewfvblewybv",
            name: "Bhanu Prasad",
            surName: "Ippili",
            age: 24,
            gender: "Male"
        },
        {
            id :"kbvalbvel",
            name: "Suryanarayana",
            surName: "Ippili",
            age: 50,
            gender: "Male"
        },
        {
            id :"htrsj",
            name: "Sarada",
            surName: "Ippili",
            age: 39,
            gender: "Female"
        }
    ]
    const [data, setData] = useState(arr);

    const deleteDetails = (id) => {

        const filterData = data.filter((e) =>{
            return e.id !== id;
        })
        setData(filterData);
        

     }


    return (
        <div>

            {
                data.map((e, index) => {

                    const { name, surName, age, gender, id } = e;

                    return (
                        <div key={index}>
                            <h1>Name : {name}</h1>
                            <h2>SurName : {surName}</h2>
                            <h3>Age : {age}</h3>
                            <h4>Gender : {gender}</h4>
                            <button onClick={ () => deleteDetails(id) }>Delete Details</button>
                        </div>
                    )


                })
            }





























            {/* <h1>Name : {data.name}</h1> */}

            {/* <button onClick={changeFirstname}>change</button> */}

            {/* <h1>Name : {firstName}</h1> */}

            {/* <h3>Surname : {data.surName}</h3> */}

            {/* <button onClick={changeSurname}>change</button> */}

            {/* <h1>Surname : {surName}</h1> */}

            {/* <h2>Age : {data.age}</h2> */}

            {/* <button onClick={changeAge}>change</button> */}

            {/* <h2>Age : {age}</h2> */}



        </div>
    )
}

export default USESTATE;