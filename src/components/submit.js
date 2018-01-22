import { SubmissionError } from 'redux-form';

const sleep = ms => new Promise(resolve => setTimeout(resolve,ms));

function submit(values){
    return sleep(1000).then(()=>{
        //simulate
        if(!["michu"].includes(values.imie))
        {
            throw new SubmissionError({
                imie: 'Tylko michu może się tu logować!',
                _error: 'Złe imię!'
            })
        }
        else
        {
            console.log("Values", values);
            window.alert(`Zalogowałeś się jako ${values.imie}`);
        }
    })
}

export default submit;