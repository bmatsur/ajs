"use strict";
console.log(" ");
console.log("-----------police-station-----------");

class PoliceStation {
  constructor() {
    this.cases = [];
  }

  //(например, "открыто", "расследуется", "закрыто").
  addCase(caseNumber, suspectName, status) {
    this.cases.push({ caseNumber, suspectName, status });
    console.log(
      `Added: caseNumber: ${caseNumber}, suspectName ${suspectName}, status ${status}`
    );
  }

  findCaseByNumber(caseNumber) {
    return console.log(
      this.cases.find((theCase) => theCase.caseNumber === caseNumber) ||
        "Delo ne naydeno"
    );
  }

  findCaseBySuspectName(suspectName) {
    return console.log(
      this.cases.find((theCase) => theCase.suspectName === suspectName) ||
        "Suspect ne nayden"
    );
  }

  getAllCases() {
    return console.log(
      this.cases.map(
        (theCase) => `
            Name: ${theCase.suspectName}, Case#: ${theCase.caseNumber}, Status: ${theCase.status}`
      )
    );
  }
}

// Пример использования класса PoliceStation
const policeStation = new PoliceStation();

// Добавляем дела
policeStation.addCase(101, "Анвар Холиков", "расследуется");
policeStation.addCase(102, "Рухшона Давлатова", "открыто");
policeStation.addCase(103, "Сомон Усмонов", "закрыто");

// Поиск дела по номеру
policeStation.findCaseByNumber(102);

// Поиск дела по имени подозреваемого
policeStation.findCaseBySuspectName("Иван Иванов");

// Получение списка всех дел
policeStation.getAllCases();
