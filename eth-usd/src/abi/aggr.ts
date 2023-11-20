import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './aggr.abi'

export const abi = new ethers.Interface(ABI_JSON);

export const events = {
    AddedAccess: new LogEvent<([user: string] & {user: string})>(
        abi, '0x87286ad1f399c8e82bf0c4ef4fcdc570ea2e1e92176e5c848b6413545b885db4'
    ),
    AnswerUpdated: new LogEvent<([current: bigint, roundId: bigint, updatedAt: bigint] & {current: bigint, roundId: bigint, updatedAt: bigint})>(
        abi, '0x0559884fd3a460db3073b7fc896cc77986f16e378210ded43186175bf646fc5f'
    ),
    BillingAccessControllerSet: new LogEvent<([old: string, current: string] & {old: string, current: string})>(
        abi, '0x793cb73064f3c8cde7e187ae515511e6e56d1ee89bf08b82fa60fb70f8d48912'
    ),
    BillingSet: new LogEvent<([maximumGasPrice: number, reasonableGasPrice: number, microLinkPerEth: number, linkGweiPerObservation: number, linkGweiPerTransmission: number] & {maximumGasPrice: number, reasonableGasPrice: number, microLinkPerEth: number, linkGweiPerObservation: number, linkGweiPerTransmission: number})>(
        abi, '0xd0d9486a2c673e2a4b57fc82e4c8a556b3e2b82dd5db07e2c04a920ca0f469b6'
    ),
    CheckAccessDisabled: new LogEvent<[]>(
        abi, '0x3be8a977a014527b50ae38adda80b56911c267328965c98ddc385d248f539638'
    ),
    CheckAccessEnabled: new LogEvent<[]>(
        abi, '0xaebf329500988c6488a0074e5a0a9ff304561fc5c6fc877aeb1d59c8282c3480'
    ),
    ConfigSet: new LogEvent<([previousConfigBlockNumber: number, configCount: bigint, signers: Array<string>, transmitters: Array<string>, threshold: number, encodedConfigVersion: bigint, encoded: string] & {previousConfigBlockNumber: number, configCount: bigint, signers: Array<string>, transmitters: Array<string>, threshold: number, encodedConfigVersion: bigint, encoded: string})>(
        abi, '0x25d719d88a4512dd76c7442b910a83360845505894eb444ef299409e180f8fb9'
    ),
    LinkTokenSet: new LogEvent<([_oldLinkToken: string, _newLinkToken: string] & {_oldLinkToken: string, _newLinkToken: string})>(
        abi, '0x4966a50c93f855342ccf6c5c0d358b85b91335b2acedc7da0932f691f351711a'
    ),
    NewRound: new LogEvent<([roundId: bigint, startedBy: string, startedAt: bigint] & {roundId: bigint, startedBy: string, startedAt: bigint})>(
        abi, '0x0109fc6f55cf40689f02fbaad7af7fe7bbac8a3d2186600afc7d3e10cac60271'
    ),
    NewTransmission: new LogEvent<([aggregatorRoundId: number, answer: bigint, transmitter: string, observations: Array<bigint>, observers: string, rawReportContext: string] & {aggregatorRoundId: number, answer: bigint, transmitter: string, observations: Array<bigint>, observers: string, rawReportContext: string})>(
        abi, '0xf6a97944f31ea060dfde0566e4167c1a1082551e64b60ecb14d599a9d023d451'
    ),
    OraclePaid: new LogEvent<([transmitter: string, payee: string, amount: bigint, linkToken: string] & {transmitter: string, payee: string, amount: bigint, linkToken: string})>(
        abi, '0xd0b1dac935d85bd54cf0a33b0d41d39f8cf53a968465fc7ea2377526b8ac712c'
    ),
    OwnershipTransferRequested: new LogEvent<([from: string, to: string] & {from: string, to: string})>(
        abi, '0xed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278'
    ),
    OwnershipTransferred: new LogEvent<([from: string, to: string] & {from: string, to: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
    PayeeshipTransferRequested: new LogEvent<([transmitter: string, current: string, proposed: string] & {transmitter: string, current: string, proposed: string})>(
        abi, '0x84f7c7c80bb8ed2279b4aab5f61cd05e6374073d38f46d7f32de8c30e9e38367'
    ),
    PayeeshipTransferred: new LogEvent<([transmitter: string, previous: string, current: string] & {transmitter: string, previous: string, current: string})>(
        abi, '0x78af32efdcad432315431e9b03d27e6cd98fb79c405fdc5af7c1714d9c0f75b3'
    ),
    RemovedAccess: new LogEvent<([user: string] & {user: string})>(
        abi, '0x3d68a6fce901d20453d1a7aa06bf3950302a735948037deb182a8db66df2a0d1'
    ),
    RequesterAccessControllerSet: new LogEvent<([old: string, current: string] & {old: string, current: string})>(
        abi, '0x27b89aede8b560578baaa25ee5ce3852c5eecad1e114b941bbd89e1eb4bae634'
    ),
    RoundRequested: new LogEvent<([requester: string, configDigest: string, epoch: number, round: number] & {requester: string, configDigest: string, epoch: number, round: number})>(
        abi, '0x3ea16a923ff4b1df6526e854c9e3a995c43385d70e73359e10623c74f0b52037'
    ),
    ValidatorConfigSet: new LogEvent<([previousValidator: string, previousGasLimit: number, currentValidator: string, currentGasLimit: number] & {previousValidator: string, previousGasLimit: number, currentValidator: string, currentGasLimit: number})>(
        abi, '0xb04e3a37abe9c0fcdfebdeae019a8e2b12ddf53f5d55ffb0caccc1bedaca1541'
    ),
}

export const functions = {
    acceptOwnership: new Func<[], {}, []>(
        abi, '0x79ba5097'
    ),
    acceptPayeeship: new Func<[_transmitter: string], {_transmitter: string}, []>(
        abi, '0xb121e147'
    ),
    addAccess: new Func<[_user: string], {_user: string}, []>(
        abi, '0xa118f249'
    ),
    billingAccessController: new Func<[], {}, string>(
        abi, '0x996e8298'
    ),
    checkEnabled: new Func<[], {}, boolean>(
        abi, '0xdc7f0124'
    ),
    decimals: new Func<[], {}, number>(
        abi, '0x313ce567'
    ),
    description: new Func<[], {}, string>(
        abi, '0x7284e416'
    ),
    disableAccessCheck: new Func<[], {}, []>(
        abi, '0x0a756983'
    ),
    enableAccessCheck: new Func<[], {}, []>(
        abi, '0x8038e4a1'
    ),
    getAnswer: new Func<[_roundId: bigint], {_roundId: bigint}, bigint>(
        abi, '0xb5ab58dc'
    ),
    getBilling: new Func<[], {}, ([maximumGasPrice: number, reasonableGasPrice: number, microLinkPerEth: number, linkGweiPerObservation: number, linkGweiPerTransmission: number] & {maximumGasPrice: number, reasonableGasPrice: number, microLinkPerEth: number, linkGweiPerObservation: number, linkGweiPerTransmission: number})>(
        abi, '0x29937268'
    ),
    getLinkToken: new Func<[], {}, string>(
        abi, '0xe76d5168'
    ),
    getRoundData: new Func<[_roundId: bigint], {_roundId: bigint}, ([roundId: bigint, answer: bigint, startedAt: bigint, updatedAt: bigint, answeredInRound: bigint] & {roundId: bigint, answer: bigint, startedAt: bigint, updatedAt: bigint, answeredInRound: bigint})>(
        abi, '0x9a6fc8f5'
    ),
    getTimestamp: new Func<[_roundId: bigint], {_roundId: bigint}, bigint>(
        abi, '0xb633620c'
    ),
    hasAccess: new Func<[_user: string, _calldata: string], {_user: string, _calldata: string}, boolean>(
        abi, '0x6b14daf8'
    ),
    latestAnswer: new Func<[], {}, bigint>(
        abi, '0x50d25bcd'
    ),
    latestConfigDetails: new Func<[], {}, ([configCount: number, blockNumber: number, configDigest: string] & {configCount: number, blockNumber: number, configDigest: string})>(
        abi, '0x81ff7048'
    ),
    latestRound: new Func<[], {}, bigint>(
        abi, '0x668a0f02'
    ),
    latestRoundData: new Func<[], {}, ([roundId: bigint, answer: bigint, startedAt: bigint, updatedAt: bigint, answeredInRound: bigint] & {roundId: bigint, answer: bigint, startedAt: bigint, updatedAt: bigint, answeredInRound: bigint})>(
        abi, '0xfeaf968c'
    ),
    latestTimestamp: new Func<[], {}, bigint>(
        abi, '0x8205bf6a'
    ),
    latestTransmissionDetails: new Func<[], {}, ([configDigest: string, epoch: number, round: number, latestAnswer: bigint, latestTimestamp: bigint] & {configDigest: string, epoch: number, round: number, latestAnswer: bigint, latestTimestamp: bigint})>(
        abi, '0xe5fe4577'
    ),
    linkAvailableForPayment: new Func<[], {}, bigint>(
        abi, '0xd09dc339'
    ),
    maxAnswer: new Func<[], {}, bigint>(
        abi, '0x70da2f67'
    ),
    minAnswer: new Func<[], {}, bigint>(
        abi, '0x22adbc78'
    ),
    oracleObservationCount: new Func<[_signerOrTransmitter: string], {_signerOrTransmitter: string}, number>(
        abi, '0xe4902f82'
    ),
    owedPayment: new Func<[_transmitter: string], {_transmitter: string}, bigint>(
        abi, '0x0eafb25b'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    removeAccess: new Func<[_user: string], {_user: string}, []>(
        abi, '0x8823da6c'
    ),
    requestNewRound: new Func<[], {}, bigint>(
        abi, '0x98e5b12a'
    ),
    requesterAccessController: new Func<[], {}, string>(
        abi, '0x70efdf2d'
    ),
    setBilling: new Func<[_maximumGasPrice: number, _reasonableGasPrice: number, _microLinkPerEth: number, _linkGweiPerObservation: number, _linkGweiPerTransmission: number], {_maximumGasPrice: number, _reasonableGasPrice: number, _microLinkPerEth: number, _linkGweiPerObservation: number, _linkGweiPerTransmission: number}, []>(
        abi, '0xbd824706'
    ),
    setBillingAccessController: new Func<[_billingAccessController: string], {_billingAccessController: string}, []>(
        abi, '0xfbffd2c1'
    ),
    setConfig: new Func<[_signers: Array<string>, _transmitters: Array<string>, _threshold: number, _encodedConfigVersion: bigint, _encoded: string], {_signers: Array<string>, _transmitters: Array<string>, _threshold: number, _encodedConfigVersion: bigint, _encoded: string}, []>(
        abi, '0x585aa7de'
    ),
    setLinkToken: new Func<[_linkToken: string, _recipient: string], {_linkToken: string, _recipient: string}, []>(
        abi, '0x4fb17470'
    ),
    setPayees: new Func<[_transmitters: Array<string>, _payees: Array<string>], {_transmitters: Array<string>, _payees: Array<string>}, []>(
        abi, '0x9c849b30'
    ),
    setRequesterAccessController: new Func<[_requesterAccessController: string], {_requesterAccessController: string}, []>(
        abi, '0x9e3ceeab'
    ),
    setValidatorConfig: new Func<[_newValidator: string, _newGasLimit: number], {_newValidator: string, _newGasLimit: number}, []>(
        abi, '0xeb457163'
    ),
    transferOwnership: new Func<[_to: string], {_to: string}, []>(
        abi, '0xf2fde38b'
    ),
    transferPayeeship: new Func<[_transmitter: string, _proposed: string], {_transmitter: string, _proposed: string}, []>(
        abi, '0xeb5dcd6c'
    ),
    transmit: new Func<[_report: string, _rs: Array<string>, _ss: Array<string>, _rawVs: string], {_report: string, _rs: Array<string>, _ss: Array<string>, _rawVs: string}, []>(
        abi, '0xc9807539'
    ),
    transmitters: new Func<[], {}, Array<string>>(
        abi, '0x81411834'
    ),
    typeAndVersion: new Func<[], {}, string>(
        abi, '0x181f5a77'
    ),
    validatorConfig: new Func<[], {}, ([validator: string, gasLimit: number] & {validator: string, gasLimit: number})>(
        abi, '0x8e0566de'
    ),
    version: new Func<[], {}, bigint>(
        abi, '0x54fd4d50'
    ),
    withdrawFunds: new Func<[_recipient: string, _amount: bigint], {_recipient: string, _amount: bigint}, []>(
        abi, '0xc1075329'
    ),
    withdrawPayment: new Func<[_transmitter: string], {_transmitter: string}, []>(
        abi, '0x8ac28d5a'
    ),
}

export class Contract extends ContractBase {

    billingAccessController(): Promise<string> {
        return this.eth_call(functions.billingAccessController, [])
    }

    checkEnabled(): Promise<boolean> {
        return this.eth_call(functions.checkEnabled, [])
    }

    decimals(): Promise<number> {
        return this.eth_call(functions.decimals, [])
    }

    description(): Promise<string> {
        return this.eth_call(functions.description, [])
    }

    getAnswer(_roundId: bigint): Promise<bigint> {
        return this.eth_call(functions.getAnswer, [_roundId])
    }

    getBilling(): Promise<([maximumGasPrice: number, reasonableGasPrice: number, microLinkPerEth: number, linkGweiPerObservation: number, linkGweiPerTransmission: number] & {maximumGasPrice: number, reasonableGasPrice: number, microLinkPerEth: number, linkGweiPerObservation: number, linkGweiPerTransmission: number})> {
        return this.eth_call(functions.getBilling, [])
    }

    getLinkToken(): Promise<string> {
        return this.eth_call(functions.getLinkToken, [])
    }

    getRoundData(_roundId: bigint): Promise<([roundId: bigint, answer: bigint, startedAt: bigint, updatedAt: bigint, answeredInRound: bigint] & {roundId: bigint, answer: bigint, startedAt: bigint, updatedAt: bigint, answeredInRound: bigint})> {
        return this.eth_call(functions.getRoundData, [_roundId])
    }

    getTimestamp(_roundId: bigint): Promise<bigint> {
        return this.eth_call(functions.getTimestamp, [_roundId])
    }

    hasAccess(_user: string, _calldata: string): Promise<boolean> {
        return this.eth_call(functions.hasAccess, [_user, _calldata])
    }

    latestAnswer(): Promise<bigint> {
        return this.eth_call(functions.latestAnswer, [])
    }

    latestConfigDetails(): Promise<([configCount: number, blockNumber: number, configDigest: string] & {configCount: number, blockNumber: number, configDigest: string})> {
        return this.eth_call(functions.latestConfigDetails, [])
    }

    latestRound(): Promise<bigint> {
        return this.eth_call(functions.latestRound, [])
    }

    latestRoundData(): Promise<([roundId: bigint, answer: bigint, startedAt: bigint, updatedAt: bigint, answeredInRound: bigint] & {roundId: bigint, answer: bigint, startedAt: bigint, updatedAt: bigint, answeredInRound: bigint})> {
        return this.eth_call(functions.latestRoundData, [])
    }

    latestTimestamp(): Promise<bigint> {
        return this.eth_call(functions.latestTimestamp, [])
    }

    latestTransmissionDetails(): Promise<([configDigest: string, epoch: number, round: number, latestAnswer: bigint, latestTimestamp: bigint] & {configDigest: string, epoch: number, round: number, latestAnswer: bigint, latestTimestamp: bigint})> {
        return this.eth_call(functions.latestTransmissionDetails, [])
    }

    linkAvailableForPayment(): Promise<bigint> {
        return this.eth_call(functions.linkAvailableForPayment, [])
    }

    maxAnswer(): Promise<bigint> {
        return this.eth_call(functions.maxAnswer, [])
    }

    minAnswer(): Promise<bigint> {
        return this.eth_call(functions.minAnswer, [])
    }

    oracleObservationCount(_signerOrTransmitter: string): Promise<number> {
        return this.eth_call(functions.oracleObservationCount, [_signerOrTransmitter])
    }

    owedPayment(_transmitter: string): Promise<bigint> {
        return this.eth_call(functions.owedPayment, [_transmitter])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    requesterAccessController(): Promise<string> {
        return this.eth_call(functions.requesterAccessController, [])
    }

    transmitters(): Promise<Array<string>> {
        return this.eth_call(functions.transmitters, [])
    }

    typeAndVersion(): Promise<string> {
        return this.eth_call(functions.typeAndVersion, [])
    }

    validatorConfig(): Promise<([validator: string, gasLimit: number] & {validator: string, gasLimit: number})> {
        return this.eth_call(functions.validatorConfig, [])
    }

    version(): Promise<bigint> {
        return this.eth_call(functions.version, [])
    }
}
