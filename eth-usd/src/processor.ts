import { assertNotNull } from "@subsquid/util-internal";
import { lookupArchive } from "@subsquid/archive-registry";
import {
  BlockHeader,
  DataHandlerContext,
  EvmBatchProcessor,
  EvmBatchProcessorFields,
  Log as _Log,
  Transaction as _Transaction,
} from "@subsquid/evm-processor";
import * as aggregator from "./abi/aggr";
export const processor = new EvmBatchProcessor()
  .setDataSource({
    // Lookup archive by the network name in Subsquid registry
    // See https://docs.subsquid.io/evm-indexing/supported-networks/
    archive: lookupArchive("eth-mainnet"),
    // Chain RPC endpoint is required for
    //  - indexing unfinalized blocks https://docs.subsquid.io/basics/unfinalized-blocks/
    //  - querying the contract state https://docs.subsquid.io/evm-indexing/query-state/
    chain: {
      // Set the URL via .env for local runs or via secrets when deploying to Subsquid Cloud
      // https://docs.subsquid.io/deploy-squid/env-variables/
      url: "https://rpc.ankr.com/eth",
      // More RPC connection options at https://docs.subsquid.io/evm-indexing/configuration/initialization/#set-data-source
      rateLimit: 10,
    },
  })
  .setFinalityConfirmation(75)
  .setFields({
    transaction: {
      from: true,
      value: true,
      hash: true,
      input: true,
    },
  })
  .setBlockRange({
    from: 16842888,
  })

  .addLog({
    address: ["0xE62B71cf983019BFf55bC83B48601ce8419650CC"], //aggregator address, other oracles transmit here
    topic0: [aggregator.events.AnswerUpdated.topic],
    transaction: true,
  });

export type Fields = EvmBatchProcessorFields<typeof processor>;
export type Block = BlockHeader<Fields>;
export type Log = _Log<Fields>;
export type Transaction = _Transaction<Fields>;
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>;
