import {observable, computed, action} from 'mobx';
import ImagePicker from 'react-native-image-picker';

class ProfilesStore {
  @observable newProfile;

  constructor() {
    this.newProfile = {
      photos: {
        profile: null,
        sideview: null,
      },
    };
  }
  @computed get newProfilePhotos(type) {
    return this.newProfile.photos[type];
  }
  @action.bound
  setNewProfilePhoto(response) {
    console.warn('resl');
    if (response.didCancel) {
      console.log('CANCELLED');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else {
      // You can also display the image using data:
      // const source = { uri: 'data:image/jpeg;base64,' + response.data };
      console.log(response.uri);
      this.newProfile.photos.profile = {
        uri: response.uri,
      };
    }
  }
  @action
  takeNewProfilePhoto(type) {
    console.log('takeNewProfilePhoto');
    const options = {
      title: 'Выберите фото человека ' + type == 'profile' ? 'в профиль' : 'в фас',
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
    ImagePicker.showImagePicker(options, this.setNewProfilePhoto);
  }
  @action
  clearNewProfilePhotos() {
    this.newProfile.photos = {profile: null, sideview: null};
  }
}

export const profilesStore = new ProfilesStore();
