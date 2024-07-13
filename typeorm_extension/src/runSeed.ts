import { dataSource, options } from "./data-source";
import { runSeeders, createDatabase } from "typeorm-extension";


(async () => {
    // Create the database with specification of the DataSource options
    // await createDatabase({
    //     options
    // });

    await dataSource.initialize();

    // await generateMigration({ dataSource: dataSource, prettify: true, name: "initialMigration", directoryPath: "./migrations" })
    await runSeeders(dataSource);
    // do something with the DataSource
})();