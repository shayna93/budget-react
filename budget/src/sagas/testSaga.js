import {delay, take, put} from 'redux-saga/effects';
export function* testSaga(){
    while(true){
        console.log("Starting saga");
    const state = yield take('TEST_MESSAGE');
    console.log("Finish sage function", state);
    }
}

export function* dispatchTest() {
    while(true) {
        yield delay(1000);
        yield put({type: 'TEST_MESSAGE', payload: 1000});
    }
}