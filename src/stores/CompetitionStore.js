import { observable, action } from 'mobx';

export default class CompetitionStore {
    @observable showAddCompetitionPopup = false;

    @action setShowAddCompetitionPopup(showAddCompetitionPopup) {
      this.showAddCompetitionPopup = showAddCompetitionPopup;
    }
}
