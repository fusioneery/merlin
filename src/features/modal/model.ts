import {createEvent, createStore, createApi} from 'effector';

export const addOption = createEvent('SELECTOR/ADD_OPTION');
export const chooseOption = createEvent('SELECTOR/CHOOSE_OPTION');
export const refillOptions = createEvent('SELECTOR/REFILL_OPTIONS');
export const openAddOptionDialog = createEvent('OPTION_DIALOG/OPEN');
export const closeAddOptionDialog = createEvent('OPTION_DIALOG/CLOSE');
export const addOptionDialog = createStore(false)
  .on(openAddOptionDialog, () => true)
  .on(closeAddOptionDialog, () => false);
export const optionsStore = createStore([])
  //@ts-ignore
  .on(addOption, (store, opt) => [...store, opt])
  .on(chooseOption, (store, chosenOpt) => {
    let clonedOptions = store.slice();
    let foundOption = clonedOptions.find(opt => opt.val === chosenOpt.val);
    if (foundOption) {
      foundOption.active = true;
      return clonedOptions;
    } else {
      console.error('cant find option with value: ', chosenOpt.val);
    }
  })
  .on(refillOptions, (_, opts) => opts);
optionsStore.watch(state => console.warn(state));
