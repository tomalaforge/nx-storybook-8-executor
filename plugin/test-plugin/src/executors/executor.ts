import { StorybookExecutorSchema } from './schema';
import { ExecutorContext, runExecutor } from '@nx/devkit';
import { runCommand } from '@nx/plugin/testing';


export async function* run(options: StorybookExecutorSchema, context: ExecutorContext) {
  console.log('Executor ran for StorybookRun', options);
  // const output = await Promise.race([
  //   runExecutor(
  //     { project: 'test', target: 'storybook' },
  //     {},
  //     context,
  //   ),
  // ]);

   // runCommand('nx run test:storybook', { cwd: context.root });

  yield* await runExecutor({ project: 'test', target: 'storybook' }, { }, context);
}

export default run;
