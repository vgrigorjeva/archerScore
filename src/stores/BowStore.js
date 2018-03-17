import { observable, action } from 'mobx';

export default class BowStore {
    @observable showAddBowPopup = false;

  @action setShowAddBowPopup(showAddBowPopup) {
      this.showAddBowPopup = showAddBowPopup;
    }
}
