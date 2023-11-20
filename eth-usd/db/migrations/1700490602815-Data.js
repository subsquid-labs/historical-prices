module.exports = class Data1700490602815 {
    name = 'Data1700490602815'

    async up(db) {
        await db.query(`CREATE TABLE "tx" ("id" character varying NOT NULL, "block" numeric NOT NULL, "price" numeric NOT NULL, "timestamp" numeric NOT NULL, "updated_at" numeric NOT NULL, "oracle_address" text NOT NULL, CONSTRAINT "PK_2e04a1db73a003a59dcd4fe916b" PRIMARY KEY ("id"))`)
    }

    async down(db) {
        await db.query(`DROP TABLE "tx"`)
    }
}
