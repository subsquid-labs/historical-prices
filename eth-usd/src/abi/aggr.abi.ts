export const ABI_JSON = [
    {
        "type": "constructor",
        "stateMutability": "undefined",
        "payable": false,
        "inputs": [
            {
                "type": "uint32",
                "name": "_maximumGasPrice"
            },
            {
                "type": "uint32",
                "name": "_reasonableGasPrice"
            },
            {
                "type": "uint32",
                "name": "_microLinkPerEth"
            },
            {
                "type": "uint32",
                "name": "_linkGweiPerObservation"
            },
            {
                "type": "uint32",
                "name": "_linkGweiPerTransmission"
            },
            {
                "type": "address",
                "name": "_link"
            },
            {
                "type": "int192",
                "name": "_minAnswer"
            },
            {
                "type": "int192",
                "name": "_maxAnswer"
            },
            {
                "type": "address",
                "name": "_billingAccessController"
            },
            {
                "type": "address",
                "name": "_requesterAccessController"
            },
            {
                "type": "uint8",
                "name": "_decimals"
            },
            {
                "type": "string",
                "name": "description"
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "AddedAccess",
        "inputs": [
            {
                "type": "address",
                "name": "user",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "AnswerUpdated",
        "inputs": [
            {
                "type": "int256",
                "name": "current",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "roundId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "updatedAt",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "BillingAccessControllerSet",
        "inputs": [
            {
                "type": "address",
                "name": "old",
                "indexed": false
            },
            {
                "type": "address",
                "name": "current",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "BillingSet",
        "inputs": [
            {
                "type": "uint32",
                "name": "maximumGasPrice",
                "indexed": false
            },
            {
                "type": "uint32",
                "name": "reasonableGasPrice",
                "indexed": false
            },
            {
                "type": "uint32",
                "name": "microLinkPerEth",
                "indexed": false
            },
            {
                "type": "uint32",
                "name": "linkGweiPerObservation",
                "indexed": false
            },
            {
                "type": "uint32",
                "name": "linkGweiPerTransmission",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "CheckAccessDisabled",
        "inputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "CheckAccessEnabled",
        "inputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ConfigSet",
        "inputs": [
            {
                "type": "uint32",
                "name": "previousConfigBlockNumber",
                "indexed": false
            },
            {
                "type": "uint64",
                "name": "configCount",
                "indexed": false
            },
            {
                "type": "address[]",
                "name": "signers"
            },
            {
                "type": "address[]",
                "name": "transmitters"
            },
            {
                "type": "uint8",
                "name": "threshold",
                "indexed": false
            },
            {
                "type": "uint64",
                "name": "encodedConfigVersion",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "encoded",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "LinkTokenSet",
        "inputs": [
            {
                "type": "address",
                "name": "_oldLinkToken",
                "indexed": true
            },
            {
                "type": "address",
                "name": "_newLinkToken",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "NewRound",
        "inputs": [
            {
                "type": "uint256",
                "name": "roundId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "startedBy",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "startedAt",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "NewTransmission",
        "inputs": [
            {
                "type": "uint32",
                "name": "aggregatorRoundId",
                "indexed": true
            },
            {
                "type": "int192",
                "name": "answer",
                "indexed": false
            },
            {
                "type": "address",
                "name": "transmitter",
                "indexed": false
            },
            {
                "type": "int192[]",
                "name": "observations"
            },
            {
                "type": "bytes",
                "name": "observers",
                "indexed": false
            },
            {
                "type": "bytes32",
                "name": "rawReportContext",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "OraclePaid",
        "inputs": [
            {
                "type": "address",
                "name": "transmitter",
                "indexed": true
            },
            {
                "type": "address",
                "name": "payee",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "amount",
                "indexed": false
            },
            {
                "type": "address",
                "name": "linkToken",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "OwnershipTransferRequested",
        "inputs": [
            {
                "type": "address",
                "name": "from",
                "indexed": true
            },
            {
                "type": "address",
                "name": "to",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "OwnershipTransferred",
        "inputs": [
            {
                "type": "address",
                "name": "from",
                "indexed": true
            },
            {
                "type": "address",
                "name": "to",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "PayeeshipTransferRequested",
        "inputs": [
            {
                "type": "address",
                "name": "transmitter",
                "indexed": true
            },
            {
                "type": "address",
                "name": "current",
                "indexed": true
            },
            {
                "type": "address",
                "name": "proposed",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "PayeeshipTransferred",
        "inputs": [
            {
                "type": "address",
                "name": "transmitter",
                "indexed": true
            },
            {
                "type": "address",
                "name": "previous",
                "indexed": true
            },
            {
                "type": "address",
                "name": "current",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RemovedAccess",
        "inputs": [
            {
                "type": "address",
                "name": "user",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RequesterAccessControllerSet",
        "inputs": [
            {
                "type": "address",
                "name": "old",
                "indexed": false
            },
            {
                "type": "address",
                "name": "current",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RoundRequested",
        "inputs": [
            {
                "type": "address",
                "name": "requester",
                "indexed": true
            },
            {
                "type": "bytes16",
                "name": "configDigest",
                "indexed": false
            },
            {
                "type": "uint32",
                "name": "epoch",
                "indexed": false
            },
            {
                "type": "uint8",
                "name": "round",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ValidatorConfigSet",
        "inputs": [
            {
                "type": "address",
                "name": "previousValidator",
                "indexed": true
            },
            {
                "type": "uint32",
                "name": "previousGasLimit",
                "indexed": false
            },
            {
                "type": "address",
                "name": "currentValidator",
                "indexed": true
            },
            {
                "type": "uint32",
                "name": "currentGasLimit",
                "indexed": false
            }
        ]
    },
    {
        "type": "function",
        "name": "acceptOwnership",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "acceptPayeeship",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_transmitter"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "addAccess",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_user"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "billingAccessController",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "checkEnabled",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "decimals",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint8",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "description",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "string",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "disableAccessCheck",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "enableAccessCheck",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getAnswer",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_roundId"
            }
        ],
        "outputs": [
            {
                "type": "int256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "getBilling",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint32",
                "name": "maximumGasPrice"
            },
            {
                "type": "uint32",
                "name": "reasonableGasPrice"
            },
            {
                "type": "uint32",
                "name": "microLinkPerEth"
            },
            {
                "type": "uint32",
                "name": "linkGweiPerObservation"
            },
            {
                "type": "uint32",
                "name": "linkGweiPerTransmission"
            }
        ]
    },
    {
        "type": "function",
        "name": "getLinkToken",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": "linkToken"
            }
        ]
    },
    {
        "type": "function",
        "name": "getRoundData",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint80",
                "name": "_roundId"
            }
        ],
        "outputs": [
            {
                "type": "uint80",
                "name": "roundId"
            },
            {
                "type": "int256",
                "name": "answer"
            },
            {
                "type": "uint256",
                "name": "startedAt"
            },
            {
                "type": "uint256",
                "name": "updatedAt"
            },
            {
                "type": "uint80",
                "name": "answeredInRound"
            }
        ]
    },
    {
        "type": "function",
        "name": "getTimestamp",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "_roundId"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "hasAccess",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_user"
            },
            {
                "type": "bytes",
                "name": "_calldata"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "latestAnswer",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "int256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "latestConfigDetails",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint32",
                "name": "configCount"
            },
            {
                "type": "uint32",
                "name": "blockNumber"
            },
            {
                "type": "bytes16",
                "name": "configDigest"
            }
        ]
    },
    {
        "type": "function",
        "name": "latestRound",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "latestRoundData",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint80",
                "name": "roundId"
            },
            {
                "type": "int256",
                "name": "answer"
            },
            {
                "type": "uint256",
                "name": "startedAt"
            },
            {
                "type": "uint256",
                "name": "updatedAt"
            },
            {
                "type": "uint80",
                "name": "answeredInRound"
            }
        ]
    },
    {
        "type": "function",
        "name": "latestTimestamp",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "latestTransmissionDetails",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes16",
                "name": "configDigest"
            },
            {
                "type": "uint32",
                "name": "epoch"
            },
            {
                "type": "uint8",
                "name": "round"
            },
            {
                "type": "int192",
                "name": "latestAnswer"
            },
            {
                "type": "uint64",
                "name": "latestTimestamp"
            }
        ]
    },
    {
        "type": "function",
        "name": "linkAvailableForPayment",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "int256",
                "name": "availableBalance"
            }
        ]
    },
    {
        "type": "function",
        "name": "maxAnswer",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "int192",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "minAnswer",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "int192",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "oracleObservationCount",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_signerOrTransmitter"
            }
        ],
        "outputs": [
            {
                "type": "uint16",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "owedPayment",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_transmitter"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "owner",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "removeAccess",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_user"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "requestNewRound",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint80",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "requesterAccessController",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "setBilling",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint32",
                "name": "_maximumGasPrice"
            },
            {
                "type": "uint32",
                "name": "_reasonableGasPrice"
            },
            {
                "type": "uint32",
                "name": "_microLinkPerEth"
            },
            {
                "type": "uint32",
                "name": "_linkGweiPerObservation"
            },
            {
                "type": "uint32",
                "name": "_linkGweiPerTransmission"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setBillingAccessController",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_billingAccessController"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setConfig",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address[]",
                "name": "_signers"
            },
            {
                "type": "address[]",
                "name": "_transmitters"
            },
            {
                "type": "uint8",
                "name": "_threshold"
            },
            {
                "type": "uint64",
                "name": "_encodedConfigVersion"
            },
            {
                "type": "bytes",
                "name": "_encoded"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setLinkToken",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_linkToken"
            },
            {
                "type": "address",
                "name": "_recipient"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setPayees",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address[]",
                "name": "_transmitters"
            },
            {
                "type": "address[]",
                "name": "_payees"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setRequesterAccessController",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_requesterAccessController"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setValidatorConfig",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_newValidator"
            },
            {
                "type": "uint32",
                "name": "_newGasLimit"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "transferOwnership",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_to"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "transferPayeeship",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_transmitter"
            },
            {
                "type": "address",
                "name": "_proposed"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "transmit",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes",
                "name": "_report"
            },
            {
                "type": "bytes32[]",
                "name": "_rs"
            },
            {
                "type": "bytes32[]",
                "name": "_ss"
            },
            {
                "type": "bytes32",
                "name": "_rawVs"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "transmitters",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address[]",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "typeAndVersion",
        "constant": true,
        "stateMutability": "pure",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "string",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "validatorConfig",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": "validator"
            },
            {
                "type": "uint32",
                "name": "gasLimit"
            }
        ]
    },
    {
        "type": "function",
        "name": "version",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "withdrawFunds",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_recipient"
            },
            {
                "type": "uint256",
                "name": "_amount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "withdrawPayment",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_transmitter"
            }
        ],
        "outputs": []
    }
]
