# test-logs

Node CLI to test colored logging to terminal using ANSI color codes

This was created as a quick test of colored terminal output, and also a simple Docker image to deploy for testing.

## Runtime Configuration

The logger can run as is, but there are a few environment variables that can be set.

- `INTERVAL` - Sets the interval between logs in milliseconds. Defaults to 500.
- `SERVER` - If this var is set, it starts a simple web server. The default is to not run the server.
- `PORT` - Specifies a specific port to start the web server on. Doesn't take any effect if the SERVER environment variable is not set. Defaults to 3000.
