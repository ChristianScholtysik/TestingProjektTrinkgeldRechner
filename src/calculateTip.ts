// Eine Funktion die als Input Höhe der Rechnung, Zahl der Teilenden und Servicequalität erhält,
// und uns Trinkgeld, Gesamtsumme und Preis pro Person ausgibt

interface CalculateTipsReturn {
  totalTip: number;
  totalWithTip: number;
  totalPerPerson: number;
}

export function calculateTips(
  total: number,
  people: number,
  tipPercent: number
): CalculateTipsReturn {
  // 100 EUR (Rechnung) * 20% Trinkgeld = 20 EUR
  const totalTip = Number((total * (tipPercent / 100)).toFixed(2));
  const totalWithTip = Number((total + totalTip).toFixed(2));
  const totalPerPerson = Number((totalWithTip / people).toFixed(2));
  const result = {
    // totalTip: totalTip,
    // (andere schreibweise für die zeile hierdrunter)
    totalTip,
    totalWithTip,
    totalPerPerson,
  };
  return result;
}
