import {combineReducers} from 'redux'
import Login from './login';
import Nomor from './nomor';
import Nama from './nama';

export default combineReducers({
    login : Login,
    nomor : Nomor,
    nama : Nama

});

