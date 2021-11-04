import { all } from "redux-saga/effects"
import  storageWatcher  from "../modules/storage/sagas";

export function* globalWatcher() {
    yield all([storageWatcher()])
}