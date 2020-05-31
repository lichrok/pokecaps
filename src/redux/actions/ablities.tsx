import { Dispatch } from 'redux';
import { DATA_ABILITY_REQUEST } from 'src/constants/abilities';
import api from 'src/utils/api';

export const getAbilityData = (abilityName: string) => async (dispatch: Dispatch) => {
  await api
    .get(`ability/${abilityName}`)
    .then(response => dispatch({
      type: DATA_ABILITY_REQUEST,
      payload: response.data,
    }))
    .catch(error => console.error(error));
};
