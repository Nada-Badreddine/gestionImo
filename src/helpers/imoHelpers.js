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
        ((currentImo.montant * (30 * (12 - mothFirstYers))) / 360) * taux;
      // if eni fi 3am le5er  currentImo?.duree + 1
    } else if (pas === currentImo?.duree + 1) {
      annAmm = ((currentImo.montant * (30 * mothLastYers)) / 360) * taux;
    } else {
      annAmm = currentImo.montant * taux;
    }
    ammorCumm = annAmm + ammorCumm;
    const vnc = currentImo?.montant - ammorCumm;
    // a chaque for je push un élement dans array
    ammorArray.push({
      années: pas === 1 ? "N" : `N+${pas - 1}`,
      montant: currentImo?.montant,
      annAmm,
      ammorCumm,
      vnc,
    });
  }
  return ammorArray;
};

export default getAmortis;
