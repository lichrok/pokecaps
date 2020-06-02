import { Dispatch } from 'redux';
import api from 'src/utils/api';
import {
  DATA_ABILITY_REQUEST,
  DATA_ABILITY_LOADED,
} from 'src/constants/abilities';
import { ResponseProps } from 'src/types';

export const abilityRequest = (abilityName: string) => ({
  abilityName,
  type: DATA_ABILITY_REQUEST,
});

export const abilityReceive = (response: ResponseProps) => ({
  type: DATA_ABILITY_LOADED,
  payload: response.data,
});

export const getAbilityData = (abilityName: string) => async (dispatch: Dispatch) => {
  dispatch(abilityRequest(abilityName));

  return await api
    .get(`ability/${abilityName}`)
    .then(response => dispatch(abilityReceive(response)))
    .catch(error => console.error(error));
};
