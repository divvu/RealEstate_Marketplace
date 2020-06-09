pragma solidity >=0.4.21 <0.6.0;

import "./ERC721Mintable.sol";

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is ERC721MintableComplete {
  Verifier private contractVerifier;
  constructor(address verifierAddress, string memory name, string memory symbol)
    ERC721MintableComplete(name, symbol)
    public
  {
      contractVerifier = Verifier(verifierAddress);
  }



  // TODO define a solutions struct that can hold an index & an address
  struct Solution {
    uint256 index;
    address solvingAddress;
    bool isMinted;
    bool isSolnExists;
  }


  // TODO define a mapping to store unique solutions submitted
  uint256 public numOfSolutions = 0;

  mapping(bytes32 => Solution) public solutionsSubmitted;


  // TODO Create an event to emit when a solution is added

  event SolutionAdded(uint256 index, address indexed solvingAddress);

  // TODO Create a function to add the solutions to the array and emit the event

  function addSolution(uint[2] memory a,uint[2][2] memory b,uint[2] memory c,uint[2] memory input)
      public
  {
      bytes32 solutionKey = keccak256(abi.encodePacked(input[0], input[1]));
      require(solutionsSubmitted[solutionKey].isSolnExists == false, "The solution is already exists");

      bool verified = contractVerifier.verifyTx(a,b,c, input);
      require(verified, "The solution could not be verified");

      solutionsSubmitted[solutionKey] = Solution({
          index: numOfSolutions,
          solvingAddress: msg.sender,
          isMinted: false,
          isSolnExists: true
        });

      emit SolutionAdded(numOfSolutions, msg.sender);
      numOfSolutions+=1;
  }


  // TODO Create a function to mint new NFT only after the solution has been verified
  //  - make sure the solution is unique (has not been used before)
  //  - make sure you handle metadata as well as tokenSuplly
  function mintNewNFTToken(uint a, uint b, address to) public {
    bytes32 solutionKey = keccak256(abi.encodePacked(a, b));

    require(solutionsSubmitted[solutionKey].isSolnExists == true, "The solution doesn't exists");
    require(solutionsSubmitted[solutionKey].isMinted == false, "Token is already minted for the solution");
    super.mint(to, solutionsSubmitted[solutionKey].index);
    solutionsSubmitted[solutionKey].isMinted = true;
  }

}


// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
contract Verifier {
    function verifyTx(
      uint[2] memory a,
      uint[2][2] memory b,
      uint[2] memory c,
      uint[2] memory input
    )
    public
    returns
    (bool r);
}
