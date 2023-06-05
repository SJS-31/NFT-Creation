// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract MyNFT is ERC721URIStorage, Ownable{

    using Counters for Counters.Counter; //imported counter library to count no. of nft

    Counters.Counter private _tokenIds; 

    constructor() ERC721("Swapnil J Singh", "SJS"){}

    function mintNFT(address recipient, string memory tokenURI) public onlyOwner returns(uint256){ //CReate NFT

        _tokenIds.increment(); //func from counter.sol

        uint256 newItemId= _tokenIds.current(); //Stores the current value of nft
        _mint(recipient, newItemId); //Mint this nft on this recipient id
        _setTokenURI(newItemId,tokenURI);

        return newItemId;
    } 

}
