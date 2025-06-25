// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import {Script, console} from "forge-std/Script.sol";

contract FundMe is Script {
    function run() external {
        address me = vm.envAddress("MY_ADDRESS");
        uint256 amount = 1 ether;

        console.log("My balance:", address(me).balance);
        vm.broadcast();
        payable(me).transfer(amount);
        console.log("My balance after deal:", address(me).balance);
    }
}
