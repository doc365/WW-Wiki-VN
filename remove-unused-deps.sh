#!/bin/bash

# Run depcheck to find unused dependencies
unused_deps=$(depcheck --json | jq -r '.dependencies[]')

# Uninstall each unused dependency
for dep in $unused_deps; do
  npm uninstall $dep
done
