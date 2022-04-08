    // Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
		{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
		{ first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
		{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
		{ first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
		{ first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
		{ first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
		{ first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
		{ first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
		{ first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
		{ first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
		{ first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
		{ first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
	  ];
  
	  const people = [
		'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
		'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
		'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
		'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
		'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
	  ];
	  
	  // Array.prototype.filter()
	  // 1. Filter the list of inventors for those who were born in the 1500's
	  const bornFifteenHundred = inventors.filter(function(inventor) {
		  if (inventor.year >= 1500 && inventor.year < 1600) {
			  return true;
		  }
	  });
	  console.table(bornFifteenHundred);

	  // Alternative syntax with the arrow function:
	  const bornFifteen100 = inventors.filter((inventor) => (inventor.year >= 1500 && inventor.year < 1600));
	  console.table(bornFifteen100);

  
	  // Array.prototype.map()
	  // 2. Give us an array of the inventors first and last names
	  const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
	  console.table(fullNames);
  
	  // Array.prototype.sort()
	  // 3. Sort the inventors by birthdate, oldest to youngest
	  const sortByBirthday = inventors.sort((a, b) => {
		  if (a.year > b.year) {
			  return 1;
		  }
		  else {
			  return -1;
		  }
	  });
	  console.table(sortByBirthday);

	  // Alternative syntax with ternary operator
	  const sortbyBday = inventors.sort((a,b) => a > b ? 1 : -1);
	  console.table(sortbyBday);
  
	  // Array.prototype.reduce()
	  // 4. How many years did all the inventors live all together?
	  // Helps loop through the array and generate totals without having to use a different external variable that's updated in a loop.
	  const totalYearsLived = inventors.reduce((total, inventor) => {
		  return total + (inventor.passed - inventor.year);
	  }, 0);

	  console.log(totalYearsLived);
  
	  // 5. Sort the inventors by years lived
	  const sortedByOldest = inventors.sort((a,b) => {
		  let prevInventorAge = a.passed - a.year;
		  let currInventorAge = b.passed - b.year;

		  return prevInventorAge > currInventorAge ? -1 : 1;
	  });

	  console.table(sortedByOldest);
  
	  // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
	  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
	  const category = document.querySelector(".mw-category");
	  const boulevardLinks = category.querySelectorAll("a");

	  for (const link of boulevardLinks) {
		if (link.innerHTML.includes("de") && !link.innerHTML.includes("des")) {
			console.log(link.innerHTML);
		}
	  }

	  // Method 2:
	  const boulevardLinksArray = Array.from(category.querySelectorAll("a"));
	  const linksWithDe = boulevardLinksArray
	  						.map(link => link.textContent)
							.filter(streetName => streetName.includes("de") && !streetName.includes("des"));
  
	  // 7. sort Exercise
	  // Sort the people alphabetically by last name
	  const sortedPeople = people.sort(function(lastPerson, nextPerson) {
		//   console.log (lastPerson > nextPerson);
		return lastPerson > nextPerson ? 1 : -1;
	  });
	  console.table(sortedPeople);

	  //   Method 2:
	  const sortedPeopleToo = people.sort((lastPerson, nextPerson) => {
		const [lastPlastN, lastPfirstN] = lastPerson.split(', ');
		const [nextPPlastN, nextPPfirstN] = nextPerson.split(', ');

		return lastPlastN > nextPPlastN ? 1 : -1;
	  });
	  console.table(sortedPeopleToo);
  
	  // 8. Reduce Exercise
	  // Sum up the instances of each of these
	  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
  
	  const reducedData = data.reduce((obj, item) => {
		// console.log(obj[item]);

		if (!obj[item]) {
			obj[item] = 0;
		} 

		obj[item] = obj[item] + 1;
		// console.log(item, obj[item]);
		
		return obj;
	  }, {});
	  console.log(reducedData);