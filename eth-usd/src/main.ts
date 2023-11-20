import { TypeormDatabase } from "@subsquid/typeorm-store";
import { PriceSnapshot } from "./model";
import { processor } from "./processor";
import * as aggregator from "./abi/aggr";
processor.run(new TypeormDatabase({ supportHotBlocks: true }), async (ctx) => {
  const prices: PriceSnapshot[] = [];
  for (let c of ctx.blocks) {
    for (let log of c.logs) {
      let answers = aggregator.events.AnswerUpdated.decode(log); // decode and normalize the tx data
      prices.push(
        new PriceSnapshot({
          id: log.id,
          block: BigInt(c.header.height),
          updatedAt: BigInt(answers.updatedAt),
          price: BigInt(answers.current),
          timestamp: BigInt(c.header.timestamp),
          oracleAddress: log.address,
        })
      );
    }
  }

  await ctx.store.upsert(prices);
});
