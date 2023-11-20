import { TypeormDatabase } from "@subsquid/typeorm-store";
import { PriceSnapshot } from "./model";
import { processor } from "./processor";
import * as aggregator from "./abi/aggr";
import { Database } from "@subsquid/file-store";
import { S3Dest } from "@subsquid/file-store-s3";
import { Column, Table, Types } from "@subsquid/file-store-parquet";
import { assertNotNull } from "@subsquid/evm-processor";

const dbOptions = {
  tables: {
    PricesTable: new Table(
      "eth_usd_prices.parquet",
      {
        log_id: Column(Types.String()),
        block: Column(Types.Uint64()),
        updatedAt: Column(Types.Uint64()),
        price: Column(Types.Uint64()),
        timestamp: Column(Types.Uint64()),
        oracleAddress: Column(Types.String()),
      },
      {
        compression: "GZIP",
        rowGroupSize: 300000,
        pageSize: 1000,
      }
    ),
  },
  dest: new S3Dest(assertNotNull(process.env.S3_BUCKET_NAME), {
    region: process.env.S3_REGION,
    endpoint: process.env.S3_ENDPOINT,
    credentials: {
      secretAccessKey: assertNotNull(process.env.S3_SECRET_ACCESS_KEY),
      accessKeyId: assertNotNull(process.env.S3_ACCESS_KEY_ID),
    },
  }),
  chunkSizeMb: 10,
};

processor.run(new Database(dbOptions), async (ctx) => {
  const prices = [];
  for (let c of ctx.blocks) {
    for (let log of c.logs) {
      let answers = aggregator.events.AnswerUpdated.decode(log); // decode and normalize the tx data
      let log_id = log.id;
      let block = BigInt(c.header.height);
      let updatedAt = BigInt(answers.updatedAt);
      let price = BigInt(answers.current);
      let timestamp = BigInt(c.header.timestamp);
      let oracleAddress = log.address;
      prices.push({
        log_id,
        block,
        updatedAt,
        price,
        timestamp,
        oracleAddress,
      });
    }
  }

  ctx.store.PricesTable.writeMany(prices);
});
