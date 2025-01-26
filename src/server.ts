import mongoose from 'mongoose';
import config from './app/config';
import app from './app';

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(
        `Crafted Canvas Corner Server is running on port ${config.port}`,
      );
    });
  } catch (error) {
    console.error(error);
  }
}

// call the faction
main();
