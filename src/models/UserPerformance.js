const kindToLabel = {
  1: 'Cardio',
  2: 'Énergie',
  3: 'Endurance',
  4: 'Force',
  5: 'Vitesse',
  6: 'Intensité',
};

export default class UserPerformance {
  constructor(data) {
    this.userId = data.userId;
    this.kind = data.kind;
    this.data = data.data.map((performance) => ({
      value: performance.value,
      kind: performance.kind,
      activity: kindToLabel[performance.kind]
    }));
  }
}