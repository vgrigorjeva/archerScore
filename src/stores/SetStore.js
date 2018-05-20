import { observable, action } from 'mobx';

export default class SetStore {
    @observable showAddSetPopup = false;

    @action setShowAddSetPopup(showAddSetPopup) {
      this.showAddSetPopup = showAddSetPopup;
    }
}
