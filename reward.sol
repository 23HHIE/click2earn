pragma solidity >=0.8.7;

contract GetEtherOnce {
    mapping(address => bool) public hasReceivedEther;
    uint public amount = 0.001 ether;
    address public owner;

    constructor() {
        owner = msg.sender; 
    }

    function getEther() public {
        require(!hasReceivedEther[msg.sender], "You can only receive ether once.");
        payable(msg.sender).transfer(amount);
        hasReceivedEther[msg.sender] = true;
    }

    
    function depositEther() public payable {
        require(msg.sender == owner, "Only the owner can deposit ether.");
    }

    receive() external payable {}
}
