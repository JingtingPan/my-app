import concurrently from 'concurrently';
// Run both the server and client concurrently
concurrently([
    {   name: 'server',
        command: 'bun run dev',
        cwd: 'packages/server',
        prefixColor: 'cyan',
    },
    {   name: 'client',
        command: 'bun run dev',
        cwd: 'packages/client',
        prefixColor: 'green',
    }
])