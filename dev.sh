#!/bin/sh
# Node is installed under ~/.local/node on this machine; prefer it when the
# shell has no node of its own.
if ! command -v node >/dev/null 2>&1 && [ -x "$HOME/.local/node/bin/node" ]; then
  PATH="$HOME/.local/node/bin:$PATH"
  export PATH
fi
exec npm run dev "$@"
