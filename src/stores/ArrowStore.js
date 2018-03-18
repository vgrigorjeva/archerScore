import { observable, action } from 'mobx';

export default class ArrowStore {
    @observable showAddArrowPopup = false;

  @action setShowAddArrowPopup(showAddArrowPopup) {
      this.showAddArrowPopup = showAddArrowPopup;
    }
}
