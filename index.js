// Code your solution here
function findMatching(names, query){
    return names.filter(name => name.toLowerCase() === query.toLowerCase());

}
function fuzzyMatch(drivers, query){
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
}
const drivers = ['Bobby', 'Sammy', 'Sally', 'bobby'];
const query = 'b';
const matchedDrivers = fuzzyMatch(drivers, query);
function matchName(drivers, query){
    return drivers.filter(driver => driver.name.toLowerCase() === query.toLowerCase());
}