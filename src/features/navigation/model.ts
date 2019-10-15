import {createStore, createEvent, createStoreObject} from 'effector';

export const showModalSelector = createEvent('MODAL_SELECTOR/SHOW');
export const hideModalSelector = createEvent('MODAL_SELECTOR/HIDE');
export const setPositionModalSelector = createEvent('MODAL_SELECTOR/SET_POSITION');

interface Position {
  x: number;
  y: number;
}
export const modalSelectorCoordinates = createStore({x: 0, y: 0}).on(
  setPositionModalSelector,
  (state, payload) => payload,
);
modalSelectorCoordinates.watch(state => console.warn(state.x, state.y));
export const modalSelectorIsVisible = createStore(false)
  .on(showModalSelector, () => true)
  .on(hideModalSelector, () => false);
modalSelectorIsVisible.watch(state => console.warn(state));
export const modalSelectorStore = createStoreObject({modalSelectorCoordinates, modalSelectorIsVisible});
