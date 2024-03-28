import { StorybookExecutorSchema } from './schema';
import executor from './executor';

const options: StorybookExecutorSchema = {};

describe('Storybook Executor', () => {
  it('can run', async () => {
    const output = await executor(options);
    expect(output.success).toBe(true);
  });
});
