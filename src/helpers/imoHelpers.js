const getAmortis = (currentImo) => {
  // 7sebet chhar 6 mte3 date mise en service
  const mothFirstYers = new Date(currentImo?.serviceDate).getMonth() + 1;
  // 7sebet chhar 4 mte3 date lyoum
  const mothLastYers = new Date().getMonth() + 1;
  let ammorArray = [];
  // array sera afficher il est initialé vide
  const taux = 100 / currentImo?.duree;
  let ammorCumm = 0;
  // amortissement dima  duree + 1
  let annAmm;
  for (let pas = 1; pas <= currentImo?.duree + 1; pas++) {
    // kenni fi 3am loul khater fi boucle for bdit men 1 heka 3leh 3malt pas ===1
    if (pas === 1) {
      annAmm =
        ((currentImo.Montant * (30 * (12 - mothFirstYers))) / 360) * taux;
      // if eni fi 3am le5er  currentImo?.duree + 1
    } else if (pas === currentImo?.duree + 1) {
      annAmm = ((currentImo.Montant * (30 * mothLastYers)) / 360) * taux;
    } else {
      annAmm = currentImo.Montant * taux;
    }
    ammorCumm = annAmm + ammorCumm;
    const vnc = currentImo?.Montant - ammorCumm;
    // a chaque for je push un élement dans array
    ammorArray.push({
      années: pas === 1 ? "N" : `N+${pas - 1}`,
      montant: currentImo?.Montant,
      annAmm,
      ammorCumm,
      vnc,
    });
  }
  return ammorArray;
};

const getCoefficient = (duree) => {
  console.log("duree", duree);

  return duree === 3 || duree === 4
    ? 1.25
    : duree === 5 || duree === 6
    ? 1.75
    : 2.25;
};

export const getAmortisDeg = (currentImo) => {
  console.log("sjkqsjkqsjqksjq", currentImo);
  // 7sebet chhar 6 mte3 date mise en service
  const mothFirstYers = new Date(currentImo?.dateAquisition).getMonth() + 1;
  console.log("mothFirstYers", mothFirstYers);

  // 7sebet chhar 4 mte3 date lyoum
  const mothLastYers = new Date().getMonth() + 1;
  let ammorArray = [];
  // array sera afficher il est initialé vide
  const coeff = getCoefficient(currentImo?.duree);
  const taux = (100 / currentImo?.duree) * coeff;
  console.log("taux", taux);
  let ammorCumm = 0;
  // amortissement dima  duree + 1
  let annAmm;
  let base = 0;
  for (let pas = 1; pas <= currentImo?.duree + 1; pas++) {
    // kenni fi 3am loul khater fi boucle for bdit men 1 heka 3leh 3malt pas ===1
    if (pas === 1) {
      const mth = 12 - mothFirstYers + 1;
      console.log("mth", mth);
      annAmm = (taux * currentImo.Montant * mth) / 12;
      console.log("annAmm", annAmm);
      base = currentImo?.Montant;
      // if eni fi 3am le5er  currentImo?.duree + 1
    } else if (pas === currentImo?.duree + 1) {
      annAmm = ((currentImo.Montant * (30 * mothLastYers)) / 360) * taux;
    } else {
      console.log("ammorArray", ammorArray);
      console.log("pas", pas);
      base = ammorArray[pas - 2].vnc;
      annAmm = base * taux;
    }
    ammorCumm = annAmm + ammorCumm;
    const vnc = base - annAmm;
    // a chaque for je push un élement dans array
    ammorArray.push({
      années: pas === 1 ? "N" : `N+${pas - 1}`,
      montant: base,
      annAmm,
      ammorCumm,
      vnc,
    });
  }
  return ammorArray;
};

export default getAmortis;
