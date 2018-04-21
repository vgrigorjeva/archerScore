import { observable, action } from 'mobx';

export default class TrainingStore {
    @observable showAddTrainingPopup = false;

    @action setShowAddTrainingPopup(showAddTrainingPopup) {
      this.showAddTrainingPopup = showAddTrainingPopup;
    }
}
