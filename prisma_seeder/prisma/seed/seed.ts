/**
 * ! Executing this script will delete all data in your database and seed it with 10 user.
 * ! Make sure to adjust the script to your needs.
 * Use any TypeScript runner to run this script, for example: `npx tsx seed.ts`
 * Learn more about the Seed Client by following our guide: https://docs.snaplet.dev/seed/getting-started
 */
import { createSeedClient } from "@snaplet/seed";
import { copycat } from "@snaplet/copycat";

const main = async () => {
  const seed = await createSeedClient();

  // Truncate all tables in the database
  await seed.$resetDatabase();

  /// Seed the database with 10 users
  await seed.user((createMany) => createMany(3, {
    name: (ctx) => copycat.firstName(ctx.seed),
    email: (ctx) => copycat.email(ctx.seed, { domain: "blog.dev" }),
    phone: (ctx) => copycat.phoneNumber(ctx.seed, { length: 11, prefixes: ["+38099", "+38067"] }),
    // Create 10 posts for each of those users
    posts: (createMany) => createMany(2),
  }))

  // await seed.post((x) => x(10))

  // Type completion not working? You might want to reload your TypeScript Server to pick up the changes

  console.log("Database seeded successfully!");

  process.exit();
};

main();