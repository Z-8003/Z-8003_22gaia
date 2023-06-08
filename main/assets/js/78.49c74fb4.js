(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{603:function(e,t,o){"use strict";o.r(t);var r=o(1),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"on-chain-proposal-process"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#on-chain-proposal-process"}},[e._v("#")]),e._v(" On-Chain Proposal Process")]),e._v(" "),o("h2",{attrs:{id:"governance-parameters"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#governance-parameters"}},[e._v("#")]),e._v(" Governance Parameters")]),e._v(" "),o("p",[e._v("Several of the numbers involved in governance are parameters and can thus be changed by passing a parameter change proposal.")]),e._v(" "),o("ul",[o("li",[e._v("Minimum deposit: 250 ATOM")]),e._v(" "),o("li",[e._v("Maximum deposit period: 14 days")]),e._v(" "),o("li",[e._v("Voting period: 14 days")]),e._v(" "),o("li",[e._v("Quorum: 40% of participating voting power")]),e._v(" "),o("li",[e._v("Pass threshold: 50% of participating voting power")]),e._v(" "),o("li",[e._v("Veto threshold: 33.40% of participating voting power")])]),e._v(" "),o("h2",{attrs:{id:"_1-deposit-period"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-deposit-period"}},[e._v("#")]),e._v(" 1. Deposit Period")]),e._v(" "),o("p",[e._v("The deposit period lasts either 14 days or until the proposal deposit totals 250 ATOMs, whichever happens first.")]),e._v(" "),o("h3",{attrs:{id:"deposits"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deposits"}},[e._v("#")]),e._v(" Deposits")]),e._v(" "),o("p",[e._v("Prior to a governance proposal entering the voting period (i.e., for the proposal to be voted upon), there must be at least a minimum number of ATOMs deposited (250). Anyone may contribute to this deposit, though it is usually filled by the proposal maker. Deposits of passed and failed proposals are returned to the contributors.")]),e._v(" "),o("p",[e._v("In the past, different people have considered contributions amounts differently. There is some consensus that this should be a personal choice. There is also some consensus that this can be an opportunity for supporters to signal their support by adding to the deposit amount, so a proposer may choose to leave contribution room (i.e., a deposit below 250 ATOMs) so that others may participate. It is important to remember that any contributed ATOMs are at risk of being burned.")]),e._v(" "),o("h3",{attrs:{id:"burned-deposits"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#burned-deposits"}},[e._v("#")]),e._v(" Burned deposits")]),e._v(" "),o("p",[e._v("Deposits are burned only when proposals are vetoed as documented in the "),o("a",{attrs:{href:"https://docs.cosmos.network/main/modules/gov#deposit-refund-and-burn",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos SDK gov module spec"),o("OutboundLink")],1),e._v(". Deposits are not burned for failing to meet quorum or for being rejected.")]),e._v(" "),o("h2",{attrs:{id:"_2-voting-period"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-voting-period"}},[e._v("#")]),e._v(" 2. Voting Period")]),e._v(" "),o("p",[e._v("The voting period is currently a fixed 14-day period. During the voting period, participants may select a vote of either 'Yes', 'No', 'Abstain', or 'NoWithVeto'. Voters may change their vote at any time before the voting period ends.")]),e._v(" "),o("h3",{attrs:{id:"what-do-the-voting-options-mean"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-do-the-voting-options-mean"}},[e._v("#")]),e._v(" What do the voting options mean?")]),e._v(" "),o("ol",[o("li",[o("strong",[e._v("Abstain:")]),e._v(" The voter wishes to contribute to quorum without voting for or against a proposal.")]),e._v(" "),o("li",[o("strong",[e._v("Yes:")]),e._v(" Approval of the proposal in its current form.")]),e._v(" "),o("li",[o("strong",[e._v("No:")]),e._v(" Disapproval of the proposal in its current form.")]),e._v(" "),o("li",[o("strong",[e._v("NoWithVeto:")]),e._v(" A ‘NoWithVeto’ vote indicates a proposal either (1) is deemed to be spam, i.e., irrelevant to Cosmos Hub, (2) disproportionately infringes on minority interests, or (3) violates or encourages violation of the rules of engagement as currently set out by Cosmos Hub governance.")])]),e._v(" "),o("p",[e._v("As accepted by the community in "),o("a",{attrs:{href:"https://ipfs.io/ipfs/QmVHVH9WeGy9tTNN9dViqvDn7N79XJJUseKXD1rpyLVckK",target:"_blank",rel:"noopener noreferrer"}},[e._v("Proposal 75"),o("OutboundLink")],1),e._v(", voters are expected to vote 'NoWithVeto' for proposals that are spam, infringe on minority interests, or violate the rules of engagement (i.e., Social protocols which have passed governance and thus been accepted as rules on the Hub). This proposal was an extension of the ideas put forward in "),o("a",{attrs:{href:"https://ipfs.io/ipfs/QmRtR7qkeaZCpCzHDwHgJeJAZdTrbmHLxFDYXhw7RoF1pp",target:"_blank",rel:"noopener noreferrer"}},[e._v("Proposal 6"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("Voting 'NoWithVeto' has no immediate additional financial cost to the voter - you do not directly risk your ATOM by using this option.")]),e._v(" "),o("h3",{attrs:{id:"what-determines-whether-or-not-a-governance-proposal-passes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-determines-whether-or-not-a-governance-proposal-passes"}},[e._v("#")]),e._v(" What determines whether or not a governance proposal passes?")]),e._v(" "),o("p",[e._v("There are four criteria:")]),e._v(" "),o("ol",[o("li",[e._v("Deposit is filled: A minimum deposit of 250 ATOM is required for the proposal to enter the voting period\n"),o("ul",[o("li",[e._v("anyone may contribute to this deposit")]),e._v(" "),o("li",[e._v("the deposit must be reached within 14 days (this is the deposit period)")])])]),e._v(" "),o("li",[e._v("Quorum is reached: A minimum of 40% of the network's total voting power (staked ATOM) is required to participate")]),e._v(" "),o("li",[e._v("Simple majority of 'Yes' votes: Greater than 50% of the participating voting power must back the 'Yes' vote by the end of the 14-day voting period")]),e._v(" "),o("li",[e._v("Not vetoed: Less than 33.4% of participating voting power must have backed 'NoWithVeto' by the end of the 14-day voting period")])]),e._v(" "),o("p",[e._v("Currently, the criteria for submitting and passing/failing all proposal types is the same.")]),e._v(" "),o("h3",{attrs:{id:"how-is-quorum-determined"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-is-quorum-determined"}},[e._v("#")]),e._v(" How is quorum determined?")]),e._v(" "),o("p",[e._v("Voting power, whether backing a vote of 'Yes', 'Abstain', 'No', or 'NoWithVeto', counts toward quorum. Quorum is required for the outcome of a governance proposal vote to be considered valid and for deposit contributors to recover their deposit amounts.")]),e._v(" "),o("h3",{attrs:{id:"how-is-voting-tallied"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-is-voting-tallied"}},[e._v("#")]),e._v(" How is voting tallied?")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Total voting power")]),e._v(" refers to all staked ATOM at the end of the 14-day voting period. Liquid ATOMs are not part of the total voting power and thus cannot participate in voting.")]),e._v(" "),o("li",[o("strong",[e._v("Participating voting power")]),e._v(" refers to only the ATOM which have been used to cast a vote on a particular proposal. Quorum is set to 40% of the "),o("strong",[e._v("participating")]),e._v(" voting power.")])]),e._v(" "),o("p",[e._v("Validators not in the active set can cast a vote, but their voting power (including the backing of their delegators) will not count toward the vote if they are not in the active set "),o("strong",[e._v("when the voting period ends")]),e._v(". That means that if ATOM is delegated to a validator that is jailed, tombstoned, or outside of the active set at the time that the voting period ends, that ATOM's stake-weight will not count in the vote.")]),e._v(" "),o("p",[e._v("Though a simple majority 'Yes' vote (ie. 50% of participating voting power) is required for a governance proposal vote to pass, a 'NoWithVeto' vote of 33.4% of participating voting power or greater can override this outcome and cause the proposal to fail. This enables a minority group representing greater than 1/3 of participating voting power to fail a proposal that would otherwise pass.")])])}),[],!1,null,null,null);t.default=i.exports}}]);