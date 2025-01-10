let guests = ["Mehwish", "Bushra", "Afia", "Sehrish"];
let unableToAttend = "Sehrish";
console.log(`${unableToAttend} can't make it to dinner.`);
// replace the guest
let newGuest = "Zain";
guests[guests.indexOf(unableToAttend)] = newGuest;
// new invitations
guests.forEach((guests) => {
  console.log(
    `Dear ${guests},"Would you like to join me for dinner at my place to catch up over a delicious meal?" `
  );
});
