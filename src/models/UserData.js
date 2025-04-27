export default class UserData {
  constructor(data) {
    this.id = data.id;
    this.firstName = data.userInfos.firstName;
    this.lastName = data.userInfos.lastName;
    this.todayScore = data.todayScore || data.score; // Gestion des deux manières possibles pour récupérer le score.
    this.keyData = data.keyData;
  }
}