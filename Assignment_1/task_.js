//Task 1 starts 
var user_name = "Salman Ahmed";
console.log(`Hello ${user_name}, would you like to learn some Python today?`);

//Task 2 starts
my_name = "muhammad Bin salman"
console.log(my_name.toLowerCase());                          //lowercase
sep = my_name.toLowerCase().split(' ');                      //titlecase
for(var i = 0; i < sep.length; i++){
  sep[i] = sep[i].charAt(0).toUpperCase() + sep[i].slice(1); 
}
console.log(sep.join(' '));
console.log(my_name.toUpperCase());                          //uppercase

//Task 3 starts
console.log('Quaid e Azam once said, "There are two powers in the world; one is the sword and the other is the pen"');

//Task 4 starts
let famous_person = "Jack Ma";
let messege = "A good boss is better than a good company";
console.log(`${famous_person} once said, "${messege}"`);

//Task 5 starts 
let person_name_ = "\tCristiano Ronaldo\n";
console.log(person_name_);
console.log(person_name_.trim());