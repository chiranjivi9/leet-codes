const dogs = [
    { name: 'Abby',   rating: 12 },
    { name: 'Bandit', rating: 13 },
    { name: 'Choco',  rating: 14 },
    { name: 'Daisy',  rating: 12 },
    { name: 'Elmo',   rating: 12 },
    { name: 'Falco',  rating: 13 },
    { name: 'Ghost',  rating: 14 },
  ];


  let checkStability = (dogs) => {

    dogs.sort((a,b) => b.rating - a.rating);

    console.log(dogs)
  }
  

  checkStability(dogs);