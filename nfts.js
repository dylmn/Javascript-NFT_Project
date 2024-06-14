/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const petNFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, species, age) {
    const pets = {
        "name" : name,
        "species" : species,
        "age" : age
    }
    petNFTs.push(pets);
    console.log(name + " NFT minted!");
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs (NFT) {
    console.log("ID \t Name \t\t  Species \t Age" );
    for (let i = 0; i < NFT.length; i++) {
        console.log(i + "\t " + NFT[i].name + "\tis a pet   " + NFT[i].species + "\t and is   " + NFT[i].age + " years old.");
    }
    
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total NFT supply: " + petNFTs.length);
}

// call your functions below this line
mintNFT("Gon", "Dog", 2);
mintNFT("Olli", "Cat", 4);
mintNFT("Jonny", "Bird", 1);
listNFTs(petNFTs);
getTotalSupply();
