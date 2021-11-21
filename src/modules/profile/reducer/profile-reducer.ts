import {
    SHOW_MODAL,
    HIDE_MODAL,
    GET_INFO_SUCCESS,
    GET_INFO_FAILURE,
    GET_INFO_REQUESTED,
    ProfileActionTypes
} from '../actions/profile-actions';

export interface ProfileState {
    modalIsVisible: boolean;
    infoLoading: boolean;
    infos: any;
    error: string;
}

const initialState: ProfileState = {
    error: "",
    modalIsVisible: false,
    infos: [],
    infoLoading: false
};

const profileReducer = (
  state = initialState,
  action: ProfileActionTypes
) => {
  switch (action.type) {
      case SHOW_MODAL:
          return {
              ...state,
              modalIsVisible: true
          };
      case HIDE_MODAL: {
          return {
              ...state,
              modalIsVisible: false
          };
      }
      case GET_INFO_SUCCESS: {
        return {
            ...state,
            infos: action.payload,
            infoLoading: false
          };
      }
      case GET_INFO_REQUESTED: {
        return {
            ...state,
            infoLoading: true
          };
      }
      case GET_INFO_FAILURE: {
        return {
            ...state,
            error: action.payload,
            infoLoading: false
          };
      }
      default:
          return state;
    }
};

export default profileReducer;