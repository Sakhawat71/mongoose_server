import mongoose from 'mongoose';
import app from './app';
import config from './app/config';
// const PORT = 5000;

async function main() {
  try {
    await mongoose.connect(config.db_url as string);

    app.listen(config.port, () => {
      console.log(`Example app listening on PORT ${config.port}`);
    });
  } catch (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1); // Exit the process with a failure code
  }
}

main();
