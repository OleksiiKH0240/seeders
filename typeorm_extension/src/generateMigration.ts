import { dataSource, options } from "./data-source";
import { generateMigration, createDatabase } from "typeorm-extension";


(async () => {


    // Create the database with specification of the DataSource options
    // await createDatabase({
    //     options
    // });


    // await generateMigration({ dataSource: dataSource, prettify: true, name: "initialMigration", directoryPath: "./migrations" })
    // runSeeders(dataSource);
    // do something with the DataSource

    await dataSource.initialize();
})();