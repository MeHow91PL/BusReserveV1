import Rozp from './consts/rozpoznania';

export const historiaRozpoznan = store => next => action => {
    console.log('BEFORE middleware:', store.getState());
    console.log('action:', action);
    let result = next(action);
    console.log('AFTER middleware:', store.getState());

    return result;
}