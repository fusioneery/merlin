import {createEvent, createStore, createEffect, createStoreObject} from 'effector';
import ImagePicker from 'react-native-image-picker';

const getImageFromPicker = type =>
  new Promise((resolve, reject) => {
    const options = {
      title: 'Выберите фото человека ' + (type == 'profile' ? 'в профиль' : 'в фас'),
      cancelButtonTitle: 'Закрыть',
      takePhotoButtonTitle: 'Сделать фото',
      chooseFromLibraryButtonTitle: 'Выбрать из галереи',
      chooseWhichLibraryTitle: 'Выберите приложение.',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      allowsEditing: true,
      permissionDenied: {
        text: 'Для того, чтобы вы могли добавить фото.',
        title: 'Нет доступа',
        okTitle: 'Я в курсе.',
        reTryTitle: 'Попробовать еще раз.',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        reject();
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
        reject(response.error);
      } else {
        resolve(response.uri);
      }
    });
  });

export const photos = createStore({profile: null, sideview: null});
export const takeNewProfilePhoto = createEffect('NEW_PROFILE/TAKE_PHOTO', {
  handler: async (type: string) => ({
    type,
    uri: await getImageFromPicker(type),
  }),
});
const clearNewProfilePhotos = createEvent('NEW_PROFILE/CLEAR_PHOTOS');

photos
  .on(takeNewProfilePhoto.done, (store, {result}) => ({
    ...store,
    [result.type]: result.uri,
  }))
  .reset(clearNewProfilePhotos);

export const changeCategory = createEvent('NEW_PROFILE/CHANGE_CATEGORY');
export const changeName = createEvent('NEW_PROFILE/CHANGE_NAME');
export const category = createStore({value: 'designers', label: 'Дизайнеры'}).on(
  changeCategory,
  (_, val) => val,
);
export const name = createStore('Евгений Бугров').on(changeName, (_, val) => val);

export const newProfileRootStore = createStoreObject({
  photos,
  category,
  name,
});
