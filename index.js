const messageConfig = {
  frontContent: "Happy Birthday, Odin One-Eye!",
  insideContent: "From Asgard to Nifelheim, you're the best all-father ever.\n\nLove,",
  closing: {
      "Thor": "Admiration, respect, and love",
      "Loki": "Your son"
  },
  signatories: [
      "Thor",
      "Loki"
  ]
};
// Code that does not work:
// const printCard = function () {
//   console.log(this.frontContent);
//   console.log(this.insideContent);

//   this.signatories.forEach(function (signatory) {
//     const message = `${this.closing[signatory]}, ${signatory}`;
//     console.log(message);
//   });
// };

//printCard.call(messageConfig);

//Uses this as a second argument:
// const printCard = function () {
//   console.log(this.frontContent)
//   console.log(this.insideContent)

//   this.signatories.forEach(function(signatory) {
//     const message = `${this.closing[signatory]}, ${signatory}`
//     console.log(message)
//   }, this)
//   //This function now works because this is added as a agrument for the forEach 
//   //which now understands what this.signatories is
// }

// printCard.call(messageConfig)

//with bind

// const printCard = function () {
//   console.log(this.frontContent)
//   console.log(this.insideContent)
//   const contextBoundForEachExpr = function (signatory) {
//     const message = `${this.closing[signatory]}, ${signatory}`
//     console.log(message)
//   }.bind(this)

//   this.signatories.forEach(contextBoundForEachExpr)
// }

// printCard(messageConfig)

//Using a closure to regain access to the lost context:

// const printCard = function () {
//   console.log(this.frontContent)
//   console.log(this.insideContent)

//   const outerContext = this

//   this.signatories.forEach(function (signatory) {
//     const message = `${outerContext.closing[signatory]}, ${signatory}`
//     console.log(message)
//   })
// }

// printCard.call(messageConfig)

//Using an Arrow Function
//can not use call,bind,apply on arrow function

const printCard = function() {
  console.log(this.frontContent)
  console.log(this.insideContent)
  this.signatories.forEach((signatory) => 
  console.log(`${this.closing[signatory]}, ${signatory}`)
  )
}

printCard.call(messageConfig)
