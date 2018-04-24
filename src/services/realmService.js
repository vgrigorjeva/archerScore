import Realm from 'realm';
import uuidv1 from 'uuid';

let realm = null;
let training = null;
let competition = null;

const TrainingSchema = {
  name: 'Training',
  primaryKey: 'itemId',
  properties: {
    key: 'string',
    itemId: 'string',
    name: 'string?',
    date: 'date',
    targetType: 'string?',
    bow: 'string?',
    distance: 'int?',
    arrowsPerSet: 'int?',
    environment: 'string?',
    note: 'string?',
    arrow: 'string?',
    sets: 'Set[]',
  },
};

const CompetitionSchema = {
  name: 'Competition',
  primaryKey: 'itemId',
  properties: {
    key: 'string',
    itemId: 'string',
    name: 'string?',
    date: 'date',
    targetType: 'string?',
    bow: 'string?',
    distance: 'int?',
    arrowsPerSet: 'int?',
    environment: 'string?',
    note: 'string?',
    arrow: 'string?',
    sets: 'Set[]',
  },
};

const SetSchema = {
  name: 'Set',
  primaryKey: 'itemId',
  properties: {
    itemId: 'string',
    points: 'Point[]',
  },
};

const PointSchema = {
  name: 'Point',
  properties: {
    value: 'int',
  },
};

const BowSchema = {
  name: 'Bow',
  primaryKey: 'itemId',
  properties: {
    itemId: 'string',
    name: 'string',
    bowType: 'string',
    brand: 'string',
    size: 'int',
    drawWeight: 'int',
    tiller: 'int',
    braceHeight: 'int',
    limbs: 'string',
    nockingPoint: 'string',
    string: 'string',
    description: 'string',
    sightSettings: 'Sight[]',
  },
};

const SightSchema = {
  name: 'Sight',
  primaryKey: 'itemId',
  properties: {
    itemId: 'string',
    distance: 'int',
    setting: 'string',
  },
};

const getRealm = () =>
  new Promise((resolve, reject) => {
    if (realm) {
      resolve(realm);
    } else {
      Realm.open({
        schema: [
          TrainingSchema,
          CompetitionSchema,
          BowSchema,
          SightSchema,
          PointSchema,
          SetSchema,
        ],
      }).catch((error) => {
        reject(error);
      }).then((r) => {
        realm = r;
        resolve(realm);
      });
    }
  });

const createTraining = ({
  name,
  targetType,
  bow,
  distance,
  arrowsPerSet,
  environment,
  note,
  arrow,
}) => {
  realm.write(() => {
    training = realm.create(
      'Training',
      {
        itemId: uuidv1(),
        key: 'training',
        name,
        date: new Date(),
        targetType,
        bow,
        distance,
        arrowsPerSet,
        environment,
        note,
        arrow,
      },
    );
  });
  return training;
};

const getTrainings = () => realm.objects('Training').sorted('date', true);

const getCurrentTraining = ({ trainingId }) => realm.objects('Training').filtered('itemId = $0', trainingId)[0];

const deleteTraining = ({ trainingId }) => {
  training = getCurrentTraining({ trainingId });
  realm.write(() => {
    realm.delete(training);
  });
};

const addTrainingSet = ({ trainingId, pointsPerCurrentSet }) => {
  training = getCurrentTraining({ trainingId });
  realm.write(() => {
    const set = realm.create(
      'Set',
      {
        itemId: uuidv1(),
        points: pointsPerCurrentSet,
      },
    );
    training.sets.push(set);
  });
};

const getTrainingSets = trainingId =>
  realm.objects('Training').filtered('itemId = $0', trainingId)[0].sets;
const createCompetition = ({
  name,
  targetType,
  bow,
  distance,
  arrowsPerSet,
  environment,
  note,
  arrow,
}) => {
  realm.write(() => {
    competition = realm.create(
      'Competition',
      {
        itemId: uuidv1(),
        key: 'competition',
        name,
        date: new Date(),
        targetType,
        bow,
        distance,
        arrowsPerSet,
        environment,
        note,
        arrow,
      },
    );
  });
  return competition;
};

const getCompetitions = () => realm.objects('Competition').sorted('date', true);

const getCurrentCompetition = ({ competitionId }) => realm.objects('Competition').filtered('itemId = $0', competitionId)[0];

const deleteCompetition = ({ competitionId }) => {
  competition = getCurrentCompetition({ competitionId });
  realm.write(() => {
    realm.delete(competition);
  });
};

const addCompetitionSet = ({ competitionId, pointsPerCurrentSet }) => {
  competition = getCurrentCompetition({ competitionId });
  realm.write(() => {
    const set = realm.create(
      'Set',
      {
        itemId: uuidv1(),
        points: pointsPerCurrentSet,
      },
    );
    competition.sets.push(set);
  });
};

const getCompetitionSets = competitionId =>
  realm.objects('Competition').filtered('itemId = $0', competitionId)[0].sets;

const getCurrentSet = ({ setId }) => realm.objects('Set').filtered('itemId = $0', setId)[0];

const deleteSet = ({ setId }) => {
  const set = getCurrentSet({ setId });
  realm.write(() => {
    realm.delete(set);
  });
};

export default {
  getRealm,
  createTraining,
  getTrainings,
  deleteTraining,
  createCompetition,
  getCompetitions,
  deleteCompetition,
  addCompetitionSet,
  getCompetitionSets,
  addTrainingSet,
  getTrainingSets,
  deleteSet,
};
