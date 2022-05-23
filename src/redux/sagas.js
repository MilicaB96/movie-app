import { all } from "redux-saga/effects";
import  watchAuthentication from "./Sagas/auth";

export default function* sagas(){
    yield all([watchAuthentication()])
}